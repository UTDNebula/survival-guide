import {Fragment} from "react";
import dynamic from "next/dynamic";
import dbConnect from "../../utilities/dbConnect";
import {Article} from "../../models/article.model";

const DraftEditor = dynamic(() => import("../../components/draftEditor/draftEditor"), {
    ssr: false
})

export async function getStaticProps(context: any) {
    let articleArray: any[] = []
    try {
        await dbConnect()
        articleArray = await Article.find()
        console.log(articleArray)
    } catch (error) {
        console.log(error)
    }

    return {
        props: {
            articles: articleArray.map(article => ({
                title: article.title,
                contributors: article.contributors,
                tags: article.tags,
                mainContainer: JSON.parse(JSON.stringify(article.mainContainer)),
                id: article._id.toString()
            }))
        },
        revalidate: 60
    }
}

function ArticleButton(props: any) {
    const article = props.article
    function onClick() {
        console.log(article.mainContainer.contents)
    }
    return (
        <button onClick={onClick}>Log</button>
    )
}

export default function ArticlePage(props: any) {
    return (
        <Fragment>
            <DraftEditor/>
            <ul>{
                props.articles.map((article: any) => (
                    <section key={article.id}>
                        <div>{article.id}</div>
                        <ArticleButton article={article}/>
                    </section>
                ))
            }</ul>
        </Fragment>
    )
}
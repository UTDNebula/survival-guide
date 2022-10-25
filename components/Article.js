export default function Article(props){
    return(
        <a href={props.url}>{props.articleName}</a>
    )
};
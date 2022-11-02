export default function Article(props){
    return(
        <a href={props.url} target="_blank" rel="noopener noreferrer">{props.articleName}</a>
    )
};
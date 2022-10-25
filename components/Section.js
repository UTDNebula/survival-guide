import Article from './Article.js';
export default function Section(props){
    return (
        <ul>
            <li className='section'>{props.sectionName}</li>
            <li><Article url="https://www.utdallas.edu/" articleName="UT Dallas"/></li>
            <li><Article url="https://github.com/UTDNebula" articleName="UTD Nebula"/></li>
            <li><Article url="https://github.com/UTDNebula/survival-guide" articleName="Survival Guide"/></li>  
        </ul>
    )
};

import Article from './Article.js';
import '../styles/Section.css';
import react, {useState} from 'react';


export default function Section(props){
    
    const [active, setActive] = useState(true);

    const handleClick = (e) => 
    {
        setActive(!active);
    }

    return (
        <div>
            <button className = "Section_Title" onClick={handleClick}>
            
            <img src= "/dropdown_arrow.webp" alt="Logo" /><b>{props.data[0]}</b>
            </button>

        { active ? 
            <ul>
                <li><Article url="https://www.utdallas.edu/" articleName={props.data[1]}/></li>
                <li><Article url="https://github.com/UTDNebula" articleName={props.data[2]}/></li>
                <li><Article url="https://github.com/UTDNebula/survival-guide" articleName="Survival Guide"/></li>  
            </ul>
        : null }
    </div>     
    )
};

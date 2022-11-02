import '../styles/Sidebar.css';
import Section from './Section.js';
export default function Sidebar(){

    var data = [['Introduction','UTDallas','Nebula'], ['Second','UTD','Neb']];

    return(
        <div className='sidebar'>
            <Section data={data[0]}/>
            <Section data={data[1]}/>
        </div>
    )
};

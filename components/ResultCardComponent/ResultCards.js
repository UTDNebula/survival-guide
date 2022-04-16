import { Card, CardGroup, Button } from 'react-bootstrap';
import './ResultCard.css'

const renderCard = (card) => {
    return(
      <div className='ResultCards'>
        <Card key={card.articleid}
         className="result-card shadow-sm p-3 mb-1 bg-white rounded">
        <Card.Img className="result-card-image" 
            variant="top" src={card.image} />
        <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
            {card.description}
        </Card.Text>
        <Button className="result-card-button" variant="primary">Read More</Button>
        </Card.Body>
        </Card>
      </div>
    )
  }
  
  function ResultCards(props) {
    console.log(props)
    return (
      <div>
        <CardGroup>
        {props.JSON.map(renderCard)}
        </CardGroup>
      </div>
    );
  }

  export default ResultCards;
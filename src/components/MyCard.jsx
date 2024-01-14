import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({image, nombre, descripcion, colorBadge, textBadge}) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {nombre}
        </Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Tags colorBadge={colorBadge} textBadge={textBadge} /> 
      </Card.Body>
    </Card></>
  )
}

export default MyCard
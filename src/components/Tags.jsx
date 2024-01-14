import Badge from 'react-bootstrap/Badge';

const Tags = ({colorBadge, textBadge}) => {
  return (
    <>
    <Badge bg={colorBadge}> {textBadge}</Badge>
    </>
  )
}

export default Tags
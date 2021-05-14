//imports from bootstrap
import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'

function footer() {
    return (
        <div>
            <Card>
  <Card.Header>
<center>
<Link to="#" class="fa fa-instagram"></Link>
<Link to="#" class="fa fa-facebook"></Link>
<Link to="#" class="fa fa-fa fa-twitter"></Link>
<Link to="#" class="fa fa-linkedin"></Link>
<Link to="#" class="fa fa-google"></Link>
<Link to="#" class="fa fa-youtube"></Link>
</center>
</Card.Header>
  <Card.Body className="center">
      <Container>
        <span>
          <Link to="#" className="red">Politică de cookies</Link>
        </span> |
        <span>
          <Link to="#" className="red">  Gestionați preferințele</Link>
        </span> |
        <span>
          <Link to="#" className="red">  Date companie </Link>
        </span> |
        <span>
          <Link to="#" className="red">  Politica de confidențialitate</Link>
        </span> |
        <span>
          <Link to="#" className="red">  Termeni și condiții</Link>
        </span>
      </Container>
      <Card.Text>
        © 2021 POLUTDO. Toate drepturile rezervate.
      </Card.Text>
  </Card.Body>
</Card>
        </div>
    )
}
export default footer;
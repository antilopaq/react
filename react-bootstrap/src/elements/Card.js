import React from 'react'
//imports from bootstrap
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
//

function ECard() {
  return (
<div>
<br />
  <Container>
  <Link to="/1" className="black">
  <Card className="card-text-main, photoHover">
    <Card.Img variant="top" src="../images/arenanationala.png" />
    <Container>
      <Card.Body >
        <Card.Title>
          <h4>Din 15 mai suporterii se pot întoarce pe stadioane. Anunțul făcut de Klaus Iohannis </h4> 
        </Card.Title>
        <Card.Text className="font-text">
          ”Activităţile sportive în aer liber vor fi posibile cu 25% din locuri ocupate, deci cu spectatori”, a declarat el. Iohannis a arătat că din acest weekend vor fi posibile activităţile sportive cu 25% spectatori. <br /><br />
          <Button variant="flat">Apasă aici pentru a vedea mai multe.</Button>
        </Card.Text>
    </Card.Body>
  </Container>
  </Card>
  <br />
  </Link>
  </Container>
  
</div>
  );
}

export default ECard;
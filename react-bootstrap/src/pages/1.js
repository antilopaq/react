import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Form from 'react-bootstrap/form'
import Button from 'react-bootstrap/Button'


function Stire1() {
    return (
        <div>
<Container fluid="xl">
    <Row>
{/*STIRE 1*/}
<Col sm={8}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Pandemie</Breadcrumb.Item>
              <Breadcrumb.Item active>Restricții Ridicate</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
            <Link to="/" className="black">
            <Card >
                <Card.Body>
<Card.Title>
  <h3 style={{fontWeight: 700}} >Din 15 mai suporterii se pot întoarce pe stadioane. Anunțul făcut de Klaus Iohannis</h3>
  </Card.Title>
  <Card.Title>
      <p className="right-align">Autor: Dragoș Barboșanu
      <br />Dată publicare: 13-05-2021 20:47
      <br />Dată actualizare: 13-05-2021 21:07</p>
</Card.Title>
                  <Card.Text>Preşedintele Klaus Iohannis a anunţat mai multe etape de relaxare în ceea ce priveşte măsurile impuse pentru a combate pandemia de COVID-19, 
                      prima urmând să intre în vigoare începând cu data de 15 mai. Iohannis a arătat că din acest weekend vor fi posibile activităţile sportive cu 25% spectatori.</Card.Text>
                      <Card.Text><Link to="#" style={{fontWeight: 700}}>Vedeți aici ce alte măsuri se vor relaxa începând cu data de 15 mai.</Link></Card.Text>
                    <Card.Text>
                    ”Activităţile sportive în aer liber vor fi posibile cu 25% din locuri ocupate, deci cu spectatori”, a declarat el.</Card.Text>
                    <Card.Text>
                    ″În interior vom avea, de asemenea, câteva relaxări care încep majoritatea din 1 iunie, când va creşte capacitatea de cazare, va creşte capacitatea 
                        de servire în restaurante şi aşa mai departe. Sunt foarte multe măsuri, ele vor fi prelucrate de Comitetul Naţional 
                        şi vor fi toate aduse la cunoştinţa publicului”, a mai spus şeful statului, precizând că Guvernul a adoptat o hotărâre cu privire la aceste măsuri.</Card.Text>
                    <hr />
                    <Card.Text>
                            <Link to="#" style={{fontWeight: 700}}>Iohannis: De la 1 iunie, nunţi și botezuri în exterior cu maximum 70 de persoane și cel mult 50 în interior </Link>
                    </Card.Text>
                    <hr />
                    <Card.Text>Tot joi, premierul Florin Cîțu anunțase că finala Cupei României, programată pe 22 mai, se va disputa cu spectatori în tribune.</Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src="http://localhost:3000/images/arenanationala.png" />
              </Card>
              </Link>
              <Container> 
                  <hr />           
            <Form>
            <h3> VREI ARTICOLE CA ACESTA PE EMAIL?</h3>
            <p>Înscrie-te la Newsletter-ul zilnic Polutdo.ro și vei primi cele mai importante știri în fiecare dimineață pe adresa ta de email</p>
             <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
               <br />
               <Button variant="flat">Abonare</Button>
               <Form.Text className="text-muted">
                 Nu îți face griji, nu te spamăm. Te poți dezabona cu un singur click.
               </Form.Text>
             </Form.Group>
            </Form></Container>
            </Container>
            <br />
            </Col>
{/*STIRE 1*/}

{/*STIRE 2*/}
            <Col sm={1}>
            <br />
            <Container>
                <Link to="/#" className="black">
                    <Card style={{ width: '30rem'}}>
                    <Card.Img variant="top" src="https://image.stirileprotv.ro/media/images/330x220/Feb2021/62173070.jpg" />
                    <Card.Body>
                    <Card.Title className="font-text">Klaus Iohannis: Este foarte probabil ca anul şcolar să se încheie cu toţi elevii în şcoală</Card.Title>
                    </Card.Body>
                    </Card>
                </Link>
            </Container>
            <br />
            <Container>
                <Link to="/#" className="black">
                    <Card style={{ width: '30rem'}}>
                    <Card.Img variant="top" src="https://image.stirileprotv.ro/media/images/330x220/Aug2020/62145140.jpg" />
                    <Card.Body>
                    <Card.Title className="font-text">Iohannis: De la 1 iunie, nunţi și botezuri în exterior cu maximum 70 de persoane și...</Card.Title>
                    </Card.Body>
                    </Card>
                </Link>
            </Container>
            <br />
            <Container>
                <Link to="/#" className="black">
                    <Card style={{ width: '30rem'}}>
                    <Card.Img variant="top" src="https://image.stirileprotv.ro/media/images/330x220/Feb2021/62174549.jpg" />
                    <Card.Body>
                    <Card.Title className="font-text">Klaus Iohannis: Din 15 mai se elimină purtarea măștii în exterior și restricțiile de...</Card.Title>
                    </Card.Body>
                    </Card>
                </Link>
            </Container>
            <br />
            <Container>
                <Link to="/2" className="black">
                    <Card style={{ width: '30rem'}}>
                    <Card.Img variant="top" src="https://image.stirileprotv.ro/media/images/330x220/May2021/62189386.jpg" />
                    <Card.Body>
                    <Card.Title className="font-text">Președintele Iohannis, la exercițiul NATO: Ne pregătim pentru misiuni de luptă de...</Card.Title>
                    </Card.Body>
                    </Card>
                </Link>
            </Container>
            <br />
            </Col>
            </Row>
            <hr />
</Container>
</div>
    )
}


export default Stire1;
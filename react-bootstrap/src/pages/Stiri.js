import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import TextLoop from "react-text-loop";
import Jumbotron from 'react-bootstrap/Jumbotron'

function Stiri() {
    return (
        <div>
{/* CONTAINER 4 STIRI*/}
        <Container>
        <h1>
      <div class="separator" style={{fontWeight: 500}}>
    <TextLoop interval={5500} fade>
    <span>Știrile zilei </span>
    <span>Știrile tale </span>
    </TextLoop>
  </div>
  <br />
  </h1>
          <Row>
{/*STIRE 1*/}
            <Col sm={6}>
            <Container>
            <Link to="/1" className="black">
              <Card className="m-4, photoHover">
                <Card.Img variant="top" src="/images/1.png" />
                  <Card.Body className="center">
                    <Card.Title>
                      <h3>O mie de pisici pe străzi</h3>
                    </Card.Title>
                  <Card.Text>O mie de pisici sălbatice, eliberate pe străzile din Chicago pentru a combate șobolanii.</Card.Text>
                <br /><Button variant="flat">Apasă aici pentru a vedea mai multe.</Button>
                  </Card.Body>
              </Card>
            </Link>
            </Container>
            <br />
            </Col>
{/*STIRE 1*/}

{/*STIRE 2*/}
            <Col sm={6}>
            <Container>
            <Link to="/2" className="black">
            <Card className="m-4, photoHover">
                <Card.Img variant="top" src="/images/2.png" />
                <Card.Body className="center">
                  <Card.Title>
                    <h3 >Ursii Panda Roșii</h3>
                  </Card.Title>
                  <Card.Text>Un nou studiu atestă ca Urșii Panda Roșii sunt printre cele mai drăguțe ființe din lume.</Card.Text>
                  <br /><Button variant="flat">Apasă aici pentru a vedea mai multe.</Button>
                </Card.Body>
              </Card>
              </Link>
            </Container>
            <br />
            </Col>
{/*STIRE 2*/}

{/*STIRE 3*/}
            <Col sm={6}>
            <Container>
            <Link to="/3" className="black">
            <Card className="m-4, photoHover">
                <Card.Img variant="top" src="/images/3.png" />
                <Card.Body className="center">
                  <Card.Title>
                    <h3>Pisica dispărută</h3>
                  </Card.Title>
                  <Card.Text> Motanul Zimbrăriei din Neamţ, dispărut de luni, s-a întors acasă.</Card.Text>
                 <br /><Button variant="flat">Apasă aici pentru a vedea mai multe.</Button>
                </Card.Body>
              </Card>
              </Link>
            </Container>
            <br />
            </Col>
{/*STIRE 3*/}

{/*STIRE 4*/}
          <Col sm={6}>
          <Container>
          <Link to="/4" className="black">
            <Card className="m-4, photoHover">
              <Card.Img variant="top" src="/images/4.png"/>
                <Card.Body className="center">
                  <Card.Title>
                    <h3 className="title-color">Marinarul ce a salvat 3 pisici</h3>
                  </Card.Title>
                  <Card.Text> Marinarul care a devenit erou după ce a salvat 3 pisoi.</Card.Text>
                  <br /><Button variant="flat">Apasă aici pentru a vedea mai multe.</Button>
               </Card.Body>
              </Card>
           </Link>
         </Container>
         <br />
         </Col>
{/*STIRE 4*/}
          </Row>
        </Container>
        <br />
{/* CONTAINER 4 STIRI*/}

{/* WEATHER */}
<Container>
<Jumbotron fluid>
<Jumbotron className="black-background" fluid>
  <h1 className="center white"> Vremea <img alt="pentru alt"  src="https://www.accuweather.com/images/logos/accuweather.svg"></img>
  <br /></h1>
  <h4 className="center white">14 MAI - 25 MAI</h4>
</Jumbotron>
  <Container>
  <ul className="weather center">
  <Row>
      <Col>
        <li>
        <span style={{fontWeight: 700}}>VIN.</span>
        </li>
      </Col>
      <Col>
        <li>
          14.05 
        </li>
      </Col>
      <Col>
        <li>
       <img src="https://www.accuweather.com/images/weathericons/2.svg" style={{width: 34, height: 35}} alt="weather"></img>
        </li>
      </Col>
      <Col>
        <li>
          Însorit
        </li>
      </Col>
      <Col>
        <li>
        <span style={{fontWeight: 700, fontSize: 24}}>22°</span>/11° 
        </li>
      </Col>
      <Col>
        <li>
          <img alt="pentru alt"  src="https://www.accuweather.com/images/components/weather/daily-forecast-card-nfl/drop-icon.svg"></img> 10%
        </li>
      </Col>
  </Row>
  <Row>
      <Col>
        <li>
        <span style={{fontWeight: 700}}>SÂM.</span>
        </li>
      </Col>
      <Col>
        <li>
          15.05
        </li>
      </Col>
      <Col>
        <li>
       <img src="https://www.accuweather.com/images/weathericons/12.svg" style={{width: 34, height: 35}} alt="weather"></img>
        </li>
      </Col>
      <Col>
        <li>
        Ploaie
        </li>
      </Col>
      <Col>
        <li>
        <span style={{fontWeight: 700, fontSize: 24}}>25°</span>/13° 
        </li>
      </Col>
      <Col>
        <li>
        <img alt="pentru alt"  src="https://www.accuweather.com/images/components/weather/daily-forecast-card-nfl/drop-icon.svg"></img> 10%
        </li>
      </Col>
  </Row>
  <Row>
      <Col>
        <li>
          <span style={{fontWeight: 700}}>DUM.</span>
        </li>
      </Col>
      <Col>
        <li>
          16.05 
        </li>
      </Col>
      <Col>
        <li>
       <img src="https://www.accuweather.com/images/weathericons/15.svg" style={{width: 34, height: 35}} alt="weather"></img>
        </li>
      </Col>
      <Col>
        <li>
        Ploaie
        </li>
      </Col>
      <Col>
        <li>
        <span style={{fontWeight: 700, fontSize: 24}}>25°</span>/12°
        </li>
      </Col>
      <Col>
        <li>
        <img alt="pentru alt"  src="https://www.accuweather.com/images/components/weather/daily-forecast-card-nfl/drop-icon.svg"></img> 60%
        </li>
      </Col>
  </Row>
  <Row>
      <Col>
        <li>
        <span style={{fontWeight: 700}}>LUN.</span>
        </li>
      </Col>
      <Col>
        <li>14.05 
        </li>
      </Col>
      <Col>
        <li>
       <img src="https://www.accuweather.com/images/weathericons/17.svg" style={{width: 34, height: 35}} alt="weather"></img>
        </li>
      </Col>
      <Col>
        <li>
          Ploaie
        </li>
      </Col>
      <Col>
        <li>
        <span style={{fontWeight: 700, fontSize: 24}}>25°</span>/15°
        </li>
      </Col>
      <Col>
        <li>
        <img alt="pentru alt"  src="https://www.accuweather.com/images/components/weather/daily-forecast-card-nfl/drop-icon.svg"></img> 60%
        </li>
      </Col>
  </Row>
  </ul>
  </Container>
  </Jumbotron>
  </Container>
{/* WEATHER */}

{/* CONTAINER CAROUSEL*/}
<Container>
  <br />
  <Link to="#">
  <Carousel>
  <Carousel.Item>
    <img
      style={{maxWidth: 1100, maxHeight: 600}}
      className="d-block w-100"
      src="https://image.stirileprotv.ro/media/images/650x360/May2021/62189637.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>Confruntări între Israel și Hamas. Armata israeliană spune că militarii săi nu au pătruns pe teritoriul palestinian</h3>
   </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{maxWidth: 1100, maxHeight: 600}}
      className="d-block w-100"
      src="https://image.stirileprotv.ro/media/images/650x360/May2021/62189909.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Israelul pregătește o invazie terestră în Fâșia Gaza. Armata pune la punct ultimele detalii</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{maxWidth: 1100, maxHeight: 600}}
      className="d-block w-100"
      src="https://image.stirileprotv.ro/media/images/650x360/May2021/62189908.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3>Trei rachete, lansate din Liban spre coasta de nord a Israelului. Mai multe trupe sunt trimise la granița cu Gaza</h3>
   </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Link>
<br />
</Container>


{/* CONTAINER CAROUSEL*/}

{/* CONTAINER 3 STIRI MICI*/}
        <hr />
        <Container>
        <h1><div class="separator" style={{fontWeight: 500}}>Emisiuni</div></h1>
        <br />
        <Link to="/#" className="black">
          <Row>
            <Col sm="4" className="align-items-center photoHover">
              <Image rounded  src="https://img.a1.ro/?u=https%3A%2F%2Fa1.ro%2Fuploads%2Fmodules%2Flayout%2Fcustom%2F347%2F303x171_1xea19c5b84178a383e0da4d2113a916ad.jpg"></Image>
                <h1>Mireasa</h1>
                <p>LUNI-VINERI de la ora 14:00, SÂMBĂTA de la ora 13:30</p>
            </Col>
            <Col sm="4" className="align-items-center photoHover">
              <Image rounded  src="https://img.a1.ro/?u=https%3A%2F%2Fa1.ro%2Fuploads%2Fmodules%2Flayout%2Fcustom%2F347%2F303x171_2x6d6997a83f5bc05016d88f0002c60974.jpg"></Image>
                <h1>Burlacul</h1>
                <p>În fiecare Joi de la ora 23.00 la Antena 1 în premieră</p>
            </Col>
            <Col sm="4" className="align-items-center photoHover">
              <Image rounded  src="https://img.a1.ro/?u=https%3A%2F%2Fa1.ro%2Fuploads%2Fmodules%2Flayout%2Fcustom%2F347%2F303x171_2x106edb388d44eadda3e4f0348db0c56f.jpg"></Image>
                <h1>Chefi la cuțite</h1>
                <p>Duminică 20.00 Luni și Marți 20.30 la Antena 1 </p>
            </Col>
          </Row>
        </Link>
        </Container>
        <br />
{/* CONTAINER 3 STIRI MICI*/}

{/* CONTAINER DUPA EMISIUNI */}
<Container>
<h1><div class="separator" style={{fontWeight: 500}}>Știri externe</div></h1><br />
  <Link to="/1" className="black">
  <Card className="card-text-main, photoHover">
    <Card.Img variant="top" src="https://i0.1616.ro/media/2/2701/33639/20185585/1/gaza.jpg?width=860" />
    <Container>
      <Card.Body >
        <Card.Title>
          <h4>Conflictul din Gaza se intensifică, cu tiruri de rachete şi atacuri aeriene / Trei rachete, lansate din Liban spre coasta de nord a Israelului. Artileria israeliană, la graniţa cu Gaza </h4> 
        </Card.Title>
        <Card.Text className="font-text">
        Militanţii palestinieni au tras joi cu rachete în centrul comercial al Israelului, în timp ce Israelul a continuat campania de bombardamente 
        în Gaza şi a masat tancuri şi trupe la graniţa enclavei, transmite Reuters. Trei rachete au fost lansate joi seară din Liban în Marea Mediterană, spre coasta de nord a Israelului, 
        au anunţat Forţele de Apărare Israeliene (IDF), în timp ce artileria israeliană a fost trimisă la graniţa cu Fâşia Gaza, relatează BBC.<br /><br />
          <Button variant="flat">Apasă aici pentru a vedea mai multe.</Button>
        </Card.Text>
    </Card.Body>
  </Container>
  </Card>
  <br />
  </Link>
  </Container>
        <br />
{/* CONTAINER DUPA EMISIUNI */}



{/* CONTAINER TOP VAZUTE*/}
      <Container>
        <h1><div class="separator" style={{fontWeight: 500}}>Top văzute</div></h1>
        <br />
          <Link to="/#" className="black">
          <Container>
            <Col lg className="black-red">
              <Container>
                <h1>Burlacul, 13 mai 2021. Ce fată a fost eliminată de Andi Constantin</h1>
                <p>Burlacul a decis să o elimine pe Kubra Taskiran în episodul 10 din sezonul 6, 
                  difuzat pe 13 mai 2021, tânăra alături de care a avut parte de un date extrem de plăcut, 
                  dar care l-a făcut pe burlac să realizeze niște lucruri extrem de importante pentru el și relația cu tânăra exotică.
                </p>
                <p><img alt="text important" src="https://a1.ro/uploads/modules/elements/421/upload_logo_1613059808.jpg" style={{width: 60, height : 40}}></img> Joi, 13.05.2021, 22:37</p>
              </Container>
              </Col><br />
              <Col lg className="black-red">
                <Container>
                <h1>Serial Adela, episodul 35 și episodul 36, din 13 mai 2021</h1>
                <p>În episodul 36 din 13 mai 2021, se petrec lucruri multe în casa familiei Andronic. Delia hotărăște să nu-și 
                  mai ascundă relația cu Bebe, Adela și Mihai se ceartă din cauza dispariție lui fără să spună nimic, iar Mitu 
                  încearcă să scape de povara care îi stă pe umeri de atâta timp.
                </p>
                <p><img alt="text important" src="https://a1.ro/uploads/modules/elements/695/upload_logo_1613059230.jpg" style={{width: 60, height : 40}}></img> Joi, 13.05.2021, 22:27</p>
                </Container>
              </Col><br />
            <Col lg className="black-red">
                <Container>
                <h1>Super Neatza cu Răzvan și Dani lansează un concurs alături de Casa Rusu!</h1>
                <p>Neatza cu Răzvan și Dani lansează un concurs alături de Casa Rusu și pune în joc premii mari și nenumărate surprize. Răspunde la întrebarea "Care dintre cei trei Super meșteri vrei să vină în casa ta și de ce? Răzvan, Dani sau Ristei?" și poți fi tu unul dintre câștigători.
                </p>
                <p><img alt="text important" src="https://a1.ro/uploads/modules/elements/339/upload_logo_1613059676.jpg" style={{width: 60, height : 40}}></img> Joi, 13.05.2021, 16:25</p>
                </Container>
              </Col><br />
              <Col lg className="black-red">
                <Container>
                <h1>Alertă ANM! Vreme rea în toată România. Ploi torențiale, grindină, vijelii și cod roșu de inundații</h1>
                <p>Administrația Națională de Meteorologie (ANM) a emis o alertă meteo de vreme severă în toată România până vineri seara la ora 21.00. 
                  Toată țara va fi afectată de ploi, grindină și vijelii. Ce zonă este afectată de codul roșu de inundații.
                </p>
                <p><img alt="text important" src="https://img.a1.ro/?u=https%3A%2F%2Fa1.ro%2Fuploads%2Fmodules%2Fnews%2F0%2F2021%2F4%2F8%2F1047859%2F1617864063m8twn54k.jpg&w=470" style={{width: 60, height : 40}}></img> Joi, 13.05.2021, 10:58</p>
                </Container>
              </Col><br />
              <Col lg className="black-red">
                <Container>
                <h1>Bucureștiul intră în scenariul verde. Restaurantele și cafenelele vor funcționa la 50% capacitate, evenimente cu 300 de persoane</h1>
                <p>Bucureștiul a intrat în scenariul verde, autoritățile au decis creşterea gradului de ocupare al restaurantelor, cafenelelor 
                  şi sălilor de spectacol la 50% şi organizarea evenimentelor în aer liber cu 300 de participanţi.
                </p>
                <p><img alt="text important" src="https://www.ambasador.ro/wp-content/uploads/2019/10/palatul-parlamentului-bucuresti-recomandare-hotel-ambasador-hotel-4-stele-bucuresti.jpg" style={{width: 60, height : 40}}></img> Joi, 13.05.2021, 13:25</p>
                </Container>
              </Col><br />
            </Container>
          </Link>
      </Container>
{/* CONTAINER TOP VAZUTE*/}

      </div>
    )
}

export default Stiri;
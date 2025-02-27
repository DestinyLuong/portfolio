import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardGroup() {
  return (
    <div className="card-columns">
      <Row xs={1} md={3} className="g-4">
          <Col key={0}>
            <Card id="cards">
                  <Card.Body>
                  <Card.Title>CS Central</Card.Title>
                  <Card.Text>
                    When I taught at Berkeley's CS Class 
                  </Card.Text>
                  <Card.Link href= "https://destinyluong.github.io/cs-central/" target="_blank"> 
                  Here's a video (Check it out here!)</Card.Link>
                  <Card.Text>
                      <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Text>
                  </Card.Body>
              </Card>
              <Card id="cards">
                  <Card.Body>
                  <Card.Title> Chocolate Melting Animation Project</Card.Title>
                  <Card.Text>
                    I had coded an animation of chocolate melting using python on JupyterHub.
                  </Card.Text>
                  <Card.Link href= "https://docs.google.com/presentation/d/1Owl5-j9Guap3kZcJTnVZOJ-rOyxeuFHOGxFHGclFd3U/edit?usp=sharing" target="_blank"> 
                  Presentation on how it was made</Card.Link>
                  </Card.Body>
              </Card>
              <Card id="cards">
                  <Card.Body>
                  <Card.Title> Bubble Animation </Card.Title>
                  <Card.Text>
                      I worked with 3 other group members to create an animation of a floating bubble.
                  </Card.Text>
                  <Card.Link href= "https://destinyluong.github.io/CS184Final/" target="_blank"> 
                  Bubble Paper</Card.Link>
                  <Card.Link href= "https://docs.google.com/presentation/d/15RddkzA71ReE_19Nrt3RvRVQaO2WnFum_xNJeZyEXRs/edit?usp=sharing" target="_blank"> 
                  Bubble Presentation</Card.Link>
                  </Card.Body>
              </Card>
              
              <Card id="cards">
                  <Card.Body>
                  <Card.Title>2048</Card.Title>
                  <Card.Text>
                    For one of my CS classes we had to create a game of 2048, it was really fun but also really hard. 
                  </Card.Text>
                  <Card.Link href= "https://drive.google.com/file/d/1tuiGQ5lJLsv7AjBqfo38SVa4Blx2lp82/view?usp=sharing" target="_blank"> 
                  Here's a video (Check it out here!)</Card.Link>
                  <Card.Text>
                      <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Text>
                  </Card.Body>
              </Card>
          </Col>
          <Col key={1}>
          <Card id="cards">
                  <Card.Body>
                  <Card.Title> Security Design </Card.Title>
                  <Card.Text>
                    I worked with a partner to design a way for a user to have a secure sign in. 
                    Unfortunately I can't show off the code due to our class not allowing us to release it, 
                    but this is our presentation.
                  </Card.Text>
                  <Card.Link href= "https://docs.google.com/presentation/d/1iECoPCpTXc7NfQMW05-0CKL1FSZNa8qnEwQX6gJQa28/edit?usp=sharing" target="_blank"> 
                  Security Design Presentation</Card.Link>
                  <Card.Text>
                      <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Text>
                  </Card.Body>
              </Card>
              <Card id="cards">
                  <Card.Body>
                  <Card.Title>ASEC 2/5</Card.Title>
                  <Card.Text>
                      This was a project created by three of my friends and I during a week long Code Nation Combats Covid Hackathon.
                      It was really fun learning to use maps and graphs in our game. In the end we couldn't fix all the bugs,
                      but we were still able to come together, work hard, and get first place! 
                  </Card.Text>
                  <Card.Link href="https://cn-combats-covid.glitch.me/" target="_blank"> CodeNation Awards Page (Check it out here!)</Card.Link>
                  </Card.Body>
              </Card>
              <Card className="p-2" id="cards">
              <Card.Title>Build Your Own World</Card.Title>
                  <blockquote className="blockquote mb-0 card-body">
                  <p>
                  
                  </p>
                  <footer className="blockquote-footer">
                      <small className="text-muted">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                      </small>
                  </footer>
                  </blockquote>
              </Card>
              <Card id="cards">
                  <Card.Body>
                  <Card.Title>Match</Card.Title>
                  <Card.Text>
                  I made a match game honoring the CodeNation staff and volunteers.
                  </Card.Text>
                  <Card.Text>
                      <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Text>
                  </Card.Body>
              </Card>
          </Col>

          <Col key={2}>
          <Card id="cards">
                  <Card.Body>
                  <Card.Title>Postmates Package</Card.Title>
                  <Card.Text>
                      I made a node package that aimed to make it easier for people using the Postmates' API.
                      
                  </Card.Text>
                  <Card.Link href="https://github.com/DestinyLuong/postmatesClient" target="_blank">GitHub Page (Check it out here!)</Card.Link>
                  </Card.Body>
              </Card>
              <Card className="text-center" id="cards">
                  <Card.Body>
                  <Card.Title>Hog</Card.Title>
                  <Card.Text>
                      Project for CS61A class at Berkeley completed by a partner and I.
                  </Card.Text>
                  <Card.Text>
                      <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Text>
                  </Card.Body>
              </Card>
              <Card className="text-right" id="cards">
                  <blockquote className="blockquote mb-0 card-body">
                  <p>
                  During my Postmates Internship I was tasked with making an node js package for users who wanted 
                  to use the Postmates API more easily. I also helped to write some of their documentation in their developer docs.
                  </p>
                  <Card.Link href="https://docs.google.com/presentation/d/14asj3gxT19VrS6-KCF8Aj0kBLy06NgdcWRFa3-SUTmw/edit?usp=sharing" target="_blank"> Presentation (Check it out here!)</Card.Link>
                  </blockquote>
              </Card>
          </Col>
        
      </Row>
    </div>
  );
}

export default CardGroup;
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Figure} from 'react-bootstrap';
import sacnas from '../images/sacnas.jpg';

function CardGroup() {
  return (
    <div className="card-columns">
      <Row xs={1} md={3} className="g-4">
          <Col key={0}>
          <Card id="cards">
                  <Card.Body>
                  <Card.Title>CS Central</Card.Title>
                  <Card.Text>
                    I taught a UC Berkeley CS Class  over the summer for highschoolers who were transitioning to college,
                    We wrote lessons and homework problems which were then uploaded to this website.
                  </Card.Text>
                  <Card.Link href= "https://destinyluong.github.io/cs-central/" target="_blank"> 
                  CS Central Website</Card.Link>
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
                  <Card.Title>UC Berkeley ACE Lab</Card.Title>
                  <div className="imageCard">
                  <a
                            className="App-link"
                            href={sacnas}
                            target="_blank"
                            rel="noopener noreferrer"
                            float="right"
                            >
                            <img max-width= "auto" height= "250px" float="left" src={sacnas}></img>
                </a>
                </div>
                  <Card.Text>
                    In 2022 I worked for UC Berkeley's ACE Lab, a research group working to make the CS learning experience
                    smoother for both students and instructors, through asyncronous online programming projects and questions.
                    Some of our work included writing coding questions that were to be used online, maintaining the site hosting these questions, 
                    creating an autograder and cheat detecter to look at student work, and parsing data and feedback 
                    from the classes where this learning model was implemented. My group and I were able to present our findings at the 
                    SACNAS conference in Puerto Rico the same year!
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
                  <Card.Link href="https://cn-combats-covid.glitch.me/" target="_blank"> CodeNation Awards Page </Card.Link>
                  </Card.Body>
              </Card>
              <Card id="cards">
                <Card.Body>
                <Card.Title>Working with Curves and Meshes</Card.Title>
                <Card.Text>
                  For our computer graphics class, I worked with a partner to create a program that would produce bezier curves and meshes.
                </Card.Text>
                <Card.Link href= "https://cal-cs184-student.github.io/hw-webpages-sp24-DestinyLuong/hw2/index.html" target="_blank"> 
               Paper on Curves and Meshes</Card.Link>
                </Card.Body>
              </Card>
              <Card id="cards">
                <Card.Body>
                <Card.Title>Memory Match</Card.Title>
                <Card.Text>
                  I attended a non-profit program called Code Nation, and for our final project,
                  I designed and created a match game to honor volunteers we worked with. 
                </Card.Text>
                <Card.Link href= "https://drive.google.com/file/d/1tuiGQ5lJLsv7AjBqfo38SVa4Blx2lp82/view?usp=sharing" target="_blank"> 
                Memory Match Video</Card.Link>
                </Card.Body>
            </Card>
          </Col>

          <Col key={2}>
              <Card className="text-center" id="cards">
                  <Card.Body>
                  <Card.Title>UniRanker</Card.Title>
                  <Card.Text>
                     I worked with 2 others on a website aimed at providing high schoolers and college students to compare and
                     comment on different aspects of University life.
                  </Card.Text>
                  <Card.Link href="https://github.com/ahmadmuradmalik/UniRanker/tree/main" target="_blank"> UniRanker Github</Card.Link>
                  </Card.Body>
              </Card>
              <Card className="text-right" id="cards">
              <Card.Body>
                  <Card.Title>Postmates Package</Card.Title>
                  <Card.Text>
                    During my Postmates Internship I was tasked with making an node js package for users who wanted 
                    to use the Postmates API more easily. I also helped to write some of their documentation in their developer docs.
                  </Card.Text>
                  <Card.Link href="https://docs.google.com/presentation/d/14asj3gxT19VrS6-KCF8Aj0kBLy06NgdcWRFa3-SUTmw/edit?usp=sharing" target="_blank"> Internship Presenation</Card.Link>
                  <Card.Link href="https://github.com/DestinyLuong/postmatesClient" target="_blank"> Postmates Client Github</Card.Link>
                  </Card.Body>
              </Card>
              <Card className="text-right" id="cards">
              <Card.Body>
                  <Card.Title>Raytracing and Lighting</Card.Title>
                  <Card.Text>
                    For this project, I worked with a partner to simulate lighting and raytracing and how they interact with certain scenes and objects.
                  </Card.Text>
                  <Card.Link href="https://cal-cs184-student.github.io/hw-webpages-sp24-DestinyLuong/hw3/index.html" target="_blank"> Paper on Sampling Techniques </Card.Link>
                  </Card.Body>
              </Card>
              <Card className="text-right" id="cards">
              <Card.Body>
                  <Card.Title>Cloth Simulations</Card.Title>
                  <Card.Text>
                    I worked with a partner to recreate how cloth when pinned, draped, and when colliding with other objects.
                  </Card.Text>
                  <Card.Link href="https://cal-cs184-student.github.io/hw-webpages-sp24-DestinyLuong/hw4/index.html" target="_blank"> Paper on Sampling Techniques</Card.Link>
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
          </Col>
        
      </Row>
    </div>
  );
}

export default CardGroup;
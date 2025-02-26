import {CardColumns, Card} from 'react-bootstrap';

function Cards(){
    return (
        <CardColumns>
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
                <Card.Title> Bubble Animation </Card.Title>
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
                <Card.Title> Security Design </Card.Title>
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
                <Card.Title> khk</Card.Title>
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
                <Card.Img variant="top" src="holder.js/100px160" />
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
            <Card id="cards">
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
            <Card id="cards">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Postmates Package</Card.Title>
                <Card.Text>
                    I made a node package that aimed to make it easier for people using the Postmates' API.
                    
                </Card.Text>
                <Card.Link href="https://github.com/DestinyLuong/postmatesClient" target="_blank">GitHub Page (Check it out here!)</Card.Link>
                </Card.Body>
            </Card>
            <Card id="cards">
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
            <Card id="cards">
                <Card.Img src="holder.js/100px160" />
                <blockquote className="blockquote mb-0 card-body">
                <p>
                My Postmates Internship had a really big affect on me
                </p>
                <Card.Link href="https://docs.google.com/presentation/d/14asj3gxT19VrS6-KCF8Aj0kBLy06NgdcWRFa3-SUTmw/edit?usp=sharing" target="_blank"> Presentation (Check it out here!)</Card.Link>
                </blockquote>
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
            
            
        </CardColumns>
    );
}


export default Cards;
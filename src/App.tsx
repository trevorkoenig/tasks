import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p className="">Trevor&#39;s Snazzy New Webpage</p>
            <Container>
                <Row>
                    <Col>
                        <h4>Cool facts about Trevor:</h4>
                        <ul>
                            <li>#1 Juggler in North America</li>
                            <li>Borderline Illiterate</li>
                            <li>Scared of Knives</li>
                        </ul>
                    </Col>
                    <Col>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                    <Col>
                        <img
                            width="60%"
                            src={process.env.PUBLIC_URL + "/chickpea.JPG"}
                            alt="Chickpea the Hedgehog"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="fillCol">
                        <div className="redBox">
                            <br></br>
                        </div>
                    </Col>
                    <Col className="fillCol">
                        <div className="redBox">
                            <br></br>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br></br>
        </div>
    );
}

export default App;

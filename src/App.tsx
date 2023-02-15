import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <br></br>
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
                        <img
                            width="60%"
                            src={process.env.PUBLIC_URL + "/chickpea.JPG"}
                            alt="Chickpea the Hedgehog"
                        />
                    </Col>
                </Row>
            </Container>
            <p>Hello World!</p>
            <br></br>
        </div>
    );
}

export default App;

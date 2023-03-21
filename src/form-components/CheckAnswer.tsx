import React, { useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [correct, setCorrect] = useState<boolean>(false);

    function checkAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setCorrect(event.target.value === expectedAnswer);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Container style={{ justifyContent: "center", display: "flex" }}>
                <Form.Group controlId="guess" as={Row}>
                    <Form.Label column sm="auto">
                        Answer:
                    </Form.Label>
                    <Col sm="auto">
                        <Form.Control type="text" onChange={checkAnswer} />
                    </Col>
                    <Col sm="auto">
                        <div>{correct ? "✔️" : "❌"}</div>
                    </Col>
                </Form.Group>
            </Container>
        </div>
    );
}

import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

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
            <Form.Group controlId="guess" as={Row}>
                <Form.Label column sm={1}>
                    Answer:
                </Form.Label>
                <Col sm={9}>
                    <Form.Control type="text" onChange={checkAnswer} />
                </Col>
                <Col sm={2}>
                    <div>{correct ? "✔️" : "❌"}</div>
                </Col>
            </Form.Group>
        </div>
    );
}

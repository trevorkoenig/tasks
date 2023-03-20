import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Container style={{ justifyContent: "center", display: "flex" }}>
                <Row sm="auto">
                    <Form.Group controlId="answersDropdown">
                        <Form.Label>Select an answer</Form.Label>
                        <Col>
                            <Form.Select
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            >
                                {options.map(
                                    (o: string): JSX.Element => (
                                        <option key={o} value={o}>
                                            {o}
                                        </option>
                                    )
                                )}
                            </Form.Select>
                            <br></br>
                            {answer === expectedAnswer ? "✔️" : "❌"}
                        </Col>
                    </Form.Group>
                </Row>
            </Container>
        </div>
    );
}

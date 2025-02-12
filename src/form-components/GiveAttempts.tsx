import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [additionalAttempts, setAdditionalAttempts] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <Container fluid="sm">
                <Row style={{ justifyContent: "center" }}>
                    <Col md={3}>
                        <Form.Group controlId="attempts">
                            <Form.Label>
                                Attempts remaining: {attemptsLeft}
                            </Form.Label>
                            <Form.Control
                                type="number"
                                value={additionalAttempts}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setAdditionalAttempts(
                                        parseInt(event.target.value)
                                    )
                                }
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <br></br>
                <Row style={{ justifyContent: "center" }}>
                    <Col sm="auto">
                        <Button
                            onClick={() => {
                                setAttemptsLeft(
                                    attemptsLeft +
                                        (isNaN(additionalAttempts)
                                            ? 0
                                            : additionalAttempts)
                                );
                                setAdditionalAttempts(0);
                            }}
                        >
                            gain
                        </Button>
                    </Col>

                    <Col sm="auto">
                        <Button
                            disabled={attemptsLeft === 0}
                            onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                        >
                            use
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [input, setInput] = useState<string>("Your Name");

    return (
        <div>
            <h3>Edit Mode</h3>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col sm="auto">
                        <Form.Check
                            className="mb-3"
                            type="switch"
                            id="is-edit-mode"
                            label="Edit Mode"
                            checked={editMode}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setEditMode(event.target.checked)}
                        />
                    </Col>
                    <Col sm={2}>
                        {editMode ? (
                            <Form.Group controlId="guess" as={Row}>
                                <Form.Control
                                    type="text"
                                    value={input}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => setInput(event.target.value)}
                                />
                                <Row sm="auto">
                                    <Form.Check
                                        id="is-a-student"
                                        label=" Is a student?"
                                        checked={isStudent}
                                        onChange={(
                                            event: React.ChangeEvent<HTMLInputElement>
                                        ) => setIsStudent(event.target.checked)}
                                    />
                                </Row>
                            </Form.Group>
                        ) : (
                            <p>
                                {input} is {isStudent ? "" : "not"} a student
                            </p>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startQuiz() {
        setInProgress(true);
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <span>
                <Button onClick={startQuiz} disabled={inProgress || !attempts}>
                    Start Quiz
                </Button>
                <Button
                    onClick={() => setInProgress(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => setAttempts(attempts + 1)}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
            </span>
            <p>Attempts: {attempts}</p>
            <p>In Progress: {inProgress ? "True" : "False"}</p>
        </div>
    );
}

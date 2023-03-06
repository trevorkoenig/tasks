import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answerVisibility, setAnswerVisibility] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => setAnswerVisibility(!answerVisibility)}>
                {answerVisibility ? "Hide Answer" : "Show Answer"}
            </Button>
            <p>Answer: {answerVisibility && <span>42</span>}</p>
        </div>
    );
}

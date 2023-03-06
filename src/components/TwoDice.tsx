import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(6);

    function rollRight() {
        setRight(d6());
    }

    function rollLeft() {
        setLeft(d6());
    }

    return (
        <div>
            <span>
                <Button onClick={rollLeft}>Roll Left</Button>
            </span>
            <span>
                <Button onClick={rollRight}>Roll Right</Button>
            </span>
            <p>
                Left: <span data-testid="left-die">{left}</span> Right:{" "}
                <span data-testid="right-die">{right}</span>
            </p>
            {left === right && (
                <p>You {left === 1 ? <span>Lose</span> : <span>Win</span>}!</p>
            )}
        </div>
    );
}

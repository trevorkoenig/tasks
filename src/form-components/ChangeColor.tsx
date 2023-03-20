import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");

    const colors: string[] = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "pink"
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((c: string): JSX.Element => {
                return (
                    <Form.Check
                        inline
                        type="radio"
                        key={c}
                        name={`response-${c}`}
                        onChange={(e) => setColor(e.target.value)}
                        id={`radio-${c}`}
                        label={c}
                        value={c}
                        checked={color === c}
                    />
                );
            })}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <div
                    data-testid="colored-box"
                    style={{
                        color: "white",
                        backgroundColor: color,
                        width: 80
                    }}
                >
                    {color}
                </div>
            </div>
        </div>
    );
}

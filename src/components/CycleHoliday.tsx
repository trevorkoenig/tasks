import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Christmas"
        | "Earth Day"
        | "Halloween"
        | "New Years Eve"
        | "Thanksgiving";

    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    const alphabetical: Record<Holiday, Holiday> = {
        Christmas: "Earth Day",
        "Earth Day": "Halloween",
        Halloween: "New Years Eve",
        "New Years Eve": "Thanksgiving",
        Thanksgiving: "Christmas"
    };
    const chronological: Record<Holiday, Holiday> = {
        "Earth Day": "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "New Years Eve",
        "New Years Eve": "Earth Day"
    };

    return (
        <div>
            <Button onClick={() => setHoliday(alphabetical[holiday])}>
                Advance By Alphabet
            </Button>
            <Button onClick={() => setHoliday(chronological[holiday])}>
                Advance By Year
            </Button>
            <p>{holiday}</p>
        </div>
    );
}

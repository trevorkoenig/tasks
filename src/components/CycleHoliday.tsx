import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type holiday =
        | "Christmas"
        | "Earth Day"
        | "Halloween"
        | "New Years Eve"
        | "Thanksgiving";
    const alphabetical: Record<holiday, holiday> = {
        Christmas: "Earth Day",
        "Earth Day": "Halloween",
        Halloween: "New Years Eve",
        "New Years Eve": "Thanksgiving",
        Thanksgiving: "Christmas"
    };
    const chronological: Record<holiday, holiday> = {
        "Earth Day": "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas",
        Christmas: "New Years Eve",
        "New Years Eve": "Earth Day"
    };

    return <div>Cycle Holiday</div>;
}

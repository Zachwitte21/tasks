import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ChangeHolidayAlphabetically: Record<string, string> = {
    "Holiday: 🎃": "Holiday: 👴🏾",
    "Holiday: 🎄": "Holiday: 🎃",
    "Holiday: 👴🏾": "Holiday: ✨",
    "Holiday: ✨": "Holiday: 🦃",
    "Holiday: 🦃": "Holiday: 🎄"
};

const ChangeHolidayYear: Record<string, string> = {
    "Holiday: 🎃": "Holiday: 🦃",
    "Holiday: 🦃": "Holiday: 🎄",
    "Holiday: 👴🏾": "Holiday: 🎃",
    "Holiday: 🎄": "Holiday: ✨",
    "Holiday: ✨": "Holiday: 👴🏾"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Holiday: 🎃");

    function changeByAlpha(): void {
        const newHoliday = ChangeHolidayAlphabetically[holiday];
        setHoliday(newHoliday);
    }

    function changeByYear(): void {
        const newHoliday = ChangeHolidayYear[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <span>
                <Button onClick={changeByAlpha}>Advance By Alphabet</Button>
                <Button onClick={changeByYear}>Advance By Year</Button>
            </span>
            <div>{holiday}</div>
        </div>
    );
}

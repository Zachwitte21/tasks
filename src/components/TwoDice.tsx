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
    const [dice, setDice] = useState<number>(1);
    const [dice2, setDice2] = useState<number>(6);

    function sameDice(): string {
        if (dice === dice2) {
            if (dice === 1) {
                return "You Lost!";
            } else {
                return "You Won!";
            }
        }
        return "";
    }
    return (
        <div>
            <span>
                <Button onClick={() => setDice(d6)}>Roll Left</Button>
                <span data-testid="left-die"> {dice} </span>
            </span>
            <span>
                <Button onClick={() => setDice2(d6)}>Roll Right</Button>
                <span data-testid="right-die"> {dice2} </span>
            </span>
            <div>{sameDice()}</div>
        </div>
    );
}

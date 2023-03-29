import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "green",
    "blue",
    "cyan",
    "purple",
    "magenta",
    "black",
    "white"
];

export function ChangeColor(): JSX.Element {
    const [colors] = useState<string[]>(COLORS);
    const [color, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color: string) => (
                    <span key={color}>
                        <Form.Check
                            inline
                            type="radio"
                            name="color"
                            onChange={updateColor}
                            id={color}
                            label={color}
                            value={color}
                        />
                    </span>
                ))}
            </div>
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                You have chosen {color}
            </div>
        </div>
    );
}

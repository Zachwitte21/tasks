import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>();

    function updateChoices(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="choices">
                <Form.Label>Select The Correct Choices?</Form.Label>
                <Form.Select value={choice} onChange={updateChoices}>
                    {options.map((choice: string) => (
                        <option key={choice} value={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {expectedAnswer === choice ? (
                    <span>Correct ✔️!</span>
                ) : (
                    <span>Wrong ❌!</span>
                )}
            </div>
        </div>
    );
}

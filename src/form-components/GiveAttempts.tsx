import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Number Of Attempts: {attemptsLeft} </span>
            <div>
                {attemptsLeft > 0 ? (
                    <Button onClick={() => setAttemptsLeft(attemptsLeft - 1)}>
                        Use
                    </Button>
                ) : (
                    <Button
                        onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                        disabled
                    >
                        Use
                    </Button>
                )}
                <Button
                    onClick={() =>
                        setAttemptsLeft(
                            attemptsLeft + Number(attemptsRequested)
                        )
                    }
                >
                    Gain
                </Button>
                <Form.Group controlId="formMovieReleased">
                    <Form.Label>Request A Number Of Attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={attemptsRequested}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setAttemptsRequested(event.target.value)}
                    />
                </Form.Group>
            </div>
        </div>
    );
}

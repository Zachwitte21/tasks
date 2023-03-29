import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);
    function startQ() {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    function stopQ() {
        setProgress(false);
    }

    return (
        <div>
            <Button onClick={startQ} disabled={inProgress || attempts === 0}>
                Start Quiz {attempts}
            </Button>
            <Button onClick={stopQ} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(1 + attempts)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}

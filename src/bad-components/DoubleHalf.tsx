import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { DoubleHalfProps } from "./DoubleHalfState";

function Doubler(props: DoubleHalfProps): JSX.Element {
    return (
        <Button onClick={() => props.setDhValue(2 * props.dhValue)}>
            Double
        </Button>
    );
}

function Halver(props: DoubleHalfProps): JSX.Element {
    return (
        <Button onClick={() => props.setDhValue(0.5 * props.dhValue)}>
            Halve
        </Button>
    );
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}

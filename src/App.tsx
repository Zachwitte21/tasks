import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Zachary Witte UD CISC275 with React Hooks and TypeScript. Hello
                World
            </header>
            <h1 className="h1">This is a header</h1>
            <Container>
                <Row>
                    <img
                        src="https://ae01.alicdn.com/kf/Sd0a1e840d5ce48b1826c677a0027ce0ef/New-Cute-Game-Overwatch-Winston-Gorilla-Plush-Kids-Stuffed-Toys-For-Children-Gifts-26CM.jpg_Q90.jpg_.webp"
                        alt="A photo of Winston from Overwatch"
                    />
                    <ul>
                        <li>Winston has two hands</li>
                        <li>Winston has two feet</li>
                        <li>Winston has two eyes</li>
                    </ul>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                    <Col>
                        <div className="redRectangle"></div>
                    </Col>
                    <Col>Hello</Col>
                </Row>
                <Row>
                    <Col>Goodbye</Col>
                    <Col>
                        <div className="redRectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

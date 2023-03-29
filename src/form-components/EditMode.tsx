import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [editMode, setEditMode] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="editmode"
                label="Edit Mode?"
                checked={editMode}
                onChange={updateMode}
            />
            {editMode === false ? (
                <div>
                    {name}
                    {student ? " is a student" : " is not a student"}.
                </div>
            ) : (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="isStudent"
                        label="Is A Student?"
                        checked={student}
                        onChange={updateStudent}
                    />
                    <Form.Group controlId="setname">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                </div>
            )}
        </div>
    );
}

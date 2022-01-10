import React from 'react';

function StudentSelector(student) {
    const first_name = student.student

    return (
        <label>
            <input
                type="checkbox"
                defaultChecked
                value={first_name}
                name={first_name}
            />
            {first_name}
        </label>
    );
}
export default StudentSelector;
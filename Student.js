import React from 'react'
import Grafiek from './Grafiek'
import { useParams } from 'react-router-dom';

function Student({ opdrachtData, fun, difficulty, buttonClicked, handleClick, students }) {

    const naam = useParams()
    const studentsSelected = [naam.name]
    const studentSelected = naam.name
    const newOpdrachtData = opdrachtData.filter((name) =>
        studentsSelected.includes(name.student)
    )

    const gemPerOpdracht = Object.keys(newOpdrachtData).map(function (k) {
        const item = newOpdrachtData[k];
        return {
            naam: item.opdracht,
            gemDiff: item.diff,
            gemFun: item.fun,
        };
    });

    const student = (students.filter(student => student.first_name === studentSelected))

    return (
        <div className="main">
            <div className="student-info">
                <h3>{student[0].first_name} {student[0].last_name}</h3>
                <div className="inner-info">
                    <div className="inner">
                        <img src={student[0].photo} alt="Photo" className="studentimg" />
                    </div>
                    <div className="inner">
                        <ul>
                            <li>Email: {student[0].email}</li>
                            <li>Phone: {student[0].phone}</li>
                        </ul>
                    </div>

                </div>
            </div>
            < Grafiek
                gemPerOpdracht={gemPerOpdracht}
                difficulty={difficulty}
                fun={fun}
                buttonClicked={buttonClicked}
                handleClick={handleClick}
            />
            <div className="legenda">
                <div className="moeilijk" />
                <p>Moeilijkheid</p>
                <div className="leuk" />
                <p>Fungehalte</p>
            </div >
        </div>
    )
}

export default Student;
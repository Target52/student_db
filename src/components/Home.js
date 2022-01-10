import React, { Component } from 'react';
import Grafiek from './Grafiek'
import StudentSelector from './StudentSelector'

function Home({ refreshPage, students, handleChange, opdrachtData, fun, buttonClicked, handleClick, difficulty }) {

    const scorePerOpdracht = opdrachtData.reduce(function (prev, curr) {
        if (!prev[curr.opdracht]) {
            prev[curr.opdracht] = { ...curr, count: 1 }
            return prev
        }
        prev[curr.opdracht].diff += curr.diff
        prev[curr.opdracht].fun += curr.fun
        prev[curr.opdracht].count += 1
        return prev
    }, {})

    const gemPerOpdracht = Object.keys(scorePerOpdracht).map(function (k) {
        const item = scorePerOpdracht[k];
        return {
            naam: item.opdracht,
            gemDiff: item.diff / item.count,
            gemFun: item.fun / item.count,
        };
    });

    return (
        <div className="main">
            <div className="studentsCheckbox">
                <p>Select students:</p>
                <form onChange={handleChange}>
                    {students.map((student) => (
                        <StudentSelector
                            key={student.id}
                            student={student.first_name}
                        />
                    ))}
                    <div className='buttons'>
                        <button onClick={refreshPage}>
                            Reset
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <Grafiek
                    gemPerOpdracht={gemPerOpdracht}
                    difficulty={difficulty}
                    fun={fun}
                    buttonClicked={buttonClicked}
                    handleClick={handleClick}
                />
            </div>
            <div className="legenda">
                <div className="moeilijk" />
                <p>Moeilijkheid</p>
                <div className="leuk" />
                <p>Fungehalte</p>
            </div >
        </div>
    )
}

export default Home
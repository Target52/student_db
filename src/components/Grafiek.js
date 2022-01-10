import React from 'react'
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryGroup,
    VictoryLine
} from 'victory'

const Grafiek = ({ gemPerOpdracht, fun, difficulty, buttonClicked, handleClick }) => {
    const graph = <VictoryChart
        height={275}
        maxDomain={{ x: 40 }}
        padding={{ left: 20, top: 25, right: 10, bottom: 75 }}
    >
        <VictoryAxis
            dependentAxis
            domain={{ y: [0, 5.2] }}
            style={{
                tickLabels: {
                    fontSize: 5
                }
            }}
        />
        <VictoryAxis
            independentAxis
            style={{
                tickLabels: {
                    fontSize: 5,
                    textAnchor: 'end',
                    angle: -60
                }
            }}
        />
        {buttonClicked ? (
            <VictoryGroup offset={4} style={{ data: { width: 8 } }}>
                {difficulty && (
                    <VictoryBar
                        data={gemPerOpdracht}
                        x='naam'
                        y='gemDiff'
                        barWidth={4}
                        style={{ data: { fill: 'rgb(227, 93, 51)' } }}
                    />
                )}
                {fun && (
                    <VictoryBar
                        data={gemPerOpdracht}
                        x='naam'
                        y='gemFun'
                        barWidth={4}
                        style={{ data: { fill: 'rgb(252,244,167)' } }}
                    />
                )}
            </VictoryGroup>
        ) : (
            <VictoryGroup
                colorScale={['rgb(227, 93, 51)', 'rgb(252,244,167)']}
                offset={4}
                style={{ data: { width: 8 } }}
            >
                {difficulty && (
                    <VictoryLine data={gemPerOpdracht} x='naam' y='gemDiff' barWidth={4} />
                )}
                {fun && (
                    <VictoryLine data={gemPerOpdracht} x='naam' y='gemFun' barWidth={4} />
                )}
            </VictoryGroup>
        )}
    </VictoryChart>

    return (
        <div classnaam='grafiek'>
            {graph}
            <div className='buttons'>
                <button onClick={handleClick} name='difficulty'>
                    {difficulty ? "No difficulty" : 'Show difficulty'}
                </button>
                <button onClick={handleClick} name='fun'>
                    {fun ? "No funfactor" : 'Show funfactor'}
                </button>
                <button onClick={handleClick} name='buttonClicked'>
                    {buttonClicked ? 'Show line' : 'Show bar'}
                </button>
            </div>
        </div>
    )
}

export default Grafiek
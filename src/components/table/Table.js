import React, { useState } from 'react';
import Utilities from '../../utilities/Utilities';
import './Table.css';

const Table = (props) => {

    const [start, setStart] = useState(props.defaults.start);
    const [increment, setIncrement] = useState(props.defaults.increment);
    const [max, setMax] = useState(props.defaults.max);
    const [width, setWidth] = useState(props.defaults.width);
    const [showConfiguration, setShowConfiguration] = useState(false);

    const handleSetStart = (start) => {
        setStart(start);
    }

    const handleSetIncrement = (increment) => {
        setIncrement(increment);
    }

    const handleSetMax = (max) => {
        setMax(max);
    }

    const handleSetWidth = (width) => {
        setWidth(width);
    }

    const handleShowConfiguration = () => {
        setShowConfiguration(showConfiguration ? false : true);
    }

    return (
        <div className="table_and_config_container">
            <div className="table_container" style={{border: `1px solid ${props.color}`, width: `${width}%`}}>
                <table>
                    <tbody>
                        {Utilities.createRowsAndDataCells(start, increment, max).map((row, index) => {
                            return (
                                <tr>
                                    {row.map(cell => {
                                        return (
                                            <td>{cell}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="table_buttons_container">
                    <button onClick={handleShowConfiguration}>Configuration</button>
                </div>
            </div>
            {showConfiguration ?
                <div className="config_container">
                    <div className="config_inputs">
                        <p>Table: <span style={{color: props.color}}>{props.color}</span></p>
                        <input type="number" placeholder={`Start: ${start}`} onChange={event => handleSetStart(event.target.value)}/>
                        <br />
                        <input type="number" placeholder={`Increment: ${increment}`} onChange={event => handleSetIncrement(event.target.value)}/>
                        <br />
                        <input type="number" placeholder={`Max: ${max}`} onChange={event => handleSetMax(event.target.value)}/>
                        <br />
                        <input type="number" placeholder={`Width: ${width}`} onChange={event => handleSetWidth(event.target.value)} min="20"/>
                        <br />
                        <select>
                            <option default>D</option>
                            <option>LTR-UP</option>
                        </select>
                        <br />
                        <button onClick={handleShowConfiguration}>OK</button>
                    </div>
                </div>
            : ''}

        </div>
    )
}

export default Table;

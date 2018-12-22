import React, { useState } from 'react';
import Utilities from '../../utilities/Utilities';
import './Table.css';

const Table = (props) => {

    const [rowsAndCells, setRowsAndCells] = useState(props.defaults.rows);
    const [start, setStart] = useState(props.defaults.start);
    const [increment, setIncrement] = useState(props.defaults.increment);
    const [max, setMax] = useState(props.defaults.max);
    const [width, setWidth] = useState(props.defaults.width);
    const [showConfiguration, setShowConfiguration] = useState(false);

    const handleSetStart = (start) => {
        setStart(parseInt(start));
    }

    const handleSetIncrement = (increment) => {
        setIncrement(parseInt(increment));
    }

    const handleSetMax = (max) => {
        setMax(parseInt(max));
    }

    const handleSetWidth = (width) => {
        setWidth(width);
    }

    const handleClick = (buttonId) => {
        if (buttonId === `${props.color}_create_button`) {
            setRowsAndCells(Utilities.createRowsAndDataCells(start, increment, max));
            setShowConfiguration(false);
        } else {
            setShowConfiguration(true);
        }
    }

    return (
        <div className="table_and_config_container">
            <div className="table_container" style={{border: `1px solid ${props.color}`, width: `${width}%`}}>
                <table>
                    <tbody>
                        {rowsAndCells.map((row, index) => {
                            return (
                                <tr key={`row_${row}_index${index}`}>
                                    {row.map(cell => {
                                        return (
                                            <td key={cell}>{cell}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="table_buttons_container">
                    <button id={`${props.color}_config_button`} onClick={event => handleClick(event.target.id)}>Configuration</button>
                    <p>{width}%</p>
                </div>
            </div>
            {showConfiguration ?
                <div className="config_container">
                    <div className="config_inputs">
                        <p>Table: <span style={{color: props.color}}>{props.color}</span></p>
                        <input type="number" placeholder={`Start: ${start}`} onChange={event => handleSetStart(event.target.value)} min="1"/>
                        <br />
                        <input type="number" placeholder={`Increment: ${increment}`} onChange={event => handleSetIncrement(event.target.value)} min="1"/>
                        <br />
                        <input type="number" placeholder={`Max: ${max}`} onChange={event => handleSetMax(event.target.value)} max="100"/>
                        <br />
                        <input type="number" placeholder={`Width: ${width}`} onChange={event => handleSetWidth(event.target.value)} min="20"/>
                        <br />
                        <select>
                            <option default>Direction</option>
                            <option>LTR-UP</option>
                        </select>
                        <br />
                        <button id={`${props.color}_create_button`} onClick={event => handleClick(event.target.id)}>OK</button>
                    </div>
                </div>
                : '' }
        </div>
    )
}

export default Table;

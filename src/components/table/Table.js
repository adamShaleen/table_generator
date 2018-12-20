import React, { useState } from 'react';
import './Table.css';

const Table = (props) => {

    const [n, setN] = useState(props.defaults.n);
    const [x, setX] = useState(props.defaults.x);
    const [m, setM] = useState(props.defaults.m);
    const [w, setW] = useState(props.defaults.w);
    const [showConfiguration, setShowConfiguration] = useState(false);

    const handleSetW = (width) => {
        setW(width);
    }

    const handleShowConfiguration = () => {
        setShowConfiguration(true);
    }

    return (
        <div className="table_and_config_container">
            <div className="table_container" style={{border: `1px solid ${props.color}`, width: `${w}%`}}>
                <table>
                    <tbody>
                        <tr>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                        </tr>
                        <tr>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                        </tr>
                        <tr>
                            <td>test</td>
                            <td>test</td>
                            <td>test</td>
                        </tr>
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
                        <input type="number" placeholder="N" />
                        <br />
                        <input type="number" placeholder="X" />
                        <br />
                        <input type="number" placeholder="M" />
                        <br />
                        <input type="number" placeholder="W" onChange={event => handleSetW(event.target.value)}/>
                        <br />
                        <select>
                            <option default>D</option>
                            <option>LTR-UP</option>
                        </select>
                        <br />
                        <button>OK</button>
                        <button>Cancel</button>
                    </div>
                </div>
            : ''}

        </div>
    )
}

export default Table;

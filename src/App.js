import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Table from './components/table/Table';

const App = () => {

    const redTableDefault = {
        start: 8,
        increment: 1,
        max: 29,
        width: 20,
        rows: [[8, 9, 10 , 11, 12], [13, 14, 15, 16, 17], [18, 19, 20, 21, 22], [23, 24, 25, 26, 27], [28, 29]]
    }

    const greenTableDefault = {
        start: 231,
        increment: 1,
        max: 247,
        width: 30,
        rows: [[231, 232, 233 , 234, 235], [236, 237, 238, 239, 240], [241, 242, 243, 244, 245], [246, 247]]
    }

    const blueTableDefault = {
        start: 47,
        increment: 2,
        max: 81,
        width: 40,
        rows: [[47, 49, 51 , 53, 55], [57, 59, 61, 63, 65], [67, 69, 71, 73, 75], [77, 79, 81]]
    }

    return (
      <div className="App">
        <Header/>
        <Table defaults={redTableDefault} color="red"/>
        <Table defaults={greenTableDefault} color="green"/>
        <Table defaults={blueTableDefault} color="blue"/>
      </div>
    );
}

export default App;

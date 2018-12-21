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

    return (
      <div className="App">
        <Header/>
        <Table defaults={redTableDefault} color="red"/>
      </div>
    );
}

export default App;

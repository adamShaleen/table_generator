import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Table from './components/table/Table';

const App = () => {

    const redTableDefault = {start: 8, increment: 1, max: 29, width: 20}

    return (
      <div className="App">
        <Header/>
        <Table defaults={redTableDefault} color="red"/>
      </div>
    );
}

export default App;

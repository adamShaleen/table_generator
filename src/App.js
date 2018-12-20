import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Table from './components/table/Table';

const App = () => {

    const redTableDefault = {n: 8, x: 1, m: 29, w: 44}

    return (
      <div className="App">
        <Header/>
        <Table defaults={redTableDefault} color="red"/>
      </div>
    );
}

export default App;

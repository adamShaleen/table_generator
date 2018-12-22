import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Table from './components/table/Table';
import Defaults from './utilities/Defaults';

const App = () => {

    return (
      <div className="App">
        <Header/>
        <div id="table_container">
            <Table defaults={Defaults.redTableDefault} color="red"/>
            <Table defaults={Defaults.greenTableDefault} color="green"/>
            <Table defaults={Defaults.blueTableDefault} color="blue"/>
        </div>
      </div>
    );
}

export default App;

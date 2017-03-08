
import React, { Component } from 'react';
import { DateTimeInput } from 'amazeui-react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                    <div style={{width: 200}}>
                        <DateTimeInput dateTime="2015-05-20 12:12" />
                    </div>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}
import React from 'react';
import './App.css';
import DatePicker from './components/DatePicker';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Birthday Date Picker</h1>
            </header>
            <main>
                <DatePicker />
            </main>
        </div>
    );
};

export default App;

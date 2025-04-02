import React from 'react';
import Question1 from './Question1';
import Question2 from './Question2';
import './app.css';


function App() {
    return (
        <div className="App">
          <h1>M11L2 - Assignment on React State and Props </h1>
          <h2>Question 1: Updating User Name</h2>
            <Question1 />
            <br></br>
          <h2>Question 2: Favorite Movie List</h2>
          <p>~** Click on the movie title to see additional details about the film. **~</p>
            <Question2 />
        </div>
    );
}

export default App;
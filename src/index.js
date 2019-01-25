// Import React & ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'


// Create a react component
const App = () => {
  const buttonText = { text: 'Click me!'};
  const style = {
    backgroundColor: 'blue', 
    borderRadius: '5px',
    padding: '5px',
    color: '#fff'
  }
  let labelText = 'Enter name';

  return (
    <div>
      <label htmlFor="name" className="label">{ labelText }</label>
      <input name="name" type="text" placeholder="John Doe"/>
      <button style={style}>
        { buttonText.text }
        </button>
    </div>
  );
}

// Show component on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
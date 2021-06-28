import React from 'react'; // <== import React

//Test if babel works, enter in console:
//npx babel src/app.js

// const app = () => console.log('Babel test works!');

const App = () => {
    return <h1 className="app">Hello World!</h1>;
  };

  //or:
  //const App = () => <h1 className="app">Hello World!</h1>;

  export default App;
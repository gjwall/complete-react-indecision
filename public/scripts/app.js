console.log('App.js is running')

// JSX - Javascript XML
//let template = <p>This is JSX from app.js</p>;
let template = /*#__PURE__*/React.createElement("p", {
    id: "someid"
  }, "This is JSX from app.js");
  
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)
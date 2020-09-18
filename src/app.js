let template = (
    <div>
        <h1>Indecision app</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);  

let templateTwo = (
    <div>
        <h1>GJW</h1>
        <p>Age: 100</p>
        <p>Location: My location</p>
    </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot)

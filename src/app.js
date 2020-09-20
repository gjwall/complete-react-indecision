let app = {
    title: 'Indecision app',
    subtitle : 'Use the computer'
}

let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
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

ReactDOM.render(template, appRoot)

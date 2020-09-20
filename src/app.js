const app = {
    title: 'Indecision app',
    subtitle: 'Use the computer',
    options: ['One','Two'] 
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? 'Options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);  

const user = {
    name: 'XYZ',
    age: 18,
    location: 'here'
};

function getLocation (location) {
    if(location) {
        return <p>Location: {location}</p>
    }
};

const templateTwo = (
    <div>
        <h1>{user.name ? user.name: 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
        {<h3>My H3</h3>}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
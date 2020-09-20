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

let count = 0;
const addOne = () => {
    console.log('addOne called');
};

const minusOne = () => {
    console.log('minusOne called');
};

const reset = () => {
    console.log('reset called');
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={(addOne)}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);
console.log(templateTwo);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
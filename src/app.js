const app = {
    title: 'Indecision app',
    subtitle: 'Use the computer',
    options: [] 
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value; 

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const clearOptions = (e) => {
    app.options = [];
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={clearOptions}>Remove All</button>
            <ol>
                { // The { opens a javascript expression.
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                } {/* Close the javascript expression */}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );  

    ReactDOM.render(template, appRoot);
};

render();

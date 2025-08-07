const { createRoot } = ReactDOM;
const root = createRoot(document.getElementById('root'));

function CounterApp() {
    const [count, setCount] = React.useState(0);

    const operations = [
        { label: 'Increment', func: () => setCount(count + 1) },
        { label: 'Reset', func: () => setCount(0) },
        { label: 'Decrement', func: () => setCount(count - 1) },
    ];

    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Counter App'),
        React.createElement('h2', null, count),
        operations.map((op, index) =>
            React.createElement('button', { key: index, onClick: op.func }, op.label)
        )
    );
}

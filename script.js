const { createRoot } = ReactDOM;
const root = createRoot(document.getElementById('root'));

function CounterApp() {
    const [count, setCount] = React.useState(0);
    const [history, setHistory] = React.useState([]);
    const [step, setStep] = React.useState(1);

    const operations = [
        { label: 'Increment', func: () => { setCount(count + step); setHistory([...history, count]); } },
        { label: 'Reset', func: () => { setCount(0); setHistory([...history, count]); } },
        { label: 'Decrement', func: () => { setCount(count - step); setHistory([...history, count]); } },
    ];

    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Counter App'),
        React.createElement('h2', null, count),
        React.createElement('input', { type: 'number', value: step, onChange: (e) => setStep(Number(e.target.value)) }),
        operations.map((op, index) =>
            React.createElement('button', { key: index, onClick: op.func }, op.label)
        ),
        React.createElement('button', { onClick: () => setHistory([]) }, 'Clear History'),
        React.createElement('div', null,
            React.createElement('h3', null, 'History:'),
            history.map((val, idx) => React.createElement('p', { key: idx }, val))
        )
    );
}

root.render(React.createElement(CounterApp));

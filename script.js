const { createRoot } = ReactDOM;
const root = createRoot(document.getElementById('root'));

function CounterApp() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Counter App'),
    React.createElement('h2', null, count),
    React.createElement('button', { onClick: increment }, 'Increment'),
    React.createElement('button', { onClick: reset }, 'Reset'),
    React.createElement('button', { onClick: decrement }, 'Decrement')
  );
}

root.render(React.createElement(CounterApp));

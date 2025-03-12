import { expect, test } from 'bun:test';

test('component single', () => {
  function App() {
    return <div>App</div>;
  }

  expect(<App />).toBe('<div>App</div>');
});

test('component multiple', () => {
  function Child() {
    return <div>Child</div>;
  }

  function Parent() {
    return (
      <div>
        <Child />
      </div>
    );
  }

  expect(<Parent />).toBe('<div><div>Child</div></div>');
});

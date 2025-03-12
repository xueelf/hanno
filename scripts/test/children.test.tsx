import { expect, test } from 'bun:test';

test('children null', () => {
  expect(<div>{null}</div>).toBe('<div></div>');
});

test('children undefined', () => {
  expect(<div>{undefined}</div>).toBe('<div></div>');
});

test('children boolean', () => {
  expect(<div>{true}</div>).toBe('<div></div>');
});

test('children number', () => {
  expect(<div>{114514}</div>).toBe('<div>114514</div>');
});

test('children string', () => {
  expect(<div>content</div>).toBe('<div>content</div>');
});

test('children array', () => {
  expect(<div>{[0, 1, 2]}</div>).toBe('<div>012</div>');
});

test('children object', () => {
  expect(<div>{{}}</div>).toBe('<div>[object Object]</div>');
});

test('children element', () => {
  expect(
    <div>
      <span>children</span>
    </div>,
  ).toBe('<div><span>children</span></div>');

  expect(
    <div>
      <span>children</span>
      <span>children</span>
    </div>,
  ).toBe('<div><span>children</span><span>children</span></div>');

  expect(
    <>
      <span>children</span>
      <span>children</span>
    </>,
  ).toBe('<span>children</span><span>children</span>');
});

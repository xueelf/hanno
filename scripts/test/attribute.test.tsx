import { expect, test } from 'bun:test';

test('attribute string', () => {
  expect(<div title="title">attribute string</div>).toBe(
    '<div title="title">attribute string</div>',
  );
});

test('attribute boolean', () => {
  expect(<input disabled value="attribute boolean" />).toBe(
    '<input disabled="" value="attribute boolean" />',
  );
});

test('attribute class', () => {
  expect(<div class="class">class string</div>).toBe('<div class="class">class string</div>');

  expect(<div class={['class1', 'class2']}>class array</div>).toBe(
    '<div class="class1 class2">class array</div>',
  );

  expect(<div class={{ class1: true, class2: false }}>class object</div>).toBe(
    '<div class="class1">class object</div>',
  );
});

test('attribute style', () => {
  expect(<div style="color: red">style string</div>).toBe(
    '<div style="color: red">style string</div>',
  );

  expect(<div style={{ color: 'red', fontSize: '16px' }}>style object</div>).toBe(
    '<div style="color: red; font-size: 16px">style object</div>',
  );
});

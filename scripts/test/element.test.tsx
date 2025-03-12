import { expect, test } from 'bun:test';

test('element for basic', () => {
  expect(<span>element for basic</span>).toBe('<span>element for basic</span>');
});

test('element for void', () => {
  expect(<input>element void</input>).toBe('<input />');
});

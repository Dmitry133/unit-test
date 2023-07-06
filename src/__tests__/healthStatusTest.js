import healthStatus from '../js/healthStatus';

test('healthStatus healthy', () => {
  const hero = { name: 'маг', health: 90 };
  const result = healthStatus(hero);
  expect(result).toBe('healthy');
});

test('healthStatus wounded', () => {
  const hero = { name: 'маг', health: 50 };
  const result = healthStatus(hero);
  expect(result).toBe('wounded');
});

test('healthStatus critical', () => {
  const hero = { name: 'маг', health: 4 };
  const result = healthStatus(hero);
  expect(result).toBe('critical');
});

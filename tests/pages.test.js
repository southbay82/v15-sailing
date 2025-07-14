// Simple smoke test to ensure page components import without runtime errors.

const pages = [
  require('../src/pages/index').default,
  require('../src/pages/articles').default,
  require('../src/pages/parts').default,
  require('../src/pages/regattas').default,
  require('../src/pages/about').default,
];

describe('Page component smoke test', () => {
  it('imports all main pages without crashing', () => {
    pages.forEach((Page) => {
      expect(typeof Page).toBe('function');
    });
  });
});

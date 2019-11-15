const Home = require('./Home');

test('test the affiliate link', () => {
  expect (Home.encodeAffiliateLink('test')).toBe("http://affiliates.abebooks.com/c/1352480/77798/2029?u=test");
})

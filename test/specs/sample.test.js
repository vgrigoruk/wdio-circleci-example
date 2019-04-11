describe('my awesome website', () => {
  it('should do some chai assertions', () => {
    browser.url('https://webdriver.io');
    browser
      .getTitle()
      .should.include('Next-gen WebDriver test framework for Node.js');
  });
});

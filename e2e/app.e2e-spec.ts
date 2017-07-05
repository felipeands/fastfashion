import { FastFashionPage } from './app.po';

describe('fast-fashion App', () => {
  let page: FastFashionPage;

  beforeEach(() => {
    page = new FastFashionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

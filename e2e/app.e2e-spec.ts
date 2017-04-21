import { CyberChefPage } from './app.po';

describe('cyber-chef App', () => {
  let page: CyberChefPage;

  beforeEach(() => {
    page = new CyberChefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

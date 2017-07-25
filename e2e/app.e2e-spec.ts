import { CarparkAppFrontEndPage } from './app.po';

describe('carpark-app-front-end App', function() {
  let page: CarparkAppFrontEndPage;

  beforeEach(() => {
    page = new CarparkAppFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

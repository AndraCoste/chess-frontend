import { ChessMeteorPage } from './app.po';

describe('chess-meteor App', function() {
  let page: ChessMeteorPage;

  beforeEach(() => {
    page = new ChessMeteorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

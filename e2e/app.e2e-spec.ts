import { NgThingILikePage } from './app.po';

describe('ng-thing-ilike App', () => {
  let page: NgThingILikePage;

  beforeEach(() => {
    page = new NgThingILikePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

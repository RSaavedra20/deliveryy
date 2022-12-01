import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('ng5-create-routes App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Mostrando Carpeta de Login', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Login');

  });

  it('Mostrando Texto de Login', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Test');

  });

  //it('Mostrando Boton de Login', () => {
    //page.navigateTo();
    //expect(page.getAboutButton().getText()).toEqual('ingresar');
  //});

  //it('Mostrando Route de Login', () => {
    //page.navigateTo();
    //page.getAboutButton().click();
    //expect(page.getAboutText()).toEqual('Login Page');
  //});

});

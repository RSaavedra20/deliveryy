import { browser, by, element } from 'protractor';

export class AppPage {
  getAboutText() {
    throw new Error('Method not implemented.');
  }
  navigateTo() {
    return browser.get('/');
  }
  

  getPageTitle() {
    return element(by.css('ion-title')).getText();
  }

  getParagraphText() {
    return element(by.css('app-Login h2')).getText();
  }

  getAboutButton(){
    return element(by.css('[routerLink]="/Login"]'));
  }
}

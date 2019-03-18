import { Http } from "@angular/http";
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable()
export class TranslatorService  {

  private _currentLang: string;

  constructor(private http: Http, private translateService: TranslateService) {
    translateService.setDefaultLang(this.getDefaultLanguage());
    translateService.use(this.getDefaultLanguage());
  }

  public get currentLang() {
    return this._currentLang;
  }

  /**
   * Cambia la lingua attualmente visualizzata
   */
  setCurrentLanguage(lang: string) {
    this.translateService.use(lang);
    this._currentLang = lang;
  }

  /**
   * Tutte le lingue disponibili nell'applicazione
   */
  getAvailableLanguages() {
    return ['ita', 'eng', 'esp', 'fra'];
  }

  /**
   * La lingua iniziale dell'applicazione
   */
  getDefaultLanguage() {
    return 'ita';
  }

  private translate(key: string): string {
    // private perform translation
    let translation = key;

    if (this.translateService[this.currentLang] && this.translateService[this.currentLang][key]) {
      return this.translateService[this.currentLang][key];
    }

    return translation;
  }

  public instant(key: string) {
    // call translation
    return this.translate(key);
  }

}
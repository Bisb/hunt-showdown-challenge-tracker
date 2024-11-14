import { effect, Injectable, signal } from '@angular/core';

export interface Options {
  wideContainer: boolean;
  wideFont: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private readonly _defaultSettings = {
    wideContainer: false,
    wideFont: false,
  };

  private readonly _storageKey = 'options';

  options = signal<Options>(
    localStorage.getItem(this._storageKey) ?
      JSON.parse(localStorage.getItem(this._storageKey)!) :
      this._defaultSettings,
  );


  constructor() {
    effect(() => localStorage.setItem(this._storageKey, JSON.stringify(this.options())));
  }

  setOption(key: keyof Options, value: any) {
    this.options.update(settings => ({...settings, ...{[key]: value}}))
  }
}

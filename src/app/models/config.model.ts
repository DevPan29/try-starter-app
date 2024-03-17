import { InjectionToken } from '@angular/core';

export const CONFIG = new InjectionToken<Config>('CONFIG');

export interface Config {
  defaultDebounceTime: number;
  minimumQueryLength: number;
}
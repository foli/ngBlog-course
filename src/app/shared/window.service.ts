import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  nativeWindow: Window

  constructor() { 
    this.nativeWindow = this.getNativeWindow()
  }

  getNativeWindow(): Window {
    return window;
  }
}

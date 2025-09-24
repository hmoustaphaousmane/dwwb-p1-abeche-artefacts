import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.html',
})
export class BackBtn {
  constructor(public location: Location) {}

  back() {
    this.location.back();
  }
}

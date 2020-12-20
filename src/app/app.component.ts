import { Component } from '@angular/core';
import {SafeResourceUrl,DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Modules Reference';
// url : SafeResourceUrl;
//  constructor(private sanitizer: DomSanitizer) {
//  }

//  ionViewDidLoad() {
//    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://www.baidu.com');
//  }
}

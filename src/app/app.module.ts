import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleNg6LibModule } from "ng-fnst-jy-1";
//import { ExampleNg6LibModule} from 'example-ng6-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule,
} from '@angular/material/tabs';

import { IonicModule } from "@ionic/angular"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleNg6LibModule,
    BrowserAnimationsModule,
    MatTabsModule,
    IonicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

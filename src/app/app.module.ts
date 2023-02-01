import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'zone.js';
import 'zone.js/dist/long-stack-trace-zone.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaltModule } from './salt/salt.module';
import { ContentModule } from './shared/components/content/content.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule,
    NavbarModule,
    SaltModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

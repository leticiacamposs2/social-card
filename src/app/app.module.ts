import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('mf-social-card', el);
  }

  ngDoBootstrap() {}
}

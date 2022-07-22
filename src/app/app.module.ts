/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './components/list/list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { createCustomElement } from '@angular/elements';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  exports: [MatButtonModule, MatCardModule]
})
export class MaterialModule {}

@NgModule({
  declarations: [AppComponent, CardComponent, HomeComponent, ListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
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

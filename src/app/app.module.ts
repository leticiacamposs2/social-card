import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { createCustomElement } from '@angular/elements';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
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

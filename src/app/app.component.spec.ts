/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable sort-imports */
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  TranslateService
} from '@ngx-translate/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserTestingModule,
        HttpClientTestingModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      declarations: [AppComponent, NgForm, TranslatePipe],
      providers: [TranslateService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

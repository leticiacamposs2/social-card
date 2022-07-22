/* eslint-disable no-unused-vars */
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  teams$: Observable<any> = this.http.get('/api/teams');

  constructor(private http: HttpClient) {}
}

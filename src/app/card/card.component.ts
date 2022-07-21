import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  teams$: Observable<any> = this.http.get('/api/teams');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

}

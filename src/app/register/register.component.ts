import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  event:any;
  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit():void{
    this.getData();
  }

  getData():void{
    let item = localStorage.getItem('eventData') || "";
    this.event=JSON.parse(item);
    console.log(this.event);
  }
}

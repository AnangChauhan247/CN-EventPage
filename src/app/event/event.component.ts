import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {
  tags:any;
  events:any;
  selectedCat='ALL_EVENTS';
  offset=0;
  selectedSubCat='All Time Favorites';
  selected_tags=['Competitive Programming'];

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit():void{
    this.getData();
  }

  getData():void{
    let url="https://api.codingninjas.com/api/v3/event_tags";
    this.http.get(url).subscribe((res:any)=>{
      this.tags=res.data.tags;
      // console.log(this.tags);
    })

    let tagString=this.selected_tags.toString();
    let url2=`https://api.codingninjas.com/api/v3/events?event_category=${this.selectedCat}&event_sub_category=${this.selectedSubCat}&offset=${this.offset}&tag_list=${tagString}`;
    this.http.get(url2).subscribe((res:any)=>{
      this.events=res.data.events;
      console.log(tagString);
      console.log(this.events);
      console.log(url2);
    })
  }

  updateCat(e:any):void{
    this.selectedCat=e;
    this.getData();
    console.log(e);
  }

  updateSubCat(e:any):void{
    this.selectedSubCat=e;
    this.getData();
    console.log(e);
  }
updateTags(e:any):void{
  if(this.selected_tags.includes(e)){
    this.selected_tags.filter((val)=>val!=e)
  }
  else{
    this.selected_tags.push(e);
  }
  this.getData();
}

storeDataInLS(e:any):void{
  localStorage.setItem('eventData',JSON.stringify(e));
}
}

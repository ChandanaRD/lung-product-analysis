import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  pageIndex=1;
  updatedTime: number;
  constructor() { }

  ngOnInit() {
    this.updatedTime = Date.now();
  }

  prev(){
    this.pageIndex = this.pageIndex>1? this.pageIndex-1 :1;
  }

  next(){
    this.pageIndex = this.pageIndex<3 ? this.pageIndex+1 :3;
  }
}

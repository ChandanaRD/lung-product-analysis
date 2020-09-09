import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-nodule',
  templateUrl: './nodule.component.html',
  styleUrls: ['./nodule.component.scss']
})
export class NoduleComponent implements OnInit {

  @Input() nodule: any;
  isHidden = false;
  constructor() { }

  ngOnInit() {
  }

  hide(){
    this.isHidden = true;
  }

}

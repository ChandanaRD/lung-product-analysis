import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nodule-analysis',
  templateUrl: './nodule-analysis.component.html',
  styleUrls: ['./nodule-analysis.component.scss']
})
export class NoduleAnalysisComponent implements OnInit {

  // Default Data
  nodules=[{
    id: 1,
    lobe:'Left Upper',
    type:'Part-solid',
    calcification:0,
    size:6.6,
    volume:0.17,
    border:null,
    image:'assets/images/thumbnail_0.png'
  },
  {
    id:2,
    lobe:'Left Lower',
    type:'Part-solid',
    calcification:0,
    size:5.6,
    volume:0.11,
    border:null,
    image:'assets/images/thumbnail_4.png'
  },
  {
    id:3,
    lobe:'Left Upper',
    type:'Part-solid',
    calcification:8,
    size:5.4,
    volume:0.10,
    border:null,
    image:'assets/images/thumbnail_5.png'
  }
]
  constructor() { }

  ngOnInit() {
  }

}

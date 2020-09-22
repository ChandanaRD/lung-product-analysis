import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  // Todo: Set Default height, customize the options in editor


  // Setting default data 

  editorConfig = {
    editable: true,
    spellcheck: false,
    minHeight: "20rem",
    width:"100%",
    placeholder: 'Enter data here...',
    translate: 'no',
    "toolbar": [
        ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
        ["cut", "copy", "delete", "undo", "redo"],
        ["link", "unlink", "image", "video"]
    ]
};

  model = `Nodule Analysis

There is a total of 3 nodules detected in the lung. 



A part-solid nodule was seen in the Left Upper Lobe. It has a diameter of 6.6 mm and a volume of 0.17 ml. It is non-calcified. 


Recommendation: Follow-up in 3-6 months recommended. Subsequent management based on most suspicious nodule (Fleischner Society 2017).`;

  constructor() { }

  ngOnInit() {
  }

}

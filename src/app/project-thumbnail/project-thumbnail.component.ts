import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-thumbnail',
  templateUrl: './project-thumbnail.component.html',
  styleUrls: ['./project-thumbnail.component.css']
})
export class ProjectThumbnailComponent implements OnInit {

  @Input() public title = "";
  @Input() public description = "";
  @Input() public imageUrl = "";
  @Input() public backgroundColor = {};
  @Input() public logoUrl = "";
  @Input() public logoWidth = 0;
  @Input() public logoHeight = 0;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  urlLssh = "assets/images/lssh_thumb.png";
  logoLssh = "assets/images/lssh_logo.png";
  titleLssh ="LiU Student Secondhand";
  descriptionLssh = "Project leader and developer of liustudentsecondhand.se";

  descriptionExsitec ="Scrum Master and Developer";
  urlExsitec = "assets/images/exsitec_thumb.png";
  logoExsitec = "assets/images/exsitec_logo_neg.svg"

  descriptionReceptly = "Advanced Web Programming (TDDD27)";
  titleReceptly = "Receptly";
  urlReceptly = "assets/images/receptly_thumb.png";

  skillsTitleArray = [
    "Frontend development", 
    "Backend development",
    "Responsive web design",
    "Agile", 
    "Scrum",
    "Strategy"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-liustudentsecondhand',
  templateUrl: './project-liustudentsecondhand.component.html',
  styleUrls: ['./project-liustudentsecondhand.component.css']
})
export class ProjectLiustudentsecondhandComponent implements OnInit {

  constructor(private metaTagService: Meta, private titleService: Title) { 

    this.titleService.setTitle("LiU Student Secondhand");

    this.metaTagService.addTags([
      {property: 'og:title', content: 'LiU Student Secondhand'},
      {property: 'og:type', content: 'website'},
      {property: 'og:description', content: 'Project leader and developer for a new webapplication for the student association "LiU Student Secondhand" at Linköping University. The developers for this was me together with Filip Brunander, Isak Almquist and Alexander Bois.'},
      {property: 'og:url', content: 'https://bjornbergfeldt.github.io/portfolio/liustudentsecondhand'},
      {property: 'og:image', content: 'https://live.staticflickr.com/65535/51662893509_f24b2772dd.jpg'}
    ]);

  }

  ngOnInit(): void {}

}

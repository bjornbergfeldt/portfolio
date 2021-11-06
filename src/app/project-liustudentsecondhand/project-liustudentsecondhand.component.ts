import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-project-liustudentsecondhand',
  templateUrl: './project-liustudentsecondhand.component.html',
  styleUrls: ['./project-liustudentsecondhand.component.css']
})
export class ProjectLiustudentsecondhandComponent implements OnInit {

  constructor(private metaTagService: Meta) { }

  ngOnInit(): void {

    this.metaTagService.addTags([
      {property: 'og:title', content: 'LiU Student Secondhand'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://bjornbergfeldt.github.io/portfolio/liustudentsecondhand'},
      {property: 'og:image', content: 'https://bjornbergfeldt.github.io/portfolio/assets/images/lssh.png'}
    ]);

  }

}

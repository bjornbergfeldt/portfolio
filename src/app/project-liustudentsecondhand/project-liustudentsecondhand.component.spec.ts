import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLiustudentsecondhandComponent } from './project-liustudentsecondhand.component';

describe('ProjectLiustudentsecondhandComponent', () => {
  let component: ProjectLiustudentsecondhandComponent;
  let fixture: ComponentFixture<ProjectLiustudentsecondhandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLiustudentsecondhandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLiustudentsecondhandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

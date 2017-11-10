import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { appAutoGrowDirective } from '../auto-grow.directive';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [AuthorsService],
  directives: [appAutoGrowDirective]
})
export class AuthorsComponent implements OnInit {

authors: string[];
title = "Add your authors here: ";

  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
    }

  ngOnInit() {
  }

}

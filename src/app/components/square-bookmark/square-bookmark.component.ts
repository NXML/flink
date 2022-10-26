import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/types/bookmark';

@Component({
  selector: 'app-square-bookmark',
  templateUrl: './square-bookmark.component.html',
  styleUrls: ['./square-bookmark.component.scss']
})
export class SquareBookmarkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 @Input() 
 public bookmark: Bookmark;

}

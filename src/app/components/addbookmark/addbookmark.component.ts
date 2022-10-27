import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Bookmark } from 'src/app/types/bookmark';

@Component({
  selector: 'app-addbookmark',
  templateUrl: './addbookmark.component.html',
  styleUrls: ['./addbookmark.component.scss']
})
export class AddbookmarkComponent {

  @Output()
  public addBookmarkEvent = new EventEmitter();
  

  addBookmark(){
    this.addBookmarkEvent.emit();
  }

}

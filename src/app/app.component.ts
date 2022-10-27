import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component } from '@angular/core';
import { Bookmark } from './types/bookmark';
import { AddBookmarkFormComponent } from './components/add-bookmark-form/add-bookmark-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flink';



  public bookmarks: Bookmark[] = []

  constructor(public dialog: MatDialog) {
    this.bookmarks = localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks')!) : []
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddBookmarkFormComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(this.handleBookmarkEvent.bind(this));
  
  }

  public handleBookmarkEvent(event: any) {
    debugger
    switch (event.event) {
      case "submit":
        this.addBookmark(event.data)
        break;
      case "delete":
        this.deleteBookmark(event.data)
        break;
      case "update":
        this.updateBookmark(event.data)
        break;
      default:
        break;
    }
    this.saveBookmarks();
  }

  public saveBookmarks() {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
    // this.download("bookmarks.json",JSON.stringify(this.bookmarks))
  }

  public updateBookmark(bookmark: Bookmark) {

  }

  public deleteBookmark(bookmark: Bookmark) {

  }


  public addBookmark(bookmark: Bookmark) {
    console.log(bookmark);
    
    this.bookmarks.push(bookmark);
  }


  private  download(filename:string, text:string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }


}

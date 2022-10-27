import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, ViewChild } from '@angular/core';
import { Bookmark } from './types/bookmark';
import { AddBookmarkFormComponent } from './components/add-bookmark-form/add-bookmark-form.component';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flink';



  public bookmarks: Bookmark[] = []


  menuTopLeftPosition =  {x: '0', y: '0'} as {x: string, y: string};
  @ViewChild(MatMenuTrigger, {static: true}) matMenuTrigger: MatMenuTrigger; 

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
    this.bookmarks = this.bookmarks.filter(b => b.link !== bookmark.link)
    this.saveBookmarks();
  }


  public addBookmark(bookmark: Bookmark) {
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


  onRightClick(event: MouseEvent, item:Bookmark) { 
    // preventDefault avoids to show the visualization of the right-click menu of the browser 
    event.preventDefault(); 

    // we record the mouse position in our object 
    this.menuTopLeftPosition.x = event.clientX + 'px'; 
    this.menuTopLeftPosition.y = event.clientY + 'px'; 

    // we open the menu 
    // we pass to the menu the information about our object 
    this.matMenuTrigger.menuData = {item: item} 

    // we open the menu 
    this.matMenuTrigger.openMenu(); 

} 

}

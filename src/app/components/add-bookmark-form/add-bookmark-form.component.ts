import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Bookmark } from 'src/app/types/bookmark';

@Component({
  selector: 'app-add-bookmark-form',
  templateUrl: './add-bookmark-form.component.html',
  styleUrls: ['./add-bookmark-form.component.scss']
})
export class AddBookmarkFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddBookmarkFormComponent>
  ) { }

  ngOnInit(): void {
  }
  public bookmark :Bookmark;

  public addBookmark(form:NgForm){
    if(form.valid){
      console.log(form.value);
      this.bookmark =  form.value;
      this.dialogRef.close({event:"submit",data:this.bookmark});
    }
  };

}

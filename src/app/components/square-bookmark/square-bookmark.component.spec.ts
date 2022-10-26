import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareBookmarkComponent } from './square-bookmark.component';

describe('SquareBookmarkComponent', () => {
  let component: SquareBookmarkComponent;
  let fixture: ComponentFixture<SquareBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareBookmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

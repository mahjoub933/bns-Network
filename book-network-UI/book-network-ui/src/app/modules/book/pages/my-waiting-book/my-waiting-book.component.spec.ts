import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWaitingBookComponent } from './my-waiting-book.component';

describe('MyWaitingBookComponent', () => {
  let component: MyWaitingBookComponent;
  let fixture: ComponentFixture<MyWaitingBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWaitingBookComponent]
    });
    fixture = TestBed.createComponent(MyWaitingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

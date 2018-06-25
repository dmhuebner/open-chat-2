import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewRoomModalComponent } from './new-room-modal.component';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from '../../materialize/materialize.module';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewRoomModalComponent', () => {
  let component: NewRoomModalComponent;
  let fixture: ComponentFixture<NewRoomModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRoomModalComponent ],
      imports: [
        FormsModule,
        MaterializeModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        MatDialog
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRoomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

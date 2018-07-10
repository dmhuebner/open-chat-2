import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'oc-add-user-to-room-modal',
  templateUrl: './add-user-to-room-modal.component.html',
  styleUrls: ['./add-user-to-room-modal.component.scss']
})
export class AddUserToRoomModalComponent implements OnInit {

  model = {
    userEmail: '',
    roomId: ''
  };

  constructor(public dialogRef: MatDialogRef<AddUserToRoomModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  addUserToRoom(): void {
    this.model.roomId = this.data.room._id;
    this.dialogRef.close(this.model);
  }

}

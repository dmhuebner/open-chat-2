import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'oc-new-room-modal',
  templateUrl: './new-room-modal.component.html',
  styleUrls: ['./new-room-modal.component.scss']
})
export class NewRoomModalComponent implements OnInit {

  model = {
    roomName: '',
    private: true,
    roomOwnerId: ''
  };

  ngOnInit() {}

  constructor(public dialogRef: MatDialogRef<NewRoomModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  createRoom(): void {
    this.model.roomOwnerId = this.data.user._id;
    this.dialogRef.close(this.model);
  }

}

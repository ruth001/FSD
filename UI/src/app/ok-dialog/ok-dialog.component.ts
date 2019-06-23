import { OkDialogData, OkDialogConfig } from './ok-dialog.data';
import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-ok-dialog',
  templateUrl: 'ok-dialog.component.html',
  styleUrls: ['./ok-dialog.component.css'],
})

export class OkDialogComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public data: OkDialogData) { }
}
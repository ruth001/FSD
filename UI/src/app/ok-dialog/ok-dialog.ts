import { Injectable } from '@angular/core';
import { OkDialogData, OkDialogConfig } from './ok-dialog.data';
import { OkDialogComponent } from './ok-dialog.component';
import { MatDialog,MatDialogRef } from '@angular/material';

@Injectable()
export class OkDialog {

    constructor(private mdDialog: MatDialog) { }
    mdDialogRef: any;
    open(data: OkDialogData, config: OkDialogConfig, completeHandler: (result) => void): MatDialogRef<OkDialogComponent> {
        this.mdDialogRef = this.mdDialog.open(OkDialogComponent, {
            data: data,
            width: config.width,
            height: config.height,
            panelClass: "custom-dialog",
            disableClose: true
        });
        this.mdDialogRef.afterClosed().subscribe(completeHandler);
        return this.mdDialogRef;
    }
    close() {
        if (this.mdDialogRef) {
            this.mdDialogRef.close();
        }
    }

}
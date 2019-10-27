import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({providedIn: 'root'})
export class LoggerService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  log(msg: string): void {
    console.log(msg);
    this.snackbar.open(msg, '✔️', {
      duration: 5000,
    });
  }
}


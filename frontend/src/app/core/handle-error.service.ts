import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class HandleErrorService {
  handleError<T>(
    operation = 'operation',
    result?: T, logger?: LoggerService) {
    return (error: any): Observable<T> => {
      console.error(error);
      if (logger) {
        logger.log(`${operation} failed: ${error.message}`, 'bg-danger');
      }
      return of(result as T);
    };
  }
  constructor() { }
}

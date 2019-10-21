import { Injectable } from '@angular/core';
import {
  QuestionBase,
  TextboxQuestion,
  DropdownQuestion
} from 'src/app/shared/models';
import { Observable, of } from 'rxjs';
import { transports } from '../../mocks/data';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  getQuestions() {
    const questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
      })
    ];

    return questions;

  }

  getQuestionsDialog(data: any): Observable<QuestionBase<any>[]>  {
    const categoryQuestions: QuestionBase<any>[] = data.map((d: any) => {
      const key: string = d.name.replace(/\s+/g, '').toLowerCase();
      return {
        key,
        label: d.name,
        value: key,
        required: true,
        type: 'text'

      };
    });
    return of(categoryQuestions);
  }

  getProductsQuestions() {

  }

  getQuestionsProducts() {

  }


}

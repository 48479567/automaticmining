import { Injectable } from '@angular/core';
import {
  QuestionBase,
  TextboxQuestion,
  DropdownQuestion
} from 'src/app/shared/models';
import { Observable, of } from 'rxjs';

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

  getSchemaQuestions(schema: any): Observable<Array<QuestionBase<any>>> {
    delete schema.__v;
    delete schema.updatedat;
    delete schema._id;
    delete schema.createdat;
    const questions: QuestionBase<any>[] = [];
    // tslint:disable-next-line: forin
    for (const sch in schema) {
      questions.push(new TextboxQuestion({
        key: sch,
        label: sch,
        value: schema[sch],
        type: typeof schema[sch],
        required: true
      }));
    }
    return of(questions);
  }

  getQuestionsProducts() {

  }


}

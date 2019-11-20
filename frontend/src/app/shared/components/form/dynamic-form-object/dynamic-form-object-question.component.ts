import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionGeneratorService } from '../../../../core/services/form/question-generator.service';
import { typesObject } from '../../../models/schema/objectref.schema';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-form-object-question',
  templateUrl: './dynamic-form-object-question.component.html',
  styles: [`
    :host {
      padding: 15px;
    }
    form {
      width: 300px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-flow: column wrap;
    }
  `]
})

export class DynamicFormObjectQuestionComponent implements OnInit {
  @Input() objectItem: any;
  formFromObject: FormGroup;
  typesObject = typesObject;
  formIsValid = false;

  constructor(
    private questionGenerator: QuestionGeneratorService
  ) { }

  ngOnInit() {
    this.formFromObject = this.questionGenerator.toFormGroup(this.objectItem);
    console.log(this.formFromObject);
    this.formOnChanges();
  }

  getTypeOf(value: any): string {
    return typeof value !== 'boolean' ? typeof value : 'string';
  }

  formOnChanges(): void {
    this.formFromObject.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(
      _ => this.formIsValid = this.formFromObject.valid
    );
  }
}


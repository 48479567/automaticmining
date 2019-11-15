import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionGeneratorService } from 'src/app/core/services/form/question-generator.service';

@Component({
  selector: 'app-form-object-question',
  templateUrl: './dynamic-form-object-question.component.html'
})

export class DynamicFormObjectQuestionComponent implements OnInit {
  @Input() objectItem: any = {
    a: 'a',
    b: 0
  };
  formFromObject: FormGroup;

  constructor(
    private questionGenerator: QuestionGeneratorService
  ) { }

  ngOnInit() {
    this.formFromObject = this.questionGenerator.toFormGroup(this.objectItem);
    console.log(this.formFromObject);
  }

  getTypeOf(value: any): string {
    return typeof value !== 'boolean' ? typeof value : 'string';
  }
}


import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ChartsModule } from 'ng2-charts';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  DynamicFormComponent,
  DynamicFormQuestionComponent,
  DynamicFormAuthComponent,
  DynamicFormAuthQuestionComponent,
  EmailFieldComponent,
  PasswordFieldComponent,
  DynamicFormObjectComponent,
  DynamicFormObjectQuestionComponent,
  DynamicFormScalableComponent,
  ReportComponent,
  ChartComponent,
  FilterComponent,
  FilterListComponent,
  DialogCreateResourceComponent,
  DialogCreateComponent,
  DialogViewComponent,
  FormDialogComponent,
  TableComponent,
  ItemComponent,
  ItemCreateComponent,
  ItemViewComponent,
  ContentComponent,
  TextareaComponent,
  TextboxComponent,
  SelectComponent,

} from './components';

import {
  TextboxControlComponent,
  FileControlComponent,
  CheckboxControlComponent,
  DateControlComponent,
  RadioControlComponent,
  SelectControlComponent,
  SubmitControlComponent,
  TextareaControlComponent,
  TextboxNumberControlComponent
} from './components/form/input-control';
import { DisableControlDirective } from './directives';

const COMPONENTS = [
  DynamicFormComponent,
  DynamicFormQuestionComponent,
  DynamicFormAuthComponent,
  DynamicFormAuthQuestionComponent,
  EmailFieldComponent,
  PasswordFieldComponent,
  DynamicFormObjectComponent,
  DynamicFormObjectQuestionComponent,
  DynamicFormScalableComponent,
  ReportComponent,
  ChartComponent,
  FilterComponent,
  FilterListComponent,
  DialogCreateResourceComponent,
  DialogCreateComponent,
  DialogViewComponent,
  FormDialogComponent,
  TableComponent,
  ItemComponent,
  ItemCreateComponent,
  ItemViewComponent,
  ContentComponent,
  TextareaComponent,
  TextboxComponent,
  TextboxNumberControlComponent,
  SelectComponent,

  CheckboxControlComponent,
  DateControlComponent,
  FileControlComponent,
  RadioControlComponent,
  SelectControlComponent,
  SubmitControlComponent,
  TextareaControlComponent,
  TextboxControlComponent,


];

const ENTRY_COMPONENTS = [
  DialogCreateResourceComponent,
  FormDialogComponent,
  DialogCreateComponent,
  DialogViewComponent,

];

const DIRECTIVES = [
  DisableControlDirective,
];

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,

  ],
  exports: [MaterialModule, ...COMPONENTS, ...DIRECTIVES, ReactiveFormsModule, FormsModule],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [],
})
export class SharedModule { }

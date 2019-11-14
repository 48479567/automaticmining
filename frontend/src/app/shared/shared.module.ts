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
  FormDialogComponent,
  TableComponent,
  ItemComponent,
  ItemCreateComponent,
  ContentComponent,
  TextareaComponent,
  TextboxComponent,
  SelectComponent,

} from './components';

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
  FormDialogComponent,
  TableComponent,
  ItemComponent,
  ItemCreateComponent,
  ContentComponent,
  TextareaComponent,
  TextboxComponent,
  SelectComponent,

];

const ENTRY_COMPONENTS = [
  DialogCreateResourceComponent,
  FormDialogComponent,

];

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,

  ],
  exports: [MaterialModule, ...COMPONENTS, ReactiveFormsModule, FormsModule],
  declarations: [...COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [],
})
export class SharedModule { }

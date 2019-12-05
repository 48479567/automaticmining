import { Component, OnInit, Inject } from '@angular/core';
import { Validators as v, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { GeneralHttpService } from 'src/app/core/http/schema/general.http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData, ICompany } from 'src/app/shared/models';
import { GeneralService } from 'src/app/core/services/schema/general.service';

@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.scss']
})

export class WorkFormComponent implements OnInit {
  companies: ICompany[];

  form: FormGroup = this.fb.group({
    customer: this.fb.control(this.data.content.customer,
      v.required),
    companyid: this.fb.control(this.data.content.companyid,
      v.required),
    name: this.fb.control(this.data.content.name,
      v.required),
    image: this.fb.control(this.data.content.image)
  });

  constructor(
    private fb: FormBuilder,
    private gs: GeneralService<any>,
    private ghs: GeneralHttpService<any>,
    public dialogRef: MatDialogRef<WorkFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    if (this.gs.data.company.length) {
      this.companies = this.gs.data.company;
      return;
    }
    this.ghs.getData('company').subscribe(
      (companies: ICompany[]) => this.companies = companies
    );
  }

  save(): void {
    const { title, action, index } = this.data;
    const id = this.data.content._id ? `/${this.data.content._id}` : '';
    this.ghs.saveData(title, action, this.form.value, index, id).subscribe(
      () => this.dialogRef.close()
    );
  }
}

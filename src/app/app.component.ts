import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular';

  checkBoxGroup = [
    [
      ['ages'],
      [
        { ageID: 100, name: '0 -10 years' },
        { ageID: 200, name: '10 -20 years' },
        { ageID: 300, name: '30 -40 years' },
        { ageID: 400, name: '40 -50 years' },
      ],
    ],
    [
      ['languages'],
      [
        { langID: 1, name: 'English' },
        { langID: 2, name: 'Tamil' },
        { langID: 3, name: 'Hindi' },
        { langID: 4, name: 'French' },
      ],
    ],
  ];
  ages = [
    { ageID: 100, name: '0 -10 years' },
    { ageID: 200, name: '10 -20 years' },
    { ageID: 300, name: '30 -40 years' },
    { ageID: 400, name: '40 -50 years' },
  ];
  languages = [
    { langID: 1, name: 'English' },
    { langID: 2, name: 'Tamil' },
    { langID: 3, name: 'Hindi' },
    { langID: 4, name: 'French' },
  ];

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.checkBoxGroup)
    const ages = this.ages.map((x) => this.fb.control(false));
    this.myForm = this.fb.group({
      userage: this.fb.array(ages),
    });
  }

  get ageArr() {
    return this.myForm.get('userage') as FormArray;
  }

  checkAll() {
    this.ageArr.controls.map((value) => value.setValue(true));
  }

  deselectAll() {
    this.ageArr.controls.map((value) => value.setValue(false));
  }

  onSubmit() {
    const ages = this.ageArr.value
      .map((age: any, i: any) => (age ? this.ages[i].name : null))
      .filter((age: any) => age !== null);
    console.log(ages);
  }
}

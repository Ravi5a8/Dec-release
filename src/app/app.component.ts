import { Component , OnInit  } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveForms';
  Farray: FormArray;
  fg: FormGroup;
  constructor(private fb: FormBuilder) { }

ngOnInit() {
this.fg = this.fb.group({
Farray: this.fb.array([this.studentDetails()])
});
}
studentDetails() {
  return this.fb.group({
roleNo: [''],
studentDetails: this.fb.group({
name: [],
class: [],
gender: [],
emailId: [],
contactNo: []
}),
address: this.fb.group({
  address1: [],
  address2: []
})
});
}
get getFarr() {
  return this.fg.get('Farray') as FormArray;
}
addForm() {
   this.getFarr.push(this.studentDetails());
}

}

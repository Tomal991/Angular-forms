import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-rfs',
  templateUrl: './rfs.component.html',
  styleUrls: ['./rfs.component.css'],
})
export class RfsComponent {
  EmployeeName = new FormControl('');
  
  employeeForm = new FormGroup({
    Name: new FormControl(''),
    Designation: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
    })
  });
  onSubmit() {
    console.log(this.employeeForm.value);
  }
}

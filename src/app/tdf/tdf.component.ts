import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css'],
})
export class TdfComponent implements OnInit {
  skills = ['jaava', 'python', 'sql', 'c++'];
  model = new Emp(11, 'tomal', 'Project Manager', this.skills[0]);
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  get diagnostic(){
    return JSON.stringify(this.model);
  }
  constructor() {}

  ngOnInit(): void {}
}

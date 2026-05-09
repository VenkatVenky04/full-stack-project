import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  imports: [FormsModule],
  templateUrl: './templatedrivenform.html',
  styleUrl: './templatedrivenform.scss',
})
export class Templatedrivenform {
  constructor() {}
  data : any[] = [
    {
    "fname": "Venkateswarlu",
    "lname": "G",
    "email": "gongativenkat04@gmail.com",
    "number": 7801085815,
    "school": "sfdgfdfd"
},
{
    "fname": "Venkat",
    "lname": "G",
    "email": "venkat@gmail.com",
    "number": 7801085815,
    "school": "sfdgsghdfbfdfd"
},
  ];

  onSubmit(form: any) {
    this.data.push(form.value);
    console.log("form data", this.data);
  }
}

import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  imports: [FormsModule],
  templateUrl: './templatedrivenform.html',
  styleUrl: './templatedrivenform.scss',
})
export class Templatedrivenform {
  data: any[] = [
    {
      "id": 1,
      "fname": "Venkateswarlu",
      "lname": "G",
      "email": "gongativenkat04@gmail.com",
      "number": 7801085815,
      "school": "sfdgfdfd"
    },
    {
      "id": 2,
      "fname": "Venkat",
      "lname": "G",
      "email": "venkat@gmail.com",
      "number": 7801085815,
      "school": "sfdgsghdfbfdfd"
    },
  ];
  editMode: boolean = false;

  onSubmit(form: any) {

    if (this.editMode) {

      const index = this.data.findIndex(
        item => item.id === form.value.id
      );

      this.data[index] = form.value;

      this.editMode = false;

    } else {

      this.data.push({
        ...form.value,
        id: this.data.length + 1
      });

    }

    form.resetForm();

  }

  onUpdate(selectedData: any, form: NgForm) {
    console.log("id update", selectedData);
    this.editMode = true;

    form.setValue({
      id: selectedData.id,
      fname: selectedData.fname,
      lname: selectedData.lname,
      email: selectedData.email,
      number: selectedData.number,
      school: selectedData.school
    });
  }

  onDelete(selectedId: number) {
    this.data = this.data.filter(
      item => item.id !== selectedId
    )
  }
}

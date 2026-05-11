import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.scss',
})
export class reactiveform {

  constructor(private fb: FormBuilder) {}
  basicForm : any;
  data: any[] = [];

  ngOnInit() {
    this.basicForm = this.fb.group({
      name: [''],
      email: [''],
      number: ['']
    });

    const storedData = localStorage.getItem("formData");

    if(storedData) {
      this.data = JSON.parse(storedData);
    }
  }

  onSubmit() {
    const formData = { ...this.basicForm.value};

    this.data.push(formData);

    localStorage.setItem("formData", JSON.stringify(this.data));
    this.basicForm.reset();

    console.log("basic form", this.data);
  }
}

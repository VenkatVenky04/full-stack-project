import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.scss',
})
export class reactiveform {

  constructor(private fb: FormBuilder) { }
  basicForm: any;
  data: any[] = [];
  editMode: boolean = false;

  ngOnInit() {
    this.basicForm = this.fb.group({
      id: [''],
      name: [''],
      email: [''],
      number: ['']
    });

    const storedData = localStorage.getItem("formData");

    if (storedData) {
      this.data = JSON.parse(storedData);
    }
  }

  onSubmit() {
    if (this.editMode) {
      const index = this.data.findIndex(
        item => item.id === this.basicForm.value.id
      );
      this.data[index] = this.basicForm.value;
      localStorage.setItem("formData", JSON.stringify(this.data));
      this.basicForm.reset();
      this.editMode = false;
    } else {
      const formData = {
        ...this.basicForm.value,
        id: Date.now()
      };
      this.data.push(formData);
      localStorage.setItem("formData", JSON.stringify(this.data));
      this.basicForm.reset();
    }
  }

  onUpdate(id: number) {
    console.log("number id", id);
    const selectedData = this.data.find(
      item => item.id === id
    );

    this.basicForm.patchValue(selectedData);
    this.editMode = true;
  }

  onDelete(id: number) {
    this.data = this.data.filter(
      item => item.id !== id
    )
    localStorage.setItem("formData", JSON.stringify(this.data));
  }
}

import { Component } from '@angular/core';
import { UserService } from '../../services/userService';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mobiles-data',
  imports: [ɵInternalFormsSharedModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './mobiles-data.html',
  styleUrl: './mobiles-data.scss',
})
export class MobilesData {
  mobiles: any[] = [];
  addMobile: any[] = [];
  deleteData: string = '';
  editForm!: FormGroup;
  editMode: Boolean = false;

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loadMobiles();
    this.editForm = this.fb.group({
      id: [''],
      name: [''],
      prize: [''],
      ram: [''],
      storage: ['']
    })
  }

  loadMobiles() {
    this.userService.getMobilesdata().subscribe((res: any) => {
      this.mobiles = res;
    })
  }

  saveMobile(mobile: any) {
    const mobileData = this.editForm.value;

    if (!this.editMode) {
      console.log("mobile data", mobileData)
      this.userService.addMobilesData(mobileData).subscribe((res: any) => {
        this.addMobile = res;
        alert("Mobile Added..")
        this.loadMobiles();
        this.resetForm();
      });
    } else {
      console.log("mobile data in edit mode", mobileData)
      this.userService.updateExistData(mobileData.id, mobileData).subscribe(() => {
        Swal.fire('Updated!', 'Mobile updated successfully', 'success');
        this.loadMobiles();
        this.resetForm();
      });
    }

  }

  resetForm() {
    this.editForm.reset();
    this.editMode = false;
  }

  editMobile(mobile: any) {
    console.log("edit data", mobile);
    this.editMode = true;
    this.editForm.setValue({
      id: mobile.id,
      name: mobile.name,
      prize: mobile.prize,
      ram: mobile.ram,
      storage: mobile.storage
    });
    console.log("form after patch", this.editForm.value);
  }

  deleteMobile(mobileId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.isConfirmed) {
        this.userService.deleteMobile(mobileId)
          .subscribe({
            next: () => {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your mobile has been deleted.',
                icon: 'success'
              }).then((result) => {
                if (result.isConfirmed) {
                  this.loadMobiles();
                }
              })
            },
            error: () => {
              Swal.fire({
                title: 'Error!',
                text: 'Something went wrong.',
                icon: 'error'
              });
            }
          });

      }

    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  ngOnInit(): void {
    if (localStorage.length) {
      this.formSubmit = true;
      this.user = JSON.parse(localStorage['formValue']);
      this.formSubmissionText = 'Your form is already submitted...'
    }
  }
  user: any = {
    name: '',
    company: '',
    email: '',
  };

  formSubmit: boolean = false;
  validations: boolean = false;
  formSubmissionText: string = 'Your form has been submitted...'

  onSubmit(email: any){
    if (!this.user.name || email.control.errors?.required || email.control.errors?.email) {
      this.validations = true;
      return
    }

    this.validations = false;

    this.formSubmit = true;
    localStorage.setItem('formValue', JSON.stringify(this.user));
    console.log(this.user)
  }
  
}

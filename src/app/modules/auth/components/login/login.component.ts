import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private _AuthService: AuthService) {
    this.loginForm = this.createForm();
  }

  createForm() {
    return this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this._AuthService.login(this.loginForm.value).subscribe((res: any) => {});
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  signInForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required])
  });
  constructor(private authService: AuthService) { }
  signIn() {
    if (this.signInForm.valid) {
      this.authService.signIn(this.signInForm.value.email as string);
    }
  }

}

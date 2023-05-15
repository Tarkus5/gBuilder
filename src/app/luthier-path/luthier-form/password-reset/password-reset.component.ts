import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { sendPasswordResetEmail } from 'firebase/auth';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent {
  isLoggedIn: boolean = false;

  constructor(public auth: Auth, private router: Router) {}

  passwordReset(form: NgForm) {
    const email = form.value.email;
    sendPasswordResetEmail(this.auth, email)
    .then(() => {
      window.alert('Link inviato! Controlla la tua casella di posta elettronica!')
      this.auth.signOut();
      localStorage.clear();
      this.router.navigate(['luthier-form'])
    })
    .catch((error) => {
      window.alert(error)
    })
    }
  }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LuthierRegistrationServiceService } from '../service/luthier-registration-service.service';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth'
import { Firestore } from '@angular/fire/firestore';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-luthier-form',
  templateUrl: './luthier-form.component.html',
  styleUrls: ['./luthier-form.component.css']
})
export class LuthierFormComponent implements OnInit {

isLoggedIn = false;

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp')!;
    const signInButton = document.getElementById('signIn')!;
    const container = document.getElementById('container')!;

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  constructor(private router: Router,
    public formDataService: LuthierRegistrationServiceService,
    private auth: Auth,
    public fs: Firestore,
    public authService: AuthService) {}

    openAdvancedForm(form: NgForm) {
      createUserWithEmailAndPassword(this.auth, form.value.mail, form.value.password)
      .then((response: any) => {
        let formData = form.value;
        this.formDataService.setLuthierFormData(formData)
        this.router.navigate(['advanced-form']);
      })
      .catch((error) => {
        alert(error.message);
      })
    }

    openUserPage(form: NgForm) {
      signInWithEmailAndPassword(this.auth, form.value.email, form.value.password)
      .then((response: any) => {
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('userEmail', JSON.stringify(response.user.email))
        this.authService.isLogged();
        this.router.navigate(['user-page']);
      })
      .catch((error) => {
        alert(error.message);
      })
    }

    passwordResetPage() {
      this.router.navigate(['password-reset-page'])
    }

  onSubmit(form: NgForm) {
  }



}

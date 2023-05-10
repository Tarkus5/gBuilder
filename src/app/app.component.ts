import { Component, OnChanges, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { signOut } from 'firebase/auth';
import { AuthService } from './luthier-path/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges {
  title = 'gConfig';
  user = localStorage.getItem('user');
  isLoggedIn = false;
  public data: any = [];

  constructor(private auth: Auth,
    private router: Router,
    public fs: Firestore,
    public authService: AuthService) {}

  ngOnInit() {
    this.authService.loggedStatus.subscribe({next: (value: boolean) => {
      this.isLoggedIn = value
    }})

    const user = localStorage.getItem('user');
    if (user !== null) {
      this.isLoggedIn = true;
    } else {
      this.router.navigate(['landing-page']);
    }
  }

  ngOnChanges() {
    const user = localStorage.getItem('user');
    if (user !== null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  onClickRouter() {
    const user = localStorage.getItem('user');
    if (user != null || undefined || "") {
      this.router.navigate(['user-page'])
    } else {
      this.router.navigate(['landing-page'])
    }
  }

  logOut() {
    signOut(this.auth)
      .then(() => {
        localStorage.clear();
        this.isLoggedIn = false;
        alert('Hai effettuato il logout correttamente');
        this.router.navigate(['landing-page']);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  userPage() {
    this.router.navigate(['user-page']);
  }

}

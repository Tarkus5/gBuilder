import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { collection, getDocs } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { getAuth } from 'firebase/auth'
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit, OnChanges {
  public data: any = [];
  auth = getAuth();
  isSignedIn = false;

  constructor
  (private router: Router,
    public fs: Firestore,
    public authService: AuthService) {}

  ngOnInit() {
    this.authService.loggedStatus.subscribe({next: (value: boolean) => {
      this.isSignedIn = value
    }})

    const user = localStorage.getItem('user');
    const userMail = localStorage.getItem('userEmail')?.replaceAll('"', '')
    if (user != null) {
      this.isSignedIn = true;
      const dbInstance = collection(this.fs, 'liutai');
      getDocs(dbInstance).then((data) => {
        this.data = [
          ...data.docs.map((item) => {
            if (item.get('mail') === userMail) {
              return { ...item.data(), id: item.get('mail') };
            }
            else {
              return {...item.ref}
            }
          }),
        ];
      });
    } else {
      this.router.navigate(['luthier-form']);
    }
  }

  ngOnChanges() {
    const user = localStorage.getItem('user');
    if (user !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }

    if (user !== null) {
      const userMail = localStorage.getItem('userEmail')?.replaceAll('"', '')
      this.isSignedIn = true;
      const dbInstance = collection(this.fs, 'liutai');
      getDocs(dbInstance).then((data) => {
        this.data = [
          ...data.docs.map((item) => {
            if (item.get('mail') === userMail) {
              return { ...item.data(), id: item.get('mail') };
            }
            else {
              return {...item.ref}
            }
          }),
        ];
      });
    } else {
      this.router.navigate(['luthier-form']);
    }
  }

  editMode() {
    this.router.navigate(['advanced-form']);
  }
}

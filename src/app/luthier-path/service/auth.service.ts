import { Injectable, EventEmitter } from "@angular/core";


@Injectable({providedIn: 'root'})
export class AuthService {

  isLoggedIn = false;

  loggedStatus = new EventEmitter<Boolean>();

  isLogged() {
    const user = localStorage.getItem('user');
    if (user === null || undefined || "") {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
    this.loggedStatus.emit(this.isLoggedIn);
  }

}

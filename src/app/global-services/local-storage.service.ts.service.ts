import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  data:String[] = [];

   setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
  }

  removeItem(data: String): void {
    localStorage.clear();
  }
  
  saveData(arg0: string, choice: any) {
  }
}

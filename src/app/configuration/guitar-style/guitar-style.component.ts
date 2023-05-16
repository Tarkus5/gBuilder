import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LuthierRegistrationServiceService } from 'src/app/luthier-path/service/luthier-registration-service.service';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { LocalStorageService } from 'src/app/global-services/local-storage.service.ts.service';

@Component({
  selector: 'app-guitar-style',
  templateUrl: './guitar-style.component.html',
  styleUrls: ['./guitar-style.component.css'],
})
export class GuitarStyleComponent implements OnInit, OnChanges {
  @Output('nextClick') nextClick = new EventEmitter<number>();

  inputDisabled = false;
  showAvanti = true;
  disableCheckboxes = false;

  public data: any = [];
  nextDisabled = true;
  Strato: Boolean = false;
  Tele: Boolean = false;
  lesPaul: Boolean = false;
  Diavoletto: Boolean = false;
  hb: Boolean = false;
  v: Boolean = false;
  Ex: Boolean = false;
  Speciale: Boolean = false;

  checkbox1 = false;
  checkbox2 = false;
  checkbox3 = false;
  checkbox4 = false;
  checkbox5 = false;
  checkbox6 = false;
  checkbox7 = false;
  checkbox8 = false;

  dataLocalStorage: any;
  checkboxValue: any;

  constructor(
    public formDataService: LuthierRegistrationServiceService,
    public fs: Firestore,
    private localstorage: LocalStorageService,
    private router: Router
  ) { }

  cancel(): void { }

  ngOnInit() {
    const user = localStorage.getItem('user');
    const userMail = localStorage.getItem('userEmail')?.replaceAll('"', '');
    if (user !== null || undefined || '') {
      this.nextDisabled = false;
      const dbInstance = collection(this.fs, 'liutai');
      getDocs(dbInstance)
        .then((data) => {
          this.data = [
            ...data.docs.map((item) => {
              if (item.get('mail') === userMail) {
                return { ...item.data(), id: item.get('mail') };
              } else {
                return this.cancel();
              }
            }),
          ];
        })
        .then(() => {
          this.data.forEach((element: any) => {
            if (element !== undefined) {
              for (var index in element.GuitarStyles) {
                switch (element.GuitarStyles[index]) {
                  case 'Stratocaster':
                    this.Strato = true;
                    break;
                  case 'Telecaster':
                    this.Tele = true;
                    break;
                  case 'LesPaul':
                    this.lesPaul = true;
                    break;
                  case 'SG':
                    this.Diavoletto = true;
                    break;
                  case 'Hollowbody':
                    this.hb = true;
                    break;
                  case 'Flying V':
                    this.v = true;
                    break;
                  case 'Explorer':
                    this.Ex = true;
                    break;
                  case 'Special':
                    this.Speciale = true;
                    break;
                }
              }
            }
          });
        });
    }
  }

  ngOnChanges(): void {
    if (this.router.url !== '/guitar-configurator') {
      let selected = document.querySelectorAll("input[type='checkbox']:checked");
      if (selected.length > 0) {
        this.nextDisabled = false
      }
      else {
        this.nextDisabled = true
      }
    }
    else {
      let selected = document.querySelectorAll("input[type='checkbox']:checked");
      if (selected.length > 0) {
        this.nextDisabled = false
      }
      else {
        this.nextDisabled = true
        this.localstorage.removeItem;
      }
    }
  }

  emitEvent(): void {
    this.nextClick.emit();
  }

  onCheckboxChange() {
    if (this.router.url !== '/guitar-configurator') {
      let selected = document.querySelectorAll("input[type='checkbox']:checked");
      if (selected.length > 0) {
        this.nextDisabled = false
      }
      else {
        this.nextDisabled = true
      }
    }
    else {
      let selected = document.querySelectorAll('input[type = "checkbox"]:checked');
      let selectedIds: string[] = [];
      selected.forEach((value => {
        selectedIds.push(value.id)
      }));

      if (selected.length > 0) {
        this.nextDisabled = false
      }
      else {
        this.nextDisabled = true
        this.localstorage.removeItem;
      }
      if (this.checkbox1 || this.checkbox2 || this.checkbox3 || this.checkbox4 || this.checkbox5 || this.checkbox6 || this.checkbox7 || this.checkbox8) {
        this.disableCheckboxes = true;
      } else {
        this.disableCheckboxes = false;
      }
    }
    if(this.router.url === '/guitar-configurator') {
      if (this.Strato) {
        this.dataLocalStorage = 'Stratocaster';
        this.localstorage.setItem('Body', this.dataLocalStorage);
      } else if (this.Tele) {
        this.dataLocalStorage = 'Telecaster';
        this.localstorage.setItem('Body', this.dataLocalStorage);
      } else if (this.lesPaul) {
        this.dataLocalStorage = 'LesPaul';
        this.localstorage.setItem('Body', this.dataLocalStorage);
      } else if (this.Diavoletto) {
        this.dataLocalStorage = 'SG';
        this.localstorage.setItem('Body', this.dataLocalStorage);
      } else if (this.hb) {
        this.dataLocalStorage = 'Hollowbody';
        this.localstorage.setItem('Body', this.dataLocalStorage);
      } else if (this.v) {
        this.dataLocalStorage = 'Flying V';
        this.localstorage.setItem('Body', this.dataLocalStorage);
      } else if (this.Ex) {
        this.dataLocalStorage = 'Explorer';
        this.localstorage.setItem('Body', this.dataLocalStorage);
      } else if (this.Speciale) {
        this.dataLocalStorage = 'Special';
        this.localstorage.setItem('Body', this.dataLocalStorage);
      }
      else {
        localStorage.removeItem('Body');
      }
    } else{
      
    }
  }

  onChoiceSelected(data: any): void {
    this.localstorage.saveData("Scelta del body", this.dataLocalStorage);
  }
}

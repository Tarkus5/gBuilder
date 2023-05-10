import { Component, EventEmitter, Output } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection, getDocs } from 'firebase/firestore';
import { LocalStorageService } from 'src/app/global-services/local-storage.service.ts.service';

@Component({
  selector: 'app-guitar-varnishing',
  templateUrl: './guitar-varnishing.component.html',
  styleUrls: ['./guitar-varnishing.component.css'],
})
export class GuitarVarnishingComponent {
  @Output('previousClick') previousClick = new EventEmitter<number>();
  @Output("nextClick") nextClick = new EventEmitter<number>();
  @Output('finalizeClick') finalizeClick = new EventEmitter<number>();

  finalizeDisable = false;
  disableCheckboxes = false;
  nextDisabled = true;
  nextButton = false;
  finalizeButton = false;

  nitro: Boolean = false;
  poli: Boolean = false;
  relic: Boolean = false;
  swirl: Boolean = false;
  natural: Boolean = false;

  checkbox1 = false;
  checkbox2 = false;
  checkbox3 = false;
  checkbox4 = false;
  checkbox5 = false;

  textColore = false;

  colore: any;
  dataColore: any;

  public data: any = [];
  dataLocalStorage: any = [];

  constructor(
    private router: Router,
    public fs: Firestore,
    private localStorage: LocalStorageService
  ) { }

  cancel(): void { }

  ngOnInit() {
    if (this.router.url == '/guitar-configurator') {
      this.nextButton = true;
      this.natural = true;
    } else {
      this.natural = false;
      this.finalizeButton = true;
    }

    const user = localStorage.getItem('user');
    const userMail = localStorage.getItem('userEmail')?.replaceAll('"', '');
    if (user !== null || undefined || '') {
      this.finalizeDisable = false;
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
              for (var index in element.GuitarVarnishing) {
                switch (element.GuitarVarnishing[index]) {
                  case 'Nitro':
                    this.nitro = true;
                    break;
                  case 'Poliuretanica':
                    this.poli = true;
                    break;
                  case 'Relic':
                    this.relic = true;
                    break;
                }
              }
            }
          });
        });
    }
  }

  ngOnChanges(): void {
    let selected = document.querySelectorAll("input[type='checkbox']:checked");
    if (selected.length > 0) {
      this.finalizeDisable = false;
    } else {
      this.finalizeDisable = true;
    }
  }

  emitEventPrevious(): void {
    this.previousClick.emit();
  }

  emitEvent(): void {
    this.nextClick.emit();
  }

  emitEventFinalize(): void {
    this.finalizeClick.emit();
    if (this.router.url !== '/guitar-configurator') {
      this.router.navigate(['user-page'])
    } else {
      this.router.navigate(['invia-il-tuo-progetto'])
    }
  }

  onSubmit() {
    this.router.navigate(['user-page']);
  }

  onCheckboxChange() {
    if (this.router.url !== '/guitar-configurator') {
      let selected = document.querySelectorAll("input[type='checkbox']:checked");
      if (selected.length > 0) {
        this.nextDisabled = false
      } else {
        this.nextDisabled = true
      }
    } else {
      let selected = document.querySelectorAll("input[type='checkbox']:checked");
      if (selected.length > 0) {
        this.nextDisabled = false
      } else {
        this.nextDisabled = true
      }
      if (this.checkbox1 || this.checkbox2 || this.checkbox3 || this.checkbox4) {
          this.disableCheckboxes = true;
          this.textColore = true
      } else {
        this.disableCheckboxes = false;
        this.textColore = false;
        this.natural = true;
      }
    }
    if (this.checkbox1) {
      this.dataLocalStorage[0] = 'Nitro';
      this.localStorage.setItem('Verniciatura', JSON.stringify(this.dataLocalStorage))
    } else if (this.checkbox2) {
      this.dataLocalStorage[0] = 'Poliuretanica';
      this.localStorage.setItem('Verniciatura', JSON.stringify(this.dataLocalStorage));
    } else if (this.checkbox3) {
      this.dataLocalStorage[0] = 'Relic';
      this.localStorage.setItem('Verniciatura', JSON.stringify(this.dataLocalStorage));
    } else if (this.checkbox4) {
      this.dataLocalStorage[0] = 'Swirl';
      this.localStorage.setItem('Verniciatura', JSON.stringify(this.dataLocalStorage));
    } else if (this.checkbox5) {
      this.dataLocalStorage[0] = 'Natural';
      this.localStorage.setItem('Verniciatura', this.dataLocalStorage);
    }
    else {
      localStorage.removeItem('Verniciatura');
    }
  }

  onTextareaInput(colore: any): void {
    const value = (document.getElementById("TextColore") as any).value;
    this.dataLocalStorage[1] = value;
    const v = this.dataLocalStorage[0] + " , " + this.dataLocalStorage[1];
    this.localStorage.setItem('Verniciatura', v);
  }
}
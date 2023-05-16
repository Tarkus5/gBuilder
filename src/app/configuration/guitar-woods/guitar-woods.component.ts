import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/global-services/local-storage.service.ts.service';
import { WoodService } from 'src/app/luthier-path/service/wood.service';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs } from 'firebase/firestore';

@Component({
  selector: 'app-guitar-woods',
  templateUrl: './guitar-woods.component.html',
  styleUrls: ['./guitar-woods.component.css'],
})
export class GuitarWoodsComponent {
  @Output('nextClick') nextClick = new EventEmitter<number>();
  @Output('previousClick') previousClick = new EventEmitter<number>();

  nextDisabled = true;
  disableCheckboxes = false;
  showButton = true;

  ciliegio: Boolean = false;
  koa: Boolean = false;
  sapele: Boolean = false;
  abete: Boolean = false;
  pioppo: Boolean = false;
  pino: Boolean = false;
  okume: Boolean = false;
  pauFerro: Boolean = false;
  mogano: Boolean = false;
  frassino: Boolean = false;
  alder: Boolean = false;
  noce: Boolean = false;
  palissandro: Boolean = false;
  ebano: Boolean = false;
  tiglio: Boolean = false;
  acero: Boolean = false;

  public data: any = [];

  checkbox1 = false;
  checkbox2 = false;
  checkbox3 = false;
  checkbox4 = false;
  checkbox5 = false;
  checkbox6 = false;
  checkbox7 = false;
  checkbox8 = false;
  checkbox9 = false;
  checkbox10 = false;
  checkbox11 = false;
  checkbox12 = false;
  checkbox13 = false;
  checkbox14 = false;
  checkbox15 = false;
  checkbox16 = false;
  checkbox17 = false;

  dataBody: any;
  dataTop: any;
  dataManico: any;
  dataTastiera: any;

  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    public serviceWood: WoodService,
    public fs: Firestore
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
              for (var index in element.GuitarWoods) {
                switch (element.GuitarWoods[index]) {
                  case 'Ciliegio':
                    this.ciliegio = true;
                    break;
                  case 'KoaHawaiano':
                    this.koa = true;
                    break;
                  case 'Sapele':
                    this.sapele = true;
                    break;
                  case 'Abete':
                    this.abete = true;
                    break;
                  case 'Pioppo':
                    this.pioppo = true;
                    break;
                  case 'Pino':
                    this.pino = true;
                    break;
                  case 'Okume':
                    this.okume = true;
                    break;
                  case 'Pau Ferro':
                    this.pauFerro = true;
                    break;
                  case 'Mogano':
                    this.mogano = true;
                    break;
                  case 'Frassino':
                    this.frassino = true;
                    break;
                  case 'Alder':
                    this.alder = true;
                    break;
                  case 'Noce':
                    this.noce = true;
                    break;
                  case 'Palissandro':
                    this.palissandro = true;
                    break;
                  case 'Ebano':
                    this.ebano = true;
                    break;
                  case 'Tiglio':
                    this.tiglio = true;
                    break;
                  case 'Acero':
                    this.acero = true;
                    break;
                }
              }
            }
          });
        });
    }

    if (this.router.url === '/guitar-configurator') {
      this.dataBody = localStorage.getItem('LegnoBody');
      this.dataTop = localStorage.getItem('LegnoTop');
      this.dataManico = localStorage.getItem('LegnoManico');
      this.dataTastiera = localStorage.getItem('LegnoTastiera');
      switch (this.serviceWood.selectedTab) {
        case 3:
          switch (this.dataBody) {
            case 'Ciliegio':
              this.checkbox1 = true;
              break;
            case 'KoaHawaiano':
              this.checkbox2 = true;
              break;
            case 'Sapele':
              this.checkbox3 = true;
              break;
            case 'Abete':
              this.checkbox4 = true;
              break;
            case 'Pioppo':
              this.checkbox5 = true;
              break;
            case 'Pino':
              this.checkbox6 = true;
              break;
            case 'Okume':
              this.checkbox7 = true;
              break;
            case 'Pau Ferro':
              this.checkbox8 = true;
              break;
            case 'Mogano':
              this.checkbox9 = true;
              break;
            case 'Frassino':
              this.checkbox10 = true;
              break;
            case 'Alder':
              this.checkbox11 = true;
              break;
            case 'Noce':
              this.checkbox12 = true;
              break;
            case 'Palissandro':
              this.checkbox13 = true;
              break;
            case 'Ebano':
              this.checkbox14 = true;
              break;
            case 'Tiglio':
              this.checkbox15 = true;
              break;
            case 'Acero':
              this.checkbox16 = true;
              break;
          }
          this.checkedCheckbox();
          break;
        case 4: {
          switch (this.dataTop) {
            case 'Ciliegio':
              this.checkbox1 = true;
              break;
            case 'KoaHawaiano':
              this.checkbox2 = true;
              break;
            case 'Sapele':
              this.checkbox3 = true;
              break;
            case 'Abete':
              this.checkbox4 = true;
              break;
            case 'Pioppo':
              this.checkbox5 = true;
              break;
            case 'Pino':
              this.checkbox6 = true;
              break;
            case 'Okume':
              this.checkbox7 = true;
              break;
            case 'Pau Ferro':
              this.checkbox8 = true;
              break;
            case 'Mogano':
              this.checkbox9 = true;
              break;
            case 'Frassino':
              this.checkbox10 = true;
              break;
            case 'Alder':
              this.checkbox11 = true;
              break;
            case 'Noce':
              this.checkbox12 = true;
              break;
            case 'Palissandro':
              this.checkbox13 = true;
              break;
            case 'Ebano':
              this.checkbox14 = true;
              break;
            case 'Tiglio':
              this.checkbox15 = true;
              break;
            case 'Acero':
              this.checkbox16 = true;
              break;
            case 'Nessun Top':
              this.checkbox17 = true
          }
        }
          this.checkedCheckbox();
          break;
        case 5: {
          switch (this.dataManico) {
            case 'Ciliegio':
              this.checkbox1 = true;
              break;
            case 'KoaHawaiano':
              this.checkbox2 = true;
              break;
            case 'Sapele':
              this.checkbox3 = true;
              break;
            case 'Abete':
              this.checkbox4 = true;
              break;
            case 'Pioppo':
              this.checkbox5 = true;
              break;
            case 'Pino':
              this.checkbox6 = true;
              break;
            case 'Okume':
              this.checkbox7 = true;
              break;
            case 'Pau Ferro':
              this.checkbox8 = true;
              break;
            case 'Mogano':
              this.checkbox9 = true;
              break;
            case 'Frassino':
              this.checkbox10 = true;
              break;
            case 'Alder':
              this.checkbox11 = true;
              break;
            case 'Noce':
              this.checkbox12 = true;
              break;
            case 'Palissandro':
              this.checkbox13 = true;
              break;
            case 'Ebano':
              this.checkbox14 = true;
              break;
            case 'Tiglio':
              this.checkbox15 = true;
              break;
            case 'Acero':
              this.checkbox16 = true;
              break;
          }
        }
          this.checkedCheckbox();
          break;
        case 6: {
          switch (this.dataTastiera) {
            case 'Ciliegio':
              this.checkbox1 = true;
              break;
            case 'KoaHawaiano':
              this.checkbox2 = true;
              break;
            case 'Sapele':
              this.checkbox3 = true;
              break;
            case 'Abete':
              this.checkbox4 = true;
              break;
            case 'Pioppo':
              this.checkbox5 = true;
              break;
            case 'Pino':
              this.checkbox6 = true;
              break;
            case 'Okume':
              this.checkbox7 = true;
              break;
            case 'Pau Ferro':
              this.checkbox8 = true;
              break;
            case 'Mogano':
              this.checkbox9 = true;
              break;
            case 'Frassino':
              this.checkbox10 = true;
              break;
            case 'Alder':
              this.checkbox11 = true;
              break;
            case 'Noce':
              this.checkbox12 = true;
              break;
            case 'Palissandro':
              this.checkbox13 = true;
              break;
            case 'Ebano':
              this.checkbox14 = true;
              break;
            case 'Tiglio':
              this.checkbox15 = true;
              break;
            case 'Acero':
              this.checkbox16 = true;
              break;
          }
        }
          this.checkedCheckbox();
          break;
      }

    } else {
      this.serviceWood.visibleCiliegio = true
      this.serviceWood.visibleKoa = true
      this.serviceWood.visibleSapele = true
      this.serviceWood.visibleAbete = true
      this.serviceWood.visiblePioppo = true
      this.serviceWood.visiblePino = true
      this.serviceWood.visibleOkume = true
      this.serviceWood.visiblePau = true
      this.serviceWood.visibleMogano = true
      this.serviceWood.visibleFrassino = true
      this.serviceWood.visibleAlder = true
      this.serviceWood.visibleNoce = true
      this.serviceWood.visiblePalissandro = true
      this.serviceWood.visibleEbano = true
      this.serviceWood.visibleTiglio = true
      this.serviceWood.visibleAcero = true
      this.serviceWood.visibleOntano = true;
      this.serviceWood.visibleNiente = false;
    }
  }

  ngOnChanges(): void {
    let selected = document.querySelectorAll("input[type='checkbox']:checked");
    if (selected.length > 0) {
      this.nextDisabled = false;
    } else {
      this.nextDisabled = true;
    }
  }

  emitEvent(): void {
    this.nextClick.emit();
  }

  emitEventPrevious(): void {
    this.previousClick.emit();
  }

  onCheckboxChange() {
    if (this.router.url !== '/guitar-configurator') {
      let selected = document.querySelectorAll("input[type='checkbox']:checked");
      if (selected.length > 0) {
        this.nextDisabled = false
      } else {
        this.nextDisabled = true
      }
    }
    else {
      let selected = document.querySelectorAll("input[type='checkbox']:checked");
      if (selected.length > 0) {
        this.nextDisabled = false
      } else {
        this.nextDisabled = true
      }

      this.checkedCheckbox();

      switch (this.serviceWood.selectedTab) {
        case 3:
          if (this.checkbox1) {
            this.data = 'Ciliegio';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox2) {
            this.data = 'KoaHawaiano';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox3) {
            this.data = 'Sapele';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox4) {
            this.data = 'Abete';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox5) {
            this.data = 'Pioppo';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox6) {
            this.data = 'Pino';
            this.localStorage.setItem('LegnoBody', this.data)
          } else if (this.checkbox7) {
            this.data = 'Okume';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox8) {
            this.data = 'Pau Ferro';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox9) {
            this.data = 'Mogano';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox10) {
            this.data = 'Frassino';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox11) {
            this.data = 'Alder';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox12) {
            this.data = 'Noce';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox13) {
            this.data = 'Palissandro';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox14) {
            this.data = 'Ebano';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox15) {
            this.data = 'Tiglio';
            this.localStorage.setItem('LegnoBody', this.data);
          } else if (this.checkbox16) {
            this.data = 'Acero';
            this.localStorage.setItem('LegnoBody', this.data);
          }
          else {
            localStorage.removeItem('LegnoBody');
          }
          break;
        case 4:
          if (this.checkbox1) {
            this.data = 'Ciliegio';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox2) {
            this.data = 'KoaHawaiano';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox3) {
            this.data = 'Sapele';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox4) {
            this.data = 'Abete';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox5) {
            this.data = 'Pioppo';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox6) {
            this.data = 'Pino';
            this.localStorage.setItem('LegnoTop', this.data)
          } else if (this.checkbox7) {
            this.data = 'Okume';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox8) {
            this.data = 'Pau Ferro';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox9) {
            this.data = 'Mogano';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox10) {
            this.data = 'Frassino';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox11) {
            this.data = 'Alder';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox12) {
            this.data = 'Noce';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox13) {
            this.data = 'Palissandro';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox14) {
            this.data = 'Ebano';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox15) {
            this.data = 'Tiglio';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox16) {
            this.data = 'Acero';
            this.localStorage.setItem('LegnoTop', this.data);
          } else if (this.checkbox17) {
            this.data = 'Nessun Top';
            this.localStorage.setItem('LegnoTop', this.data);
          }
          else {
            localStorage.removeItem('LegnoTop');
          }
          break;
        case 5:
          if (this.checkbox1) {
            this.data = 'Ciliegio';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox2) {
            this.data = 'KoaHawaiano';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox3) {
            this.data = 'Sapele';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox4) {
            this.data = 'Abete';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox5) {
            this.data = 'Pioppo';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox6) {
            this.data = 'Pino';
            this.localStorage.setItem('LegnoManico', this.data)
          } else if (this.checkbox7) {
            this.data = 'Okume';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox8) {
            this.data = 'Pau Ferro';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox9) {
            this.data = 'Mogano';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox10) {
            this.data = 'Frassino';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox11) {
            this.data = 'Alder';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox12) {
            this.data = 'Noce';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox13) {
            this.data = 'Palissandro';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox14) {
            this.data = 'Ebano';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox15) {
            this.data = 'Tiglio';
            this.localStorage.setItem('LegnoManico', this.data);
          } else if (this.checkbox16) {
            this.data = 'Acero';
            this.localStorage.setItem('LegnoManico', this.data);
          }
          else {
            localStorage.removeItem('LegnoManico');
          }
          break;
        case 6:
          if (this.checkbox1) {
            this.data = 'Ciliegio';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox2) {
            this.data = 'KoaHawaiano';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox3) {
            this.data = 'Sapele';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox4) {
            this.data = 'Abete';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox5) {
            this.data = 'Pioppo';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox6) {
            this.data = 'Pino';
            this.localStorage.setItem('LegnoTastiera', this.data)
          } else if (this.checkbox7) {
            this.data = 'Okume';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox8) {
            this.data = 'Pau Ferro';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox9) {
            this.data = 'Mogano';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox10) {
            this.data = 'Frassino';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox11) {
            this.data = 'Alder';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox12) {
            this.data = 'Noce';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox13) {
            this.data = 'Palissandro';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox14) {
            this.data = 'Ebano';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox15) {
            this.data = 'Tiglio';
            this.localStorage.setItem('LegnoTastiera', this.data);
          } else if (this.checkbox16) {
            this.data = 'Acero';
            this.localStorage.setItem('LegnoTastiera', this.data);
          }
          else {
            localStorage.removeItem('LegnoTastiera');
          }
          break;
        default: break;
      }
    }
  }
  checkedCheckbox() {
    if (this.checkbox1 || this.checkbox2 || this.checkbox3 || this.checkbox4 || this.checkbox5 || this.checkbox6 || this.checkbox7 || this.checkbox8 || this.checkbox9 || this.checkbox10 || this.checkbox11 || this.checkbox12 || this.checkbox13 || this.checkbox14 || this.checkbox15 || this.checkbox16 || this.checkbox17) {
      this.disableCheckboxes = true;
      this.nextDisabled = false;
    } else {
      this.disableCheckboxes = false;
      this.nextDisabled = true;
    }
  }
}

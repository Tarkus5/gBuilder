import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { drop } from 'cypress/types/lodash';
import { LocalStorageService } from 'src/app/global-services/local-storage.service.ts.service';

@Component({
  selector: 'app-altro-form',
  templateUrl: './altro-form.component.html',
  styleUrls: ['./altro-form.component.css'],
})
export class AltroFormComponent {
  @Output('previousClick') previousClick = new EventEmitter<number>();
  @Output('finalizeClick') finalizeClick = new EventEmitter<number>();

  finalizeDisable = false;

  value: any;
  dropdown1: string = '';
  dropdown2: string = '';
  dropdown3: string = '';
  dropdown4: string = '';
  dropdown5: string = '';
  dropdown6: string = '';
  dropdown7: string = '';
  dropdown8: string = '';
  dropdown9: string = '';
  dropdown10: string = '';
  dropdown11: string = '';

  data: any;
  dataMeccaniche: any;
  dataPickUp: any;
  dataBinding: any;
  dataBattipenna: any;
  dataPonte: any;
  dataCapotasto: any;
  dataStraps: any;
  dataAltro: any;
  dataManopole: any;
  dataPaletta: any;
  dataOrientamento: any;

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkLocalStorageMeccaniche();
    this.checkLocalStoragePickup();
    this.checkLocalStorageBinding();
    this.checkLocalStorageBattipenna();
    this.checkLocalStoragePonte();
    this.checkLocalStorageCapotasto();
    this.checkLocalStorageStraps();
    this.checkLocalStorageManopole();
    this.checkLocalStoragePaletta();
    this.checkLocalStorageOrientamento();
    this.checkLocalStorageAltro();
  }

  emitEventPrevious(): void {
    this.previousClick.emit();
  }

  emitEventFinalize(): void {
    this.finalizeClick.emit();
    if (this.router.url !== '/guitar-configurator') {
      this.router.navigate(['user-page']);
    } else {
      this.router.navigate(['resoconto']);
    }
  }

  onSubmit() {
    this.router.navigate(['user-page']);
  }

  onTextareaInput(event: any): void {
    const value = event.target.value
    console.log(value);
    this.data = value;
    this.localStorage.setItem('Altro', this.data);
  }

  onSelectMeccanicheChange(event: any): void {
    const value = event.target.value;
    localStorage.setItem('Meccaniche', value);
  }

  onSelectPickUpChange(event: any): void {
    const value = event.target.value;
    localStorage.setItem('PickUp', value);
  }

  onSelectBindingChange(event: any): void {
    const value = event.target.value;
    localStorage.setItem('Binding', value);
  }

  onSelectBattipennaChange(event: any): void {
    const value = event.target.value;
    localStorage.setItem('Battipenna', value);
  }

  onSelectPonteChange(event: any): void {
    const value = event.target.value;
    localStorage.setItem('Ponte', value);
  }

  onSelectCapotastoChange(event: any): void {
    const value = event.target.value;
    localStorage.setItem('Capotasto', value);
  }

  onSelectStrapsChange(event: any): void {
    const value = event.target.value;
    localStorage.setItem('Straps', value);
  }

  onSelectManopoleChange(event: any): void {
    const value = event.target.value;
    localStorage.setItem('Manopole', value);
  }

  onSelectPalettaChange(event: any): void {
    const value = event.target.value;
    localStorage.setItem('Paletta in Tinta', value);
  }

  onSelectOrientamentoChange(event: any): void {
    const value = event.target.value;
    localStorage.setItem('Orientamento', value);
  }

  onSelectAltroChange(event: any): void {
    const value = event.target.value;
    this.localStorage.setItem('Altro', value);
  }

  checkLocalStorageMeccaniche() {
    if (localStorage.getItem('Meccaniche') === null) {
      localStorage.setItem('Meccaniche', 'Classiche');
      this.dropdown1 = 'Classiche';
    } else {
      this.dataMeccaniche = localStorage.getItem('Meccaniche');
      this.dropdown1 = this.dataMeccaniche;
    }
  }
  checkLocalStoragePickup() {
    if (localStorage.getItem('PickUp') === null) {
      localStorage.setItem('PickUp', 'SSS');
      this.dropdown2 = 'SSS';
    } else {
      this.dropdown2 = this.dataPickUp;
      this.dataPickUp = localStorage.getItem('PickUp');
      this.dropdown2 = this.dataPickUp;
    }
  }
  checkLocalStorageBinding() {
    if (localStorage.getItem('Binding') === null) {
      localStorage.setItem('Binding', 'No');
      this.dropdown3 = 'No';
    } else {
      this.dropdown3 = this.dataBinding;
      this.dataBinding = localStorage.getItem('Binding');
      this.dropdown3 = this.dataBinding;
    }
  }
  checkLocalStorageBattipenna() {
    if (localStorage.getItem('Battipenna') === null) {
      localStorage.setItem('Battipenna', 'Si');
      this.dropdown4 = 'Si';
    } else {
      this.dropdown4 = this.dataBattipenna;
      this.dataBattipenna = localStorage.getItem('Battipenna');
      this.dropdown4 = this.dataBattipenna;
    }
  }
  checkLocalStoragePonte() {
    if (localStorage.getItem('Ponte') === null) {
      localStorage.setItem('Ponte', 'Fisso');
      this.dropdown5 = 'Fisso';
    } else {
      this.dropdown5 = this.dataPonte;
      this.dataPonte = localStorage.getItem('Ponte');
      this.dropdown5 = this.dataPonte;
    }
  }
  checkLocalStorageCapotasto() {
    if (localStorage.getItem('Capotasto') === null) {
      localStorage.setItem('Capotasto', 'Plastica');
      this.dropdown6 = 'Plastica';
    } else {
      this.dropdown6 = this.dataCapotasto;
      this.dataCapotasto = localStorage.getItem('Capotasto');
      this.dropdown6 = this.dataCapotasto;
    }
  }
  checkLocalStorageStraps() {
    if (localStorage.getItem('Straps') === null) {
      localStorage.setItem('Straps', 'Standard');
      this.dropdown7 = 'Standard';
    } else {
      this.dropdown7 = this.dataStraps;
      this.dataStraps = localStorage.getItem('Straps');
      this.dropdown7 = this.dataStraps;
    }
  }
  checkLocalStorageManopole() {
    if (localStorage.getItem('Manopole') === null) {
      localStorage.setItem('Manopole', 'Strato Style');
      this.dropdown8 = 'Strato Style';
    } else {
      this.dropdown8 = this.dataManopole;
      this.dataManopole = localStorage.getItem('Manopole');
      this.dropdown8 = this.dataManopole;
    }
  }
  checkLocalStoragePaletta() {
    if (localStorage.getItem('Paletta in Tinta') === null) {
      localStorage.setItem('Paletta in Tinta', 'No');
      this.dropdown9 = 'No';
    } else {
      this.dropdown9 = this.dataPaletta;
      this.dataPaletta = localStorage.getItem('Paletta in Tinta');
      this.dropdown9 = this.dataPaletta;
    }
  }
  checkLocalStorageOrientamento() {
    if (localStorage.getItem('Orientamento') === null) {
      localStorage.setItem('Orientamento', 'Classica');
      this.dropdown10 = 'Classica';
    } else {
      this.dropdown10 = this.dataOrientamento;
      this.dataOrientamento = localStorage.getItem('Orientamento');
      this.dropdown10 = this.dataOrientamento;
    }
  }
  checkLocalStorageAltro() {
    if (localStorage.getItem('Altro') === null) {
      localStorage.setItem('Altro', '');
      this.dropdown11 = '';
    } else {
      this.dropdown11 = this.dataAltro;
      this.dataAltro = localStorage.getItem('Altro');
      this.dropdown11 = this.dataAltro
    }
  }
}

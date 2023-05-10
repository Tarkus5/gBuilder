import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  dropdown1: Boolean = false;
  dropdown2: Boolean = false;
  dropdown3: Boolean = false;
  dropdown4: Boolean = false;

  meccaniche: Boolean = true;
  pickUp: Boolean = true;
  binding: Boolean = true;
  battipenna: Boolean = true;
  ponte: Boolean = true;
  capotasto: Boolean = true;
  straps: Boolean = true;
  altro: Boolean = true;

  data: any;

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.onSelectMeccanicheChange({ target: { value: 'Classiche' } });
    this.onSelectPickUpChange({ target: { value: 'SSS' } });
    this.onSelectBindingChange({ target: { value: 'No' } });
    this.onSelectBattipennaChange({ target: { value: 'Si' } });
    this.onSelectPonteChange({ target: { value: 'Fisso' } });
    this.onSelectCapotastoChange({ target: { value: 'Plastica' } });
    this.onSelectStrapsChange({ target: { value: 'Standard' } });
    this.onSelectManopoleChange({ target: { value: 'Strato Style' } });
    this.onSelectPalettaChange({ target: { value: 'No' } });
    this.onSelectOrientamentoChange({ target: { value: 'Classico' } });
    this.onSelectAltroChange({ target: { value: '...' } });
  }

  emitEventPrevious(): void {
    this.previousClick.emit();
  }

  emitEventFinalize(): void {
    this.finalizeClick.emit();
    if (this.router.url !== '/guitar-configurator') {
      this.router.navigate(['user-page']);
    } else {
      this.router.navigate(['app-finalize']);
    }
  }

  onSubmit() {
    this.router.navigate(['user-page']);
  }

  onTextareaInput(colore: any): void {
    const value = (document.getElementById('TextAltro') as any).value;
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
}

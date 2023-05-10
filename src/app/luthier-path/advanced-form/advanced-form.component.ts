import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LuthierRegistrationServiceService } from '../service/luthier-registration-service.service';
import { Firestore, collection, doc } from '@angular/fire/firestore';
import { getDocs, updateDoc } from 'firebase/firestore';

@Component({
  selector: 'app-advanced-form',
  templateUrl: './advanced-form.component.html',
  styleUrls: ['./advanced-form.component.css'],
})
export class AdvancedFormComponent {
  spedizioni: String = 'Si';
  pagamenti: String = 'nonSelezionato';
  ragioneSociale: String = '';
  partitaIva: String = '';
  cittaUtente: String = '';
  indirizzoUtente: String = '';
  public data: any = [];

  constructor(
    private router: Router,
    public formDataService: LuthierRegistrationServiceService,
    public fs: Firestore
  ) {
    this.pagamenti = 'nonSelezionato';
  }

  cancel(): void {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    const userMail = localStorage.getItem('userEmail')?.replaceAll('"', '');
    if (user !== null) {
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
            if(element !== undefined) {
              this.ragioneSociale = element.ragioneSociale;
              this.partitaIva = element.partitaIva;
              this.cittaUtente = element.citta;
              this.indirizzoUtente = element.indirizzo;
              this.spedizioni = element.spedizione;
              this.pagamenti = element.formaPagamento;
            }
          });
        });
    }
  }

  openProductionPage(form: NgForm) {
    const user = localStorage.getItem('user');
    const userMail = localStorage.getItem('userEmail')?.replaceAll('"', '');
    let formData = form.value;
    const updateData = formData;
    if (user !== null || '' || undefined) {
      const dbInstance = collection(this.fs, 'liutai');
      getDocs(dbInstance).then((data) => {
        this.data = [
          ...data.docs.map((item) => {
            if (item.get('mail') === userMail) {
              const docInstance = doc(this.fs, 'liutai', item.id);
              updateDoc(docInstance, updateData).then(() => {});
              this.router.navigate(['processings-page']);
              return { ...item.data(), id: item.id };
            } else {
              return { ...item.ref };
            }
          }),
        ];
      });
    } else {
      let formData = form.value;
      this.formDataService.setAdvancedFormData(formData);
      this.router.navigate(['processings-page']);
    }
  }
}

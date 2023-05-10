import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LuthierRegistrationServiceService } from '../service/luthier-registration-service.service';

import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';

import { WoodService } from '../service/wood.service';

@Component({
  selector: 'app-processings',
  templateUrl: './processings.component.html',
  styleUrls: ['./processings.component.css']
})

export class ProcessingsComponent {

  selectedTab = 1;

  user = localStorage.getItem('user');
  userMail = localStorage.getItem('userEmail')?.replaceAll('"', '')

  public data: any = [];

  showWoods: boolean = false;
  showListParts: boolean = false;
  other: Boolean = false;
  finalize: Boolean = false;

  constructor(
    public formDataService: LuthierRegistrationServiceService,
    private router: Router,
    public fs: Firestore,
    public serviceWood: WoodService) { }


  ngOnInit(): void {
    if (this.router.url === '/guitar-configurator') {
      this.showListParts = true;
      this.other = true;
      this.finalize = true;
    } else {
      this.showWoods = true;
      this.other = false;
    }
    this.serviceWood.selectedTab = 1;
  }


  onNextClickStyles() {
    if (this.router.url !== '/guitar-configurator') {
      let selected = document.querySelectorAll("input[type='checkbox']:checked");
      let selectedIds: string[] = [];
      selected.forEach((value => {
        selectedIds.push(value.id)
      }))
      this.formDataService.setGuitarTypeData(selectedIds);
      this.serviceWood.selectedTab = 2;
    } else {
      let selected = document.querySelectorAll('input[type = "checkbox"]:checked');
      let selectedIds: string[] = [];
      selected.forEach((value => {
        selectedIds.push(value.id)
      }));
      this.serviceWood.selectedTab = 3
    }
    this.controlloLegni()
  }

  onNextClick() {
    if (this.router.url !== '/guitar-configurator') {
      let selected = document.querySelectorAll("input[type='checkbox']:checked");
      let selectedIds: string[] = [];
      selected.forEach((value => {
        selectedIds.push(value.id)
      }))
      this.formDataService.setGuitarWoodData(selectedIds);
      if (this.serviceWood.selectedTab === 8) {
        this.serviceWood.selectedTab = 7;
      }
    } else { }
    if (this.serviceWood.selectedTab === 8) {
      this.serviceWood.selectedTab = 7
    } else if (this.showListParts === false && this.serviceWood.selectedTab === 2) {
      this.serviceWood.selectedTab = 7;
    } else {
      this.serviceWood.selectedTab = this.serviceWood.selectedTab + 1;
    }
    this.controlloLegni()
  }

  onPreviousClickWood() {
    this.controlloLegni()
    if (this.serviceWood.selectedTab === 0 || this.serviceWood.selectedTab === 3) {
      this.serviceWood.selectedTab = 1;
    } else {
      this.serviceWood.selectedTab = this.serviceWood.selectedTab - 1;
      this.controlloLegni()
    }
  }

  onPreviousClick() {
    if (this.showListParts === false && this.serviceWood.selectedTab === 7) {
      this.serviceWood.selectedTab = 3;
    }
    this.serviceWood.selectedTab = this.serviceWood.selectedTab - 1;
    this.controlloLegni();
  }

  onFinalizeClick() {
    if (this.router.url === '/guitar-configurator') {
      this.serviceWood.selectedTab = this.serviceWood.selectedTab + 1;
      this.finalize = true;
    } else {
      let selected = document.querySelectorAll("input[type='checkbox']:checked");
      let selectedIds: string[] = [];
      selected.forEach((value => {
        selectedIds.push(value.id)
      }))
      this.formDataService.setGuitarVarnishing(selectedIds)
      const datas = Object.assign({}, this.formDataService.luthierFormData, this.formDataService.advancedFormData, this.formDataService.processingsData);
      if (this.user == null || "" || undefined) {
        const dbInstance = collection(this.fs, 'liutai');
        addDoc(dbInstance, datas)
          .then(() => {
            alert("Registrazione effettuata! Effettua il login!")
            this.router.navigate(['luthier-form'])
          })
          .catch((err: { message: any; }) => {
            alert(err.message)
          })
      } else {
        const dbInstance = collection(this.fs, 'liutai');
        getDocs(dbInstance).then((data) => {
          this.data = [
            ...data.docs.map((item) => {
              if (item.get('mail') === this.userMail) {
                const docInstance = doc(this.fs, 'liutai', item.id);
                updateDoc(docInstance, datas)
                  .then(() => { });
                this.router.navigate(['user-page']);
                console.log(item.data());
                console.log(item.id);
                return { ...item.data(), id: item.id };
              }
              else {
                return { ...item.ref }
              }
            }),
          ];
        });
      }
    }
  }

  controlloLegni() {
    switch (this.serviceWood.selectedTab) {
      case 3: this.serviceWood.legniBody();
        break;
      case 4: this.serviceWood.legniTop();
        break;
      case 5: this.serviceWood.legniManico();
        break;
      case 6: this.serviceWood.legniTastiera();
    }
  }
}

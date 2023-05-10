import { Component } from '@angular/core';
import {
  DocumentData,
  Firestore,
  WithFieldValue,
  addDoc,
  collection,
} from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-ending-form',
  templateUrl: './ending-form.component.html',
  styleUrls: ['./ending-form.component.css'],
})
export class EndingFormComponent {
  body: any;
  battipenna: any;
  pickUp: any;
  meccaniche: any;
  binding: any;
  orientamento: any;
  straps: any;
  manopole: any;
  ponte: any;
  palettaInTinta: any;
  capotasto: any;
  legnoTop: any;
  legnoManico: any;
  legnoTastiera: any;
  legnoBody: any;
  verniciatura: any = [];
  altro: any;
  popUp: Boolean = false;
  datiUtente: any;

  constructor(private router: Router, public fs: Firestore) {}

  ngOnInit(): void {
    this.getElementiChitarra();
  }

  return() {
    localStorage.clear();
    this.router.navigate(['guitar-configurator']);
  }

  getElementiChitarra() {
    this.body = localStorage.getItem('Body');
    this.legnoBody = localStorage.getItem('LegnoBody');
    this.legnoTastiera = localStorage.getItem('LegnoTastiera');
    this.legnoManico = localStorage.getItem('LegnoManico');
    this.legnoTop = localStorage.getItem('LegnoTop');
    this.capotasto = localStorage.getItem('Capotasto');
    this.palettaInTinta = localStorage.getItem('Paletta in Tinta');
    this.ponte = localStorage.getItem('Ponte');
    this.manopole = localStorage.getItem('Manopole');
    this.straps = localStorage.getItem('Straps');
    this.verniciatura = localStorage.getItem('Verniciatura');
    this.orientamento = localStorage.getItem('Orientamento');
    this.binding = localStorage.getItem('Binding');
    this.meccaniche = localStorage.getItem('Meccaniche');
    this.battipenna = localStorage.getItem('Battipenna');
    this.pickUp = localStorage.getItem('PickUp');
    this.altro = localStorage.getItem('Altro');
  }

  saveUser(form: NgForm) {
    this.datiUtente = form.value;
    const data: WithFieldValue<DocumentData> = {
      body: this.body,
      legnoBody: this.legnoBody,
      legnoTop: this.legnoTop,
      legnoManico: this.legnoManico,
      legnoTastiera: this.legnoTastiera,
      verniciatura: this.verniciatura,
      battipenna: this.battipenna,
      pickUp: this.pickUp,
      meccaniche: this.meccaniche,
      binding: this.binding,
      orientamento: this.orientamento,
      straps: this.straps,
      manopole: this.manopole,
      ponte: this.ponte,
      palettaInTinta: this.palettaInTinta,
      capotasto: this.capotasto,
      altro: this.altro,
      datiUtente: this.datiUtente,
    };
    const dbInstance = collection(this.fs, 'progetti');
    addDoc(dbInstance, data).then(() => {});
    var resoconto = JSON.stringify(data)
      .replaceAll('{', '')
      .replaceAll('}', '')
      .replaceAll('"', '')
      .replaceAll(',', '\n');
    var blob = new Blob([resoconto], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob, 'Il Mio Progetto.txt');
    localStorage.clear();
    this.router.navigate(['scegli-il-tuo-liutaio'])
  }
}

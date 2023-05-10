import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-finalize',
  templateUrl: './finalize.component.html',
  styleUrls: ['./finalize.component.css'],
})
export class FinalizeComponent implements OnInit {
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
  closeResult = '';

  constructor(
    private router: Router,
    private modalService: NgbModal,
    public fs: Firestore
  ) {}
  ngOnInit(): void {
    this.getElementiChitarra();
  }

  return() {
    localStorage.clear();
    this.router.navigate(['guitar-configurator']);
  }

  getElementiChitarra() {
    this.body = localStorage.getItem('Body');
    this.body = this.removeVirgolette(this.body);
    this.legnoBody = localStorage.getItem('LegnoBody');
    this.legnoBody = this.removeVirgolette(this.legnoBody);
    this.legnoTastiera = localStorage.getItem('LegnoTastiera');
    this.legnoTastiera = this.removeVirgolette(this.legnoTastiera);
    this.legnoManico = localStorage.getItem('LegnoManico');
    this.legnoManico = this.removeVirgolette(this.legnoManico);
    this.legnoTop = localStorage.getItem('LegnoTop');
    this.legnoTop = this.removeVirgolette(this.legnoTop);
    this.capotasto = localStorage.getItem('Capotasto');
    this.capotasto = this.removeVirgolette(this.capotasto);
    this.palettaInTinta = localStorage.getItem('Paletta in Tinta');
    this.palettaInTinta = this.removeVirgolette(this.palettaInTinta);
    this.ponte = localStorage.getItem('Ponte');
    this.ponte = this.removeVirgolette(this.ponte);
    this.manopole = localStorage.getItem('Manopole');
    this.manopole = this.removeVirgolette(this.manopole);
    this.straps = localStorage.getItem('Straps');
    this.straps = this.removeVirgolette(this.straps);
    this.verniciatura = localStorage.getItem('Verniciatura');
    this.verniciatura = this.removeVirgolette(this.verniciatura);
    this.orientamento = localStorage.getItem('Orientamento');
    this.orientamento = this.removeVirgolette(this.orientamento);
    this.binding = localStorage.getItem('Binding');
    this.binding = this.removeVirgolette(this.binding);
    this.meccaniche = localStorage.getItem('Meccaniche');
    this.meccaniche = this.removeVirgolette(this.meccaniche);
    this.battipenna = localStorage.getItem('Battipenna');
    this.battipenna = this.removeVirgolette(this.battipenna);
    this.pickUp = localStorage.getItem('PickUp');
    this.pickUp = this.removeVirgolette(this.pickUp);
    this.altro = localStorage.getItem('Altro');
    this.altro = this.removeVirgolette(this.altro);
  }

  removeVirgolette(o: any) {
    o = o.replaceAll('"', '');
    return o;
  }

  next() {
    this.body = localStorage.setItem('Body', this.body);
    this.legnoBody = localStorage.setItem('LegnoBody', this.legnoBody);
    this.legnoTastiera = localStorage.setItem(
      'LegnoTastiera',
      this.legnoTastiera
    );
    this.legnoManico = localStorage.setItem('LegnoManico', this.legnoManico);
    this.legnoTop = localStorage.setItem('LegnoTop', this.legnoTop);
    this.capotasto = localStorage.setItem('Capotasto', this.capotasto);
    this.palettaInTinta = localStorage.setItem(
      'Paletta in Tinta',
      this.palettaInTinta
    );
    this.ponte = localStorage.setItem('Ponte', this.ponte);
    this.manopole = localStorage.setItem('Manopole', this.manopole);
    this.straps = localStorage.setItem('Straps', this.straps);
    this.verniciatura = localStorage.setItem('Verniciatura', this.verniciatura);
    this.orientamento = localStorage.setItem('Orientamento', this.orientamento);
    this.binding = localStorage.setItem('Binding', this.binding);
    this.meccaniche = localStorage.setItem('Meccaniche', this.meccaniche);
    this.battipenna = localStorage.setItem('Battipenna', this.battipenna);
    this.pickUp = localStorage.setItem('PickUp', this.pickUp);
    this.altro = localStorage.setItem('Altro', this.altro);
    this.router.navigate(['finale']);
  }
}

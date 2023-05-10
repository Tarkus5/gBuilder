import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WoodService {

  constructor() { }

  selectedTab = 1;

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
  ontano: Boolean = false;
  niente: Boolean = false;

  visibleCiliegio: Boolean = false;
  visibleKoa: Boolean = false;
  visibleSapele: Boolean = false;
  visibleAbete: Boolean = false;
  visiblePioppo: Boolean = false;
  visiblePino: Boolean = false;
  visibleOkume: Boolean = false;
  visiblePau: Boolean = false;
  visibleMogano: Boolean = false;
  visibleFrassino: Boolean = false;
  visibleAlder: Boolean = false;
  visibleNoce: Boolean = false;
  visiblePalissandro: Boolean = false;
  visibleEbano: Boolean = false;
  visibleTiglio: Boolean = false;
  visibleAcero: Boolean = false;
  visibleOntano: Boolean = false;
  visibleNiente: Boolean = false;

  legniManico() {
    this.visibleCiliegio = true;
    this.visibleKoa = false;
    this.visibleSapele = true;
    this.visibleAbete = true
    this.visiblePioppo = true;
    this.visiblePino = true;
    this.visibleOkume = true;
    this.visiblePau = false;
    this.visibleMogano = true;
    this.visibleFrassino = true;
    this.visibleAlder = false;
    this.visibleNoce = true;
    this.visiblePalissandro = false;
    this.visibleEbano = false;
    this.visibleTiglio = false;
    this.visibleAcero = true;
    this.visibleOntano = true;
    this.visibleNiente = false;
  }

  legniTastiera() {
    this.visibleCiliegio = false;
    this.visibleKoa = false;
    this.visibleSapele = false;
    this.visibleAbete = false
    this.visiblePioppo = false;
    this.visiblePino = false;
    this.visibleOkume = false;
    this.visiblePau = true;
    this.visibleMogano = false;
    this.visibleFrassino = false;
    this.visibleAlder = false;
    this.visibleNoce = true;
    this.visiblePalissandro = true;
    this.visibleEbano = true;
    this.visibleTiglio = false;
    this.visibleAcero = true;
    this.visibleOntano = false;
    this.visibleNiente = false;
  }

  legniBody() {
    this.visibleCiliegio = true;
    this.visibleKoa = true;
    this.visibleSapele = true;
    this.visibleAbete = true
    this.visiblePioppo = true;
    this.visiblePino = true;
    this.visibleOkume = true;
    this.visiblePau = true;
    this.visibleMogano = true;
    this.visibleFrassino = true;
    this.visibleAlder = true;
    this.visibleNoce = true;
    this.visiblePalissandro = true;
    this.visibleEbano = true;
    this.visibleTiglio = true;
    this.visibleAcero = true;
    this.visibleOntano = true;
    this.visibleNiente = false;
  }

  legniTop() {
    this.visibleCiliegio = true;
    this.visibleKoa = true;
    this.visibleSapele = true;
    this.visibleAbete = true
    this.visiblePioppo = true;
    this.visiblePino = true;
    this.visibleOkume = true;
    this.visiblePau = true;
    this.visibleMogano = true;
    this.visibleFrassino = true;
    this.visibleAlder = true;
    this.visibleNoce = true;
    this.visiblePalissandro = true;
    this.visibleEbano = true;
    this.visibleTiglio = true;
    this.visibleAcero = true;
    this.visibleOntano = true;
    this.visibleNiente = true;
  }
}

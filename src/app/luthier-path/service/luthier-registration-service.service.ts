import { Injectable } from '@angular/core';

class ProcessingData{
  public GuitarStyles: any;
  public GuitarWoods: any;
  public GuitarVarnishing: any;
}

@Injectable({
  providedIn: 'root'
})

export class LuthierRegistrationServiceService {

  public luthierFormData: any;
  public advancedFormData: any;
  public processingsData: ProcessingData = new ProcessingData();
  public registeredId: string = '';

  constructor() { }

  setRegisteredId(id: string) {
    this.registeredId = id;
  }

  setLuthierFormData(data: object) {
    this.luthierFormData = data;
  }

  getLuthierFormData() {
    return this.luthierFormData;
  }

  setAdvancedFormData(data: object) {
    this.advancedFormData = data;
  }

  getAdvancedFormData() {
    return this.advancedFormData;
  }

  setGuitarTypeData(data: object) {
    this.processingsData.GuitarStyles = data;
  }

  setGuitarWoodData(data: object) {
    this.processingsData.GuitarWoods = data;
  }

  setGuitarVarnishing(data: object) {
    this.processingsData.GuitarVarnishing = data;
  }

  getProcessingData() {
    return this.processingsData;
  }
}

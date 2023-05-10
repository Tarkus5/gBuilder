import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingFormComponent } from './sending-form.component';

describe('SendingFormComponent', () => {
  let component: SendingFormComponent;
  let fixture: ComponentFixture<SendingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LuthierFormComponent } from './luthier-path/luthier-form/luthier-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GuitarConfiguratorComponent } from './user-path/guitar-configurator/guitar-configurator.component';
import { AdvancedFormComponent } from './luthier-path/advanced-form/advanced-form.component';
import { UserPageComponent } from './luthier-path/user-page/user-page.component';
import { GuitarStyleComponent } from './configuration/guitar-style/guitar-style.component';
import { ProcessingsComponent } from './luthier-path/processings/processings.component';
import { GuitarWoodsComponent } from './configuration/guitar-woods/guitar-woods.component';
import { GuitarVarnishingComponent } from './configuration/guitar-varnishing/guitar-varnishing.component';
import { OnlynumberDirective } from './luthier-path/advanced-form/only-number.directive';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PasswordResetComponent } from './luthier-path/luthier-form/password-reset/password-reset.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading';
import { PasswordStrengthValidatorDirective } from './luthier-path/luthier-form/password-validator/password-validator.directive';
import { SendingFormComponent } from './user-path/sending-form/sending-form.component';
import { EndingFormComponent } from './user-path/ending-form/ending-form.component';
import { AltroFormComponent } from './user-path/altro-form/altro-form.component';
import { FinalizeComponent } from './user-path/finalize/finalize.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    LuthierFormComponent,
    LandingPageComponent,
    GuitarConfiguratorComponent,
    AdvancedFormComponent,
    UserPageComponent,
    ProcessingsComponent,
    GuitarStyleComponent,
    GuitarWoodsComponent,
    GuitarVarnishingComponent,
    OnlynumberDirective,
    PasswordResetComponent,
    SpinnerComponent,
    PasswordStrengthValidatorDirective,
    AltroFormComponent,
    FinalizeComponent,
    SendingFormComponent,
    EndingFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

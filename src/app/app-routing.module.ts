import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuitarStyleComponent } from './configuration/guitar-style/guitar-style.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdvancedFormComponent } from './luthier-path/advanced-form/advanced-form.component';

import { LuthierFormComponent } from './luthier-path/luthier-form/luthier-form.component';
import { ProcessingsComponent } from './luthier-path/processings/processings.component';
import { UserPageComponent } from './luthier-path/user-page/user-page.component';
import { GuitarConfiguratorComponent } from './user-path/guitar-configurator/guitar-configurator.component';
import { FinalizeComponent } from './user-path/finalize/finalize.component';
import { EndingFormComponent } from './user-path/ending-form/ending-form.component';

import { PasswordResetComponent } from './luthier-path/luthier-form/password-reset/password-reset.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { SendingFormComponent } from './user-path/sending-form/sending-form.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'luthier-form', component: LuthierFormComponent },
  { path: 'guitar-configurator', component: GuitarConfiguratorComponent },
  { path: 'advanced-form', component: AdvancedFormComponent },
  { path: 'user-page', component: UserPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'processings-page', component: ProcessingsComponent },
  { path: 'guitar-style', component: GuitarStyleComponent },
  { path: 'password-reset-page', component: PasswordResetComponent},
  { path: 'app-finalize', component: FinalizeComponent},
  { path: 'finale', component: EndingFormComponent},
  { path: 'scegli-il-tuo-liutaio', component: SendingFormComponent },
  { path: '**', redirectTo: 'landing-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

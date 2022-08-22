import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';

import { PlansComponent } from './plans/plans.component';
import {RegistrationComponent} from './registration/registration.component';


const routes: Routes = [{ path: 'about', component: AboutComponent },
{ path: 'home', component: HomeComponent },
{ path: 'contactus', component: ContactusComponent },
{ path: 'login', component: LoginComponent },
{ path: 'faq', component:FaqComponent },
{ path: 'registration', component: RegistrationComponent},
{ path: 'plans', component: PlansComponent },
{ path: 'invoice', component: InvoiceComponent },
{ path: 'payment', component: PaymentComponent },
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: '404', component: HomeComponent },
{ path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

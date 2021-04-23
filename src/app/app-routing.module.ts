import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { BookingComponent } from './components/booking/booking.component';
import { ValidationGuard } from './validation.guard'


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'hotels', component: HotelsComponent, canActivate: [ValidationGuard] },
  { path: 'booking', component: BookingComponent, canActivate: [ValidationGuard] },
  { path: 'home', component: HomeComponent, canActivate: [ValidationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

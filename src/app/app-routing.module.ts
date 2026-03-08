import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Inicio | Edgar Iván Psicología' } },
  { path: 'servicios', component: ServicesComponent, data: { title: 'Servicios | Edgar Iván Psicología' } },
  { path: 'enfoque', component: AboutComponent, data: { title: 'Enfoque | Edgar Iván Psicología' } },
  { path: 'faq', component: FaqComponent, data: { title: 'FAQ | Edgar Iván Psicología' } },
  { path: 'contacto', component: ContactComponent, data: { title: 'Contacto | Edgar Iván Psicología' } },
  { path: 'agenda', component: BookingComponent, data: { title: 'Agenda | Edgar Iván Psicología' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqComponent } from './pages/faq/faq.component';
import { EnConstruccionComponent } from './shared/en-construccion/en-construccion.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Inicio | Edgar Iván Bautista Díaz' }
  },
  {
    path: 'servicios',
    component: EnConstruccionComponent,
    data: { title: 'Servicios | Edgar Iván Bautista Díaz' }
  },
  {
    path: 'enfoque',
    component: EnConstruccionComponent,
    data: { title: 'Enfoque | Edgar Iván Bautista Díaz' }
  },
  {
    path: 'preguntas-frecuentes',
    component: EnConstruccionComponent,
    data: { title: 'Preguntas frecuentes | Edgar Iván Bautista Díaz' }
  },
  {
    path: 'contacto',
    component: EnConstruccionComponent,
    data: { title: 'Contacto | Edgar Iván Bautista Díaz' }
  },
  {
    path: '**',
    component: EnConstruccionComponent,
    data: { title: 'Página en construcción | Edgar Iván Bautista Díaz' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

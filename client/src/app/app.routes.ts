import { Routes } from '@angular/router';

import { CanchaListComponent } from './components/cancha-list/cancha-list.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';
import { ReservaListComponent } from './components/reserva-list/reserva-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/canchas', pathMatch: 'full' },
  { path: 'canchas', component: CanchaListComponent },
  { path: 'reservar', component: ReservaFormComponent },
  { path: 'reservas', component: ReservaListComponent }
];

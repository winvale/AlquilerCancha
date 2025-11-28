import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reserva-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.css']
})
export class ReservaFormComponent implements OnInit {
  canchas: any[] = [];
  successMessage: string = '';
  isLoading: boolean = false;
  reserva = {
    canchaId: '',
    cliente: '',
    empleado: '',
    fechaTurno: ''
  };

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getCanchas().subscribe(data => {
      this.canchas = data;
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.apiService.createReserva(this.reserva).subscribe(() => {
      this.successMessage = '¡Reserva creada con éxito!';
      this.isLoading = false;
      setTimeout(() => {
        this.successMessage = '';
        this.router.navigate(['/reservas']);
      }, 2000);
    }, error => {
      console.error('Error creating reserva:', error);
      this.isLoading = false;
      // Could add error message here
    });
  }
}

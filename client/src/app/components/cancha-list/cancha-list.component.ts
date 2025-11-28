import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cancha-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cancha-list.component.html',
  styleUrls: ['./cancha-list.component.css']
})
export class CanchaListComponent implements OnInit {
  canchas: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCanchas().subscribe(data => {
      this.canchas = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adopciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adopciones.html',
  styleUrls: ['./adopciones.scss']
})
export class Adopciones implements OnInit {
pets: any;
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Adopciones - Doctor Patitas');
    this.meta.updateTag({ name: 'description', content: 'Encuentra a tu nuevo mejor amigo en Doctor Patitas. Perros y gatos en adopción.' });
    this.meta.updateTag({ name: 'keywords', content: 'adopciones, perros, gatos, mascotas' });
    this.meta.updateTag({ property: 'og:image', content: '/cat.jpg' });
  }
}

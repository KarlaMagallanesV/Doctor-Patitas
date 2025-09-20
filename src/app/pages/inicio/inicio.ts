import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.scss'] // corregido de styleUrl a styleUrls
})
export class Inicio implements OnInit {

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    // Aplicar metatags (como título, descripción, imágenes) para mejorar el SEO
    this.title.setTitle('Inicio - Doctor Patitas');
    this.meta.updateTag({ name: 'description', content: 'Bienvenido a Doctor Patitas. Encuentra información, adopciones y consejos para tus mascotas.' });
    this.meta.updateTag({ name: 'keywords', content: 'Doctor Patitas, mascotas, adopción, consejos' });
    this.meta.updateTag({ property: 'og:image', content: '/fondo.jpg' });
  }

}

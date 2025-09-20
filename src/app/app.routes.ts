import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Adopciones } from './pages/adopciones/adopciones';
import { PetShop} from './pages/pet-shop/pet-shop';
import { SobreNosotros } from './pages/sobre-nosotros/sobre-nosotros';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    { path: '', component: Inicio, title: 'Inicio - Doctor Patitas' },
    { path: 'adopciones', component: Adopciones, title: 'Adopciones - Doctor Patitas' },
    { path: 'pet-shop', component: PetShop, title: 'Pet Shop - Doctor Patitas' },
    { path: 'sobre-nosotros', component: SobreNosotros, title: 'Sobre Nosotros - Doctor Patitas' },
    { path: 'contacto', component: Contacto, title: 'Contacto - Doctor Patitas' },
    { path: '**', redirectTo: '' }
];

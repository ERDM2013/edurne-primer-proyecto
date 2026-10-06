import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';


export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'contact', component: Contact},
    {path: 'about', component: About},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];

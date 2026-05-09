import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { AddUser } from './pages/add-user/add-user';
import { MobilesData } from './components/mobiles-data/mobiles-data';
import { Basicformpractice } from './components/basicformpractice/basicformpractice';

export const routes: Routes = [
    { path: '', component: Dashboard},
    { path: 'add-user', component: AddUser},
    { path: 'mobiles', component: MobilesData},
    { path: 'practice', component: Basicformpractice }
];

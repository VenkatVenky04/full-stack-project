import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { AddUser } from './pages/add-user/add-user';
import { MobilesData } from './components/mobiles-data/mobiles-data';
import { reactiveform } from './components/reactiveform/reactiveform';
import { Templatedrivenform } from './components/templatedrivenform/templatedrivenform';

export const routes: Routes = [
    { path: '', component: Dashboard},
    { path: 'add-user', component: AddUser},
    { path: 'mobiles', component: MobilesData},
    { path: 'reactiveform', component: reactiveform },
    { path: 'tdform', component: Templatedrivenform }
];

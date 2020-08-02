import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/pages/login/login.component';
import {CreateUserComponent} from '../app/pages/create-user/create-user.component';
import {ProfileComponent} from '../app/pages/profile/profile.component';

const app_routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'sign-up', component: CreateUserComponent},
    {path: 'profile/:id', component: ProfileComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
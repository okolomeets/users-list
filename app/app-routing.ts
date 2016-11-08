import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserList }             from './user-list-page/users-list.component';


import { TestApp }           from './test/test';

const routes: Routes = [
    { path: '', component: TestApp },
    { path: 'home', component: TestApp },
    { path: 'user-list', component: UserList },
    { path: 'test', component: TestApp }


];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
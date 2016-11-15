import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserList }             from './user-list-page/users-list.component';


import { TestApp }           from './test/test';
import { ApiTest }           from './api-test/api-test.component';
import { UserDetail }          from "./user-detail/user-detail.component";


const routes: Routes = [
    { path: '', component: TestApp },
    { path: 'home', component: TestApp },
    { path: 'user-list', component: UserList },
    { path: 'test', component: TestApp },
    { path: 'api-test', component: ApiTest },
    { path: 'detail/:id', component: UserDetail }


];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
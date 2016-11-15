import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';
import { FormsModule }              from '@angular/forms';


import { AppMain }                  from "./home/app-main.component";
import { UserList }                 from  './user-list-page/users-list.component';
import { AppRoutingModule }         from './app-routing';
import { TestApp }                  from './test/test';
import { ApiTest }                  from './api-test/api-test.component';
import { UserDetail }               from './user-detail/user-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppMain,
        UserList,
        TestApp,
        ApiTest,
        UserDetail

    ],

    bootstrap: [ AppMain ]
})

export class AppModule{ }
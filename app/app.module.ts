import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppMain} from "./app-main.component";
import { HttpModule, JsonpModule }  from '@angular/http';
import { UserList } from './users-list.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule

    ],
    declarations: [
        AppMain,
        UserList
    ],
    bootstrap: [ AppMain ]
})

export class AppModule{ }
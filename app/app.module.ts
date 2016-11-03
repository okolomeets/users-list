import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppMain} from "./app-main.component";
import { HttpModule, JsonpModule }  from '@angular/http';
import { UserList } from './users-list.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule
    ],
    declarations: [
        AppMain,
        UserList
    ],
    bootstrap: [ AppMain ]
})

export class AppModule{ }
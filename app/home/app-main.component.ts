import { Component } from '@angular/core';
import '././operators';


@Component({
    moduleId: module.id,
    selector: 'landing-page',
   
    template: `
<header><h1>Header</h1></header>
<nav>
                    <ul>
                        <li><a routerLink ="/user-list" >User List</a></li>
                        <li><a routerLink ="/home" >Home</a></li>    
                        <li><a routerLink ="/test" >Test</a></li>    
                    </ul>
                </nav>
                <router-outlet></router-outlet>
                <footer>Footer</footer>
            `
})

export class AppMain {


}
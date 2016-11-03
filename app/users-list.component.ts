import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './users.service';

@Component({
    selector: 'user-list',
    templateUrl: './template/users-list.html',
    moduleId: module.id,
    providers: [ UserService ],
    styles: ['.error {color:red;}']
})

export class UserList implements OnInit{
    errorMessage: string;
    users: User[];

    constructor (private usersService: UserService) {}

    ngOnInit() { this.getUser(); }

    getUser() {
        this.usersService.getUsers()
            .subscribe(
                users => this.users =  users,
                error =>  this.errorMessage = <any>error);
    }
}
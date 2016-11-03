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
    usersFilter: User[];
    

    constructor (private usersService: UserService) {}

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.usersService.getUsers()
            .subscribe(
                users => this.onUsersRetrieved(users),
                error =>  this.errorMessage = <any>error);
    }

    onFilterChanged(event: any) {
        let filter = event.target.value;
        filter = filter ? filter.toLocaleLowerCase() : null;
        this.usersFilter = filter ? this.users.filter((user: User) => user.name.toLocaleLowerCase().indexOf(filter) !== -1 ||  user.address.toLocaleLowerCase().indexOf(filter) !== -1
        || user.email.toLocaleLowerCase().indexOf(filter) !== -1 ) : this.users;
    }
    
    onUsersRetrieved(users: User[]) {
        this.users = users;
        this.usersFilter = users;
    }

}
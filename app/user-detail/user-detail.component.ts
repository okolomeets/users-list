import { Component, OnInit }      from '@angular/core';
import { Location }               from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';


import { User }                   from './data/user';
import { UserService }            from '../data/users.service';


@Component({
    moduleId: module.id,
    selector: 'user-detail',
    templateUrl: './user-detail.html'
})

export class UserDetail implements OnInit {
    user: User;

    constructor(
        private usersService:  UserService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    goBack(): void {
        this.location.back();
    }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.usersService.getUser(id)
                .then(user => this.user = user);
        });
    }
}
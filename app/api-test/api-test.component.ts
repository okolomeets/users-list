import { Component,  OnInit } from '@angular/core';
import  { TestService } from '../data/test.service';
import { Posts } from '../data/posts';

@Component({
    moduleId: module.id,
    selector: 'apiTest-page',
    templateUrl: './api-test.component.html',
    providers: [  TestService ]

})

export class ApiTest implements OnInit {
    title: string;
    errorMessage: string;
    posts: Posts[];

    constructor (){
        this.title = 'Api test page';
    }
    constructor (private testService: TestService) {}


    getPost() {
        this.testService.getPosts()
            .subscribe(
                posts => this.posts = posts,
                error =>  this.errorMessage = <any>error);
    }




}



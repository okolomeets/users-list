import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'test',
    template: '<div>{{ title }}</div>'
})

export class TestApp {
    title: string;
    constructor(){
        this.title = 'Home Page';
    }


}
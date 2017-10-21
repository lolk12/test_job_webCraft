import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { HttpService } from "./../http.service";
import { NgModel } from "@angular/forms";

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss'],

})
export class ItemsComponent implements OnInit {
    person = {};
    constructor (private http: HttpService) {}

    ngOnInit() {
        this.getDataServer();
    }
    addPerson (form) {
        if (form.valid) {
            this.person['id'] = this.http.person[this.http.person.length - 1].id + 1;
            this.http.person.push(this.person);
            this.http.setData(this.person);
            this.person = {};
        }
    }
    getDataServer () {
        this.http.getData().subscribe(
            (data) => {
                if (!this.http.person) {
                    this.http.setDataService(data);
                }
            },
            (err: HttpErrorResponse) => {
                if (!err.ok) {
                    console.log(404);
                }
            }
        );
    }

}

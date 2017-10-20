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
        const formPerson = {
            firstName: form.value.first_name,
            lastName: form.value.last_name,
            surname: form.value.surname,
            datePerson: form.value.datePerson,
            status: form.value.status,
            position: form.value.position,
            deportment: form.value.deportment,
            phone_number: form.value.phone_number,
            id: this.http.person[this.http.person.length-1].id + 1
        };
        this.http.person.push(formPerson);
        this.http.setData(formPerson);
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

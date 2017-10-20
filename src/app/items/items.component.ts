import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { HttpService } from "./../http.service";

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss'],

})
export class ItemsComponent implements OnInit {

    constructor (private http: HttpService) {}

    ngOnInit() {
        this.getDataServer();
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

import { Component, OnInit } from '@angular/core';import { ActivatedRoute } from "@angular/router";import { HttpService } from "./../http.service";@Component({    selector: 'app-item',    templateUrl: './item.component.html',    styleUrls: ['./item.component.scss'],})export class ItemComponent implements OnInit {    item;    person;    constructor(private http: HttpService, private route: ActivatedRoute) { }    ngOnInit() {        const id = +this.route.snapshot.params['id'];        this.getDataOne(id);    }    getDataOne (id) {        this.http.getDataOne(id).subscribe((data) => this.item = data);    }    delete (id) {        this.http.deleteData(id).subscribe(            (data) => {                this.person = this.http.person.filter(function (pers) {                    return pers.id !== id;                });                this.http.setDataService(this.person);            }        );    }}
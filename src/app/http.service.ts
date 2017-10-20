import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {
    public person;
    constructor(private http: HttpClient) { }

    setDataService (data) {
        return this.person = data;
    }
    getData () {
        return this.http.get('http://127.0.0.1:3000/users');
    }
    deleteData (id) {
        return this.http.delete('http://127.0.0.1:3000/users/' + id );
    }
    getDataOne(id) {
        return this.http.get('http://127.0.0.1:3000/users/' + id);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



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
    setData (data) {
        data = JSON.stringify(data);

        let headers = new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'});

        return this.http.post('http://127.0.0.1:3000/users', data,
            {headers: headers}).subscribe(
            (val) =>{
                console.log(val);
            },
            (res) => {
                console.log(res, 'res');
            }
        )
    }
    deleteData (id) {
        return this.http.delete('http://127.0.0.1:3000/users/' + id );
    }
    getDataOne(id) {
        return this.http.get('http://127.0.0.1:3000/users/' + id);
    }
}

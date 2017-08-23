import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs';

@Injectable()
export class User {
    constructor(private http:Http){

    }
    get(){
        return this.http.get('https://randomuser.me/api/?inc=gender,name,nat&results=10').map((resp:Response)=>resp.json().results);
    }
}
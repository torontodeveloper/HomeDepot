import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class User {
    constructor(private http:Http){

    }
    get(){
        return this.http.get('https://randomuser.me/api/?inc=gender,name,nat&results=10').map((resp:Response)=>resp.json().results) .catch(this.handleError());
    }
    handleError(error:any){
        console.error(error);
        return Observable.throw(error.json().error||"Server Error")
    }
}
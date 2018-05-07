import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; // libreria para llamadas a servicios REST
import { Observable } from "rxjs/Rx";
import {GitHubModel  } from "../model/git-hub-model";

//const _getUsersUrl = 'https://api.github.com/users';
const _getUsersUrl = 'http://10.11.1.100:8080/users';// server de emergencia
@Injectable()
export class GitHubService {
    //private _getUsersUrl = 'https://api.github.com/users';
    constructor(private _httpClient: HttpClient){

    }

    getUserInfo(userName: string){
        return /*Inicio*/this._httpClient.get(`${_getUsersUrl}/${userName}`,{responseType: 'json'})
        .map((x: any) => {
            let gitHubObj = new GitHubModel();
            gitHubObj.avatar_url= x.avatar_url;
            gitHubObj.login= x.login;
            gitHubObj.name= x.name;
            gitHubObj.followers= x.followers;
            gitHubObj.following= x.following;
            return gitHubObj;
        })
        .catch(this.handleError);//Aqui termina el observable
    }

    handleError(error: any){
        console.error(`Error: ${error}`);
        //return Observable.throw(error.json() != null ? error.json() : 'Server error' )
        return Observable.throw(error.json() || 'Server error' ); // esta notacion es como la de arriba con un if else
    }

}
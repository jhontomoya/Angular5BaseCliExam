import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";

@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styleUrls: ['./git-hub-card.component.css']
})
export class GitHubCardComponent implements OnInit, OnDestroy {

    @Input('github-data') gitGubData: GitHubModel; // Comunicacion de padre a hijo. Agrega un nuevo atributo cuando se coloca dentro de los parentesis Ejem. @Input('test') test; 
    constructor() {
       
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }
}
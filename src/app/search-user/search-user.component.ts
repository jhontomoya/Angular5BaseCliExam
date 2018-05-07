import { Component, OnInit, OnDestroy, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'app-search-user',
    templateUrl: './search-user.component.html',
    styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit, OnDestroy {

    userName: string;
    @Output() public onSearchUser = new EventEmitter<string>();//comunicacion de hijo a padre con observer de evento de mouse click
    constructor(){

    }

    ngOnInit(){
        
    }
    onSearchClick(){   
        this.onSearchUser.emit(this.userName);
    }
    ngOnDestroy(){
        
    }
}
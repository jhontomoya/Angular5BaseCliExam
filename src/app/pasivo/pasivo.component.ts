import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-pasivo',
  templateUrl: './pasivo.component.html',
  styleUrls: ['./pasivo.component.css']
})
export class PasivoComponent implements OnInit {

  color: string;
  constructor(private _colorService: ColorService) { }

  ngOnInit() {
  }

  changeColor(){
    console.log(this.color);
    this._colorService.setColor(this.color);
  }
}

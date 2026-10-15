import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-colors',
  imports: [CommonModule],
  templateUrl: './colors.html',
  styleUrl: './colors.css',
})
export class Colors {
  colorsArr:string[]=['rgb(221, 26, 26)','rgb(30, 216, 216)','rgba(189, 27, 189, 0.836)','rgb(245, 83, 151)','rgb(10, 197, 66)','rgba(196, 199, 14, 0.76)']

  @Output() 
  changeColor: EventEmitter<string>=new EventEmitter<string>();


  change(color:string){
    this.changeColor.emit(color)
   
  }
}
  
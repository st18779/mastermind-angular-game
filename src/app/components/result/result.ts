import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  imports: [CommonModule],
  templateUrl: './result.html',
  styleUrl: './result.css',
})
export class Result {
  bool: number = 0
  pgiaa: number = 0
  resultArr:string[]=[]
 

  @Input({ transform: (Value: string[]) => { return { ...Value } } })
  gusseArr!: string[];


  @Input({ transform: (Value: string[]) => { return { ...Value } } })
  randomColorsArr!: string[];

  @Output()
  win: EventEmitter<boolean> = new EventEmitter<boolean>();


  ngOnInit() {
    this.chek();
    console.log(this.gusseArr)
  }

  chek() {
    for (let i = 0; i < 4; i++) {
      if (this.randomColorsArr[i] == this.gusseArr[i]) {
        this.bool++
        this.resultArr.push("yellow");
        this.randomColorsArr[i] = ""
        this.gusseArr[i] = ""
      }

      for (let j = 0; j < 4; j++) {
        if (this.randomColorsArr[i] == this.gusseArr[j] && this.gusseArr[j] != "") {
          this.pgiaa++
          this.resultArr.push("red");
          this.randomColorsArr[i] = ""
          this.gusseArr[j] = ""
        }

      }
    }
    let len=this.resultArr.length;
    if(len<4)
      for(let i=0;i<4-len;i++){
        this.resultArr.push(" ");
    }
    if (this.bool == 4)
      this.win.emit(true)


  }
}

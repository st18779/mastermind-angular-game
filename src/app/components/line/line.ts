import { CommonModule } from '@angular/common';
import { Component, Input, Output, SimpleChange, SimpleChanges, WritableSignal, output, signal ,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Result } from '../result/result';

@Component({
  selector: 'app-line',
  imports: [FormsModule, CommonModule, Result],
  templateUrl: './line.html',
  styleUrl: './line.css',
})
export class Line {
  curButton!: number ;
  gusseArr: string[] = ["", "", "", ""];
  finishStep: boolean = false;
  


  
  @Output()
    winner:EventEmitter<boolean>=new EventEmitter<boolean>();
  

  @Input()
  selectedColor: string = "";

  @Input()
  curStep!: number

  @Input()
  numStep!: number

  @Input()
  randomColorsArr!: string[]

  // @Input() 
  // resetCounter!: number; 



  curStepChange = output<number>();


  ngOnInit() {
    console.log("curStep", this.curStep);
    console.log("numStep", this.numStep);

  }


  ngOnChanges(changes: SimpleChanges) {
    // if (changes['resetCounter'] && !changes['resetCounter'].firstChange) {
    //   this.resetLine(); 
    // }
    if (changes['selectedColor'] && !changes['selectedColor'].firstChange) {
      if(changes['selectedColor'].currentValue=="prevValue"){
        this.selectedColor=changes['selectedColor'].previousValue
        this.gusseArr[this.curButton] =this.selectedColor
      }
      
      else{
          
          this.gusseArr[this.curButton] = this.selectedColor
          
      }
     this.selectedColor = "";
      
    }
    
 

  }


  upCurButton(i: number) {
    this.gusseArr[i] = this.selectedColor;
    this.curButton = i;

    this.selectedColor = "";

    console.log(this.gusseArr)
  }

  finish() {

    this.finishStep = true
    this.curStepChange.emit(this.curStep+1)
    this.curButton=-1

  }

  isArrFull() {
    for (let i = 0; i < this.gusseArr.length; i++) {
      if (this.gusseArr[i] == "")
        return false;
    }
    return true;
  }
  setisWin(w:boolean){
   
      this.winner.emit(w);
  }

  // resetLine(){
  //     this.gusseArr = ["", "", "", ""]; 
  //     this.finishStep = false; 
  //     this.curButton = -1; 
     
  // }
 
}

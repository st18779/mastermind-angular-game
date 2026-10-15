import { Component } from '@angular/core';
import { Colors } from '../colors/colors';
import { Line } from '../line/line';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-game',
  imports: [FormsModule,CommonModule,Colors,Line],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  randomColorsArr:string[]=[];
  gameSteps: number=10;
  selectedColor:string="";
  curStep:number=(0)
  theWin:boolean=false;
  rule:boolean=false;
  rulesButtonText:string="להוראות לחץ עלי"
  board:string[]=Array(this.gameSteps)
  resetCounter: number = 0;



 //הגרלה של הצבעים
  ngOnInit(){
    for (let i=0;i<4;i++){
      let num=Math.floor(Math.random()*5);
      this.randomColorsArr[i]=this.putColor(num);
     
    }
     console.log("הצבעים שהוגרלו",this.randomColorsArr);
    // this.RandomColors();
  }

  // RandomColors(){
  //   this.randomColorsArr = [];
  //   for (let i=0;i<4;i++){
  //     let num=Math.floor(Math.random()*5);
  //     this.randomColorsArr[i]=this.putColor(num);
     
  //   }
  //    console.log("הצבעים שהוגרלו",this.randomColorsArr);
  // }


  getColorFromColors(color:string){
    if(this.selectedColor==color)
      this.selectedColor="prevValue";
    else
    this.selectedColor=color;
    console.log(color);
    
  }


  putColor(num :number){
    switch(num){
      case 0:
        return "rgb(221, 26, 26)";//red
      case 1:
        return "rgb(30, 216, 216)";//light-blue
      case 2:
        return "rgba(189, 27, 189, 0.836)";//purple
      case 3:
        return "rgb(245, 83, 151)";//pink 
      case 4:
        return "rgb(10, 197, 66)";//green  
      default:
        return "rgba(196, 199, 14, 0.76)"//yellow
    }
  }

  chStatus(){
    
    if(this.rule)
      this.rulesButtonText="להוראות לחץ עלי"
    else
      this.rulesButtonText="הסתר הוראות משחק"
    this.rule=!this.rule;
  }

  wining(w:boolean){
    this.theWin=w
    if(this.theWin)
    {
      
      this.curStep=-1;
      setTimeout(() => {}, 0);
      
    }
  }

  newGame(){
     window.location.reload(); 
    
      // this.theWin = false;
      // this.curStep = 0;
      // this.randomColorsArr = [];
      // this.board = Array(this.gameSteps); 
      // this.RandomColors(); 
      // this.resetCounter++; 
     
  }
  }

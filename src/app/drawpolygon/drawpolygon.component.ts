import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Circle } from '../circle';
import { Rectangle } from '../rectangle';
import { Square } from '../square';

@Component({
  selector: 'app-drawpolygon',
  templateUrl: './drawpolygon.component.html',
  styleUrls: ['./drawpolygon.component.css']
})
export class DrawpolygonComponent implements OnInit {

  selected: string = ""

  @ViewChild('myCanvas')
  myCanvas: ElementRef<HTMLCanvasElement> | undefined;



  chosenPolygon(event: any) {

    this.selected = event.target.value;
   

    var c = <HTMLCanvasElement>document.getElementById("myCanvas");
    var ctx: CanvasRenderingContext2D = c.getContext("2d")!;
    var obj;

    
    ctx.beginPath();
    if (this.selected === "Circle") {
     obj=new Circle()
     obj.draw(ctx)
    }

    else if (this.selected === "Rectangle") {
      obj=new Rectangle()
      obj.draw(ctx)
    }
    else {
      obj=new Square()
      obj.draw(ctx)
    }
  }

  constructor() {

  }

  ngOnInit(): void {



  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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
    console.log(this.selected, typeof this.selected);

    var c = <HTMLCanvasElement>document.getElementById("myCanvas");
    var ctx: CanvasRenderingContext2D = c.getContext("2d")!;
    ctx.beginPath();
    if (this.selected === "Circle") {
      ctx.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx.stroke();
    }

    else if (this.selected === "Rectangle") {
      ctx.rect(100, 100, 150, 75);
      ctx.stroke();
    }
    else {
      ctx.rect(200, 200, 150, 150);
      ctx.stroke();

    }
  }

  constructor() {

  }

  ngOnInit(): void {



  }

}

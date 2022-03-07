import { IShape } from "./ishape";

export class Rectangle implements IShape{

    draw(ctx:CanvasRenderingContext2D){

        ctx.rect(100, 100, 150, 75);
        ctx.stroke();

    }
}

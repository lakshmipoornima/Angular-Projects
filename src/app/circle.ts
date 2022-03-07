import { IShape } from "./ishape";

export class Circle implements IShape{
    draw(ctx:CanvasRenderingContext2D){
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }
}

import { IShape } from "./ishape";

export class Square implements IShape{

    draw(ctx:CanvasRenderingContext2D){
        ctx.rect(200, 200, 150, 150);
        ctx.stroke();
    }
}

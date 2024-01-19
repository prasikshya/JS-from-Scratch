class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;

    }

    set width(newWidth){
        if(newWidth >0)
        {
            this._width=newWidth;
        }
        else {
            console.error("width must be  a positive number");
        }
    }
    set height(newHeight){
        if(newHeight >0)
        {
            this._height=newHeight;
        }
        else {
            console.error("height must be  a positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
         return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm*2` ;
    }
}

const rect=new Rectangle(3,4);
rect.width=5;
rect.height=70;
console.log(rect.width);
console.log(rect.area);
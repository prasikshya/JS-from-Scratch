export const PI=3.14159;

export function getCircumference(radius){
    return 2*radius*radius;
}
export function getArea(radius)
{
    return PI*radius*radius;
}

export function getVolume(radius){
    return 4*PI*Math.pow(radius,3);
}
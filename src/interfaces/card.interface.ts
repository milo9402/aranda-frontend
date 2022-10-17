export interface BodyCardProps {
    servings: number,
    readyInMinutes: number,
    dificult: string,
}

export interface CardProps {
    key:number;
    imagesource: string;
    name: string;
    ingredient:string;
    puntuation: number;
    bodyContent:BodyCardProps
  }
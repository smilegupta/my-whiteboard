import { nanoid } from "nanoid";

export interface Shape {
  id: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  deleted: boolean;
  bgColor: string;
}

export const creatElement = (
  type: string,
  x: number,
  y: number,
  width: number,
  height: number,
  bgColor: string,
) => {
  const id = nanoid();
  return {
    id,
    type,
    x,
    y,
    width,
    height,
    bgColor,
    deleted: false,
  };
};

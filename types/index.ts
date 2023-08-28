import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface Project{
  id: number
  description: string
  name: string
  languages: string[]
  link: string
  type: string
}

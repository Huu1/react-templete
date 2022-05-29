type BaseElement = {
  id: string;
  type: string;
  visible: boolean;
  width: number;
  x: number;
  y: number;
  height: number;
  opacity: number;
  name: string;
  locked: boolean;
  rotation: number;
  selectable: boolean;
};

export type IText = {
  align: string;
  alwaysOnTop: boolean;
  blurEnabled: boolean;
  blurRadius: number;
  brightness: number;
  brightnessEnabled: boolean;
  custom: undefined;
  fill: string;
  fontFamily: string;
  fontSize: number;
  fontStyle: string;
  fontWeight: string;
  grayscaleEnabled: boolean;
  letterSpacing: number;
  lineHeight: number;
  placeholder: string;
  rotation: number;
  selectable: true;
  sepiaEnabled: boolean;
  shadowBlur: number;
  shadowColor: string;
  shadowEnabled: boolean;
  shadowOffsetX: number;
  shadowOffsetY: number;
  showInExport: true;
  stroke: string;
  strokeWidth: number;
  text: string;
  textDecoration: string;
  verticalAlign: string;
} & BaseElement;

export type IImage = {
  alwaysOnTop: boolean;
  blurEnabled: boolean;
  blurRadius: 10;
  borderColor: "black";
  borderSize: 0;
  brightness: 0;
  brightnessEnabled: boolean;
  clipSrc: "";
  cornerRadius: 0;
  cropHeight: 1;
  cropWidth: 1;
  cropX: 0;
  cropY: 0;
  custom: undefined;
  flipX: boolean;
  flipY: boolean;
  grayscaleEnabled: boolean;
  sepiaEnabled: boolean;
  shadowBlur: 5;
  shadowColor: "black";
  shadowEnabled: boolean;
  shadowOffsetX: 0;
  shadowOffsetY: 0;
  showInExport: true;
  src: string;
} & BaseElement;
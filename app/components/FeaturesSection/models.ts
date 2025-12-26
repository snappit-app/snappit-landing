export type featureId = "ocr" | "color-picker" | "screen-ruler" | "qr-scanner";

export interface Feature {
  title: string;
  id: featureId;
  description: string;
  icon: string;
  iconAlt: string;
  video: string;
}

export const features: Feature[] = [
  {
    title: "OCR",
    id: "ocr",
    description: "Extract text from any screen region",
    icon: "/copy.svg",
    iconAlt: "OCR icon",
    video: "/video/ocr-demo.mov",
  },
  {
    title: "Color Picker",
    id: "color-picker",
    description: "Pick colors in HEX, RGB, HSL, OKLCH",
    icon: "/color-dropper.svg",
    iconAlt: "Color picker icon",
    video: "/video/ocr-demo.mov",
  },
  {
    title: "Screen Ruler",
    id: "screen-ruler",
    description: "Measure pixels with precision",
    icon: "/ruler.svg",
    iconAlt: "Ruler icon",
    video: "/video/ocr-demo.mov",
  },
  {
    title: "QR Scanner",
    id: "qr-scanner",
    description: "Scan and decode QR codes instantly",
    icon: "/qr.svg",
    iconAlt: "QR code icon",
    video: "/video/ocr-demo.mov",
  },
  {
    title: "Shortcuts",
    id: "shortcuts",
    description: "Scan and decode QR codes instantly",
    icon: "/qr.svg",
    iconAlt: "QR code icon",
    video: "/video/ocr-demo.mov",
  },
];

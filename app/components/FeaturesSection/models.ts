export interface Feature {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  video: string;
}

export const features: Feature[] = [
  {
    title: "OCR",
    description: "Extract text from any screen region",
    icon: "/copy.svg",
    iconAlt: "OCR icon",
    video: "/video/ocr-demo.mov",
  },
  {
    title: "Color Picker",
    description: "Pick colors in HEX, RGB, HSL, OKLCH",
    icon: "/color-dropper.svg",
    iconAlt: "Color picker icon",
    video: "/video/ocr-demo.mov",
  },
  {
    title: "Screen Ruler",
    description: "Measure pixels with precision",
    icon: "/ruler.svg",
    iconAlt: "Ruler icon",
    video: "/video/ocr-demo.mov",
  },
  {
    title: "QR Scanner",
    description: "Scan and decode QR codes instantly",
    icon: "/qr.svg",
    iconAlt: "QR code icon",
    video: "/video/ocr-demo.mov",
  },
  {
    title: "Shortcuts",
    description: "Scan and decode QR codes instantly",
    icon: "/qr.svg",
    iconAlt: "QR code icon",
    video: "/video/ocr-demo.mov",
  },
];

import { Component } from '@angular/core';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  width = 600;
  height = 500;
  color1 = 'red';
  color2 = 'yellow';
  percentColor1 = 0;
  percentColor2 = 100;
  fontSize = 52;

  layout: LayoutData = {
    horizontal: false,
    horizontalRev: false,
    vertical: false,
    verticalRev: false,
  };

  colors = [
    'red',
    'purple',
    'blue',
    'green',
    'yellow',
    'brown',
    'grey',
    'black',
  ];

  getBannerStyles(): BackgroundData {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
      backgroundImage: `linear-gradient(to bottom, ${this.color1} ${this.percentColor1}%, ${this.color2} ${this.percentColor2}%)`,
    };
  }

  setLayout(selectedLayout: string): void {
    Object.keys(this.layout).forEach(key => (this.layout[key] = false));
    this.layout[selectedLayout] = true;
  }

  saveImage(element: HTMLDivElement): void {
    domtoimage.toBlob(element).then(blob => saveAs(blob));
  }

}

export interface BackgroundData {
  width: string;
  height: string;
  backgroundImage: string;
}

export interface LayoutData {
  [key: string]: boolean;
}


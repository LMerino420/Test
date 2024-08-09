import { Component } from '@angular/core';

@Component({
  selector: 'app-canvas-xy',
  templateUrl: './canvas-xy.page.html',
  styleUrls: ['./canvas-xy.page.scss'],
})
export class CanvasXyPage {
  axis_y: number = 0;
  axis_x: number = 0;

  constructor() {}

  ionViewWillEnter() {
    this.drawCanvas();
  }

  //* Funcion para dibujar rectangulo dentro de canvas
  drawCanvas() {
    const canvas = document.getElementById(
      'canvas-container'
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const hght = ctx.canvas.height;
    const mv_y = (this.axis_y / 100) * (hght - 10);

    const wdth = ctx.canvas.width;
    const mv_x = (this.axis_x / 100) * (wdth - 60);

    ctx.clearRect(0, 0, wdth, hght);
    ctx.fillStyle = 'red';
    ctx.fillRect(mv_x, mv_y, 60, 10);
  }
}

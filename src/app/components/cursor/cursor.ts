import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  templateUrl: './cursor.html',
  styleUrl: './cursor.css'
})
export class CustomCursorComponent {
  posX = signal(0);
  posY = signal(0);

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.posX.set(event.clientX);
    this.posY.set(event.clientY);
  }
}
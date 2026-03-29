import { Component, signal } from '@angular/core';
import { CustomCursorComponent } from './components/cursor/cursor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomCursorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('dondescu-frontend');
}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BtnComponent } from './shared/components/btn.component';
import { BtnSoftComponent } from './shared/components/btn-soft.component';
import { BtnGhostComponent } from './shared/components/btn-ghost.component';
import { CardComponent } from './shared/components/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    BtnComponent,
    BtnSoftComponent,
    BtnGhostComponent,
    CardComponent,
  ],
})
export class AppComponent {
  title = signal('My title primer no se que');

  onClickTest() {
    window.alert('Alert');
  }
}

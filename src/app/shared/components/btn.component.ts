import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Color, Padding } from 'src/app/interfaces/ui.interface';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  template: `
    <button
      type="button"
      matRipple
      matRippleColor="rgba(255, 255, 255, 0.3)"
      class="w-full px-3 inline-flex items-center justify-center font-medium tracking-wide transition duration-200  rounded-lg focus:outline-none"
      [ngClass]="colors"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  imports: [NgClass, MatRippleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnComponent {
  @Input()
  color: Color = 'primary';

  @Input()
  padding: Padding = 'sm';

  mapColors: Record<Color, Record<string, boolean>> = {
    primary: {
      'bg-primary-500': true,
      'hover:bg-primary-600': true,
      'text-white': true,
      'disabled:bg-primary-300': true,
    },
    secondary: {
      'bg-secondary-500': true,
      'hover:bg-secondary-600': true,
      'text-white': true,
      'disabled:bg-secondary-300': true,
    },
    success: {
      'bg-success-500': true,
      'hover:bg-success-600': true,
      'text-white': true,
      'disabled:bg-success-300': true,
    },
    danger: {
      'bg-danger-500': true,
      'hover:bg-danger-600': true,
      'text-white': true,
      'disabled:bg-danger-300': true,
    },
    ligth: {
      'bg-gray-500': true,
      'hover:bg-gray-600': true,
      'text-white': true,
      'disabled:bg-ligth-300': true,
    },
  };

  mapPadding: Record<Padding, Record<string, boolean>> = {
    sm: {
      'py-1.5': true,
    },
    md: {
      'py-2.5': true,
    },
    lg: {
      'py-3.5': true,
    },
    xl: {
      'py-4.5': true,
    },
  };

  get colors() {
    const colors = this.mapColors[this.color];
    const padding = this.mapPadding[this.padding];

    return { ...colors, ...padding };
  }
}

import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Color, Padding } from 'src/app/interfaces/ui.interface';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-btn-soft',
  standalone: true,
  template: `
    <button
      type="button"
      matRipple
      matRippleColor="rgba(255, 255, 255, 0.3)"
      class="px-3 w-full inline-flex justify-center items-center gap-2 rounded-md font-medium tracking-wide focus:outline-none transition-all"
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
export class BtnSoftComponent {
  @Input()
  color: Color = 'primary';

  @Input()
  padding: Padding = 'sm';

  mapColors: Record<Color, Record<string, boolean>> = {
    primary: {
      'bg-primary-100': true,
      'text-primary-500': true,
      'hover:text-white ': true,
      'hover:bg-primary-400': true,
    },
    secondary: {
      'bg-secondary-100': true,
      'text-secondary-500': true,
      'hover:text-white ': true,
      'hover:bg-secondary-400': true,
    },
    success: {
      'bg-success-100': true,
      'text-success-500': true,
      'hover:text-white ': true,
      'hover:bg-success-400': true,
    },
    danger: {
      'bg-danger-100': true,
      'text-danger-500': true,
      'hover:text-white ': true,
      'hover:bg-danger-400': true,
    },
    ligth: {
      'bg-gray-100': true,
      'text-gray-500': true,
      'hover:text-white ': true,
      'hover:bg-gray-400': true,
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

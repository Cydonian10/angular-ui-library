import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Color, Padding } from 'src/app/interfaces/ui.interface';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-btn-ghost',
  standalone: true,
  template: `
    <button
      type="button"
      matRipple
      matRippleColor="rgba(255, 255, 255, 0.3)"
      class="w-full inline-flex justify-center items-center gap-2 rounded-md b  outline-none transition-all"
      [ngClass]="colors"
    >
      <!--inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold focus:outline-none transition-all -->
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
export class BtnGhostComponent {
  @Input()
  color: Color = 'primary';

  @Input()
  padding: Padding = 'sm';

  mapColors: Record<Color, Record<string, boolean>> = {
    primary: {
      'hover:bg-primary-400': true,
      'hover:text-white': true,
    },
    secondary: {
      'hover:bg-secondary-400': true,
      'hover:text-white': true,
    },
    success: {
      'hover:bg-success-400': true,
      'hover:text-white': true,
    },
    danger: {
      'hover:bg-danger-400': true,
      'hover:text-white': true,
    },
    ligth: {
      'text-slate-700': true,
      'hover:bg-slate-200': true,
      'hover:text-slate-700': true,
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

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnSoftComponent } from './btn-soft.component';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="bg-white border  rounded-xl shadow-sm sm:flex ">
      <div
        class="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs"
      >
        <img
          class="w-full h-full absolute top-0 left-0 object-cover"
          src="assets/img1.jpg"
          alt="Image Description"
        />
      </div>

      <div class="flex flex-wrap">
        <div class="p-4 flex flex-col h-full sm:p-7">
          <ng-content></ng-content>
          <div class="mt-5 sm:mt-auto">
            <p class="text-xs text-gray-500">Last updated 5 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BtnSoftComponent],
})
export class CardComponent {}

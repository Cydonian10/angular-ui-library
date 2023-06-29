import { Component, signal } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BtnComponent } from '../shared/components/btn.component';
import { BtnGhostComponent } from '../shared/components/btn-ghost.component';

@Component({
  selector: 'app-dashboard-layout',
  template: `
    <mat-drawer-container
      class="w-full h-screen"
      [hasBackdrop]="
        currentScreenSize() === 'Large' || currentScreenSize() === 'XLarge'
          ? false
          : true
      "
    >
      <mat-drawer
        class="w-[270px] border-none shadow-md"
        #drawer
        [opened]="
          currentScreenSize() === 'Large' || currentScreenSize() === 'XLarge'
            ? true
            : false
        "
        [mode]="
          currentScreenSize() === 'Large' || currentScreenSize() === 'XLarge'
            ? 'side'
            : 'over'
        "
      >
        <div class="p-3">
          <app-btn-ghost color="ligth" padding="md">
            <div class="flex justify-start items-start w-full px-4">
              <span>Home</span>
            </div>
          </app-btn-ghost>
          <app-btn-ghost color="ligth" padding="md">
            <div class="flex justify-start items-start w-full px-4">
              <span>Productos</span>
            </div>
          </app-btn-ghost>
        </div>
      </mat-drawer>
      <mat-drawer-content>
        <header class="w-full h-14 flex items-center bg-primary-500 px-20">
          <app-btn-ghost
            class="w-20"
            mat-raised-button
            (click)="drawer.toggle()"
          >
            <span class="text-white"> cerrar </span>
          </app-btn-ghost>
        </header>

        {{ currentScreenSize() }}
        <ng-content></ng-content>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  standalone: true,
  imports: [
    RouterOutlet,
    OverlayModule,
    MatSidenavModule,
    MatButtonModule,
    BtnComponent,
    BtnGhostComponent,
  ],
})
export class DashboardLayout {
  public currentScreenSize = signal('');

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize.set(
              this.displayNameMap.get(query) ?? 'Unknown'
            );
          }
        }
      });
  }
}

import { NgModule } from '@angular/core';
import { MatButtonModule, 
        MatButtonToggleModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatBadgeModule, 
        MatProgressBarModule, 
        MatProgressSpinnerModule, 
        MatSidenavModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  FormsModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }

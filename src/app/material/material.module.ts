import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatToolbarModule } from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

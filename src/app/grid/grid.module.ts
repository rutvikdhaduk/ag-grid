import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { DataComponent } from './data/data.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    DataComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class GridModule { }

import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { UnusedComponent } from './unused.component';


@NgModule({
  declarations: [UnusedComponent],
  imports: [
    ChartsModule
  ],
  exports: [UnusedComponent]
})
export class UnusedModule { }

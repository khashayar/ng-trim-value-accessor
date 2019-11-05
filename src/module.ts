import { NgModule, ModuleWithProviders } from '@angular/core';
import { TrimValueAccessor } from './trim-value-accessor';

@NgModule({
  declarations: [ TrimValueAccessor ],
  exports: [ TrimValueAccessor ]
})
export class TrimValueAccessorModule { 
  public static forRoot(config): ModuleWithProviders {
    return {
      ngModule: TrimValueAccessorModule,
      providers: [
        { provide: 'config', useValue: config }
      ]
    }
  }
}

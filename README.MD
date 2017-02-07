# TrimValueAccessor for Angular

Angular's missing trim input functionality (equivalent of AngularJS `ng-trim`)

**Caveat:** It's a drop-in solution, meaning it applies to all input fields as soon as this module is used.

## Installation

To install this library, run:

```bash
$ npm install ng-trim-value-accessor --save
```

and then from your Angular `AppModule`:

```typescript
import { NgModule } from '@angular/core';
import { TrimValueAccessorModule } from 'ng-trim-value-accessor';

@NgModule({
  imports: [
    TrimValueAccessorModule
  ]
})
export class AppModule { }
```

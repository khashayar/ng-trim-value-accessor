# TrimValueAccessor for Angular

Angular's missing trim input functionality (equivalent of AngularJS `ng-trim`)

**Caveats:**

* It's a drop-in solution, meaning it applies to all input fields as soon as this module is used.
* It does not work with inputs that are already using another value accessor, since Angular only allows one value accessor per form control. This means it cannot be used with Angular Material inputs (the `matInput` directive uses a value accessor).

## Installation

To install this library, run:

```bash
$ npm install ng-trim-value-accessor --save
```

## Usage

In your Angular `AppModule`:

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

## Opt-out

By default, it ignores all `readonly` and `input[type="password]` fields. For example the following field remains untouched:

```html
<input class="form-control" name="startDate" [(ngModel)]="model.startDate" ngbDatepicker readonly>
```

However if you want to *explicitly opt-out*, give a field `ng-trim-ignore` css class:

```html
<input type="text" class="form-control ng-trim-ignore" name="firstName" [(ngModel)]="model.firstName">
```

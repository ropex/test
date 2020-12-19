import { NgModule } from '@angular/core';
import { ExampleNg6LibComponent } from './example-ng6-lib.component';
import { FooComponent } from './foo/foo.component';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ExampleNg6LibComponent, FooComponent],
  imports: [MatAutocompleteModule,
            MatFormFieldModule,
            ReactiveFormsModule,
            FormsModule,
            CommonModule,
            MatInputModule,
            MatIconModule
  ],
  exports: [ExampleNg6LibComponent, FooComponent]
})
export class ExampleNg6LibModule { }

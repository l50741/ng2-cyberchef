import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Ng2Webstorage } from 'ng2-webstorage';
import { DragulaModule } from 'ng2-dragula';
import { SplitPaneModule } from 'ng2-split-pane';

import { AppComponent } from './app.component';
import { OperationsComponent } from './operations/operations.component';
import { RecipeComponent } from './recipe/recipe.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationsComponent,
    RecipeComponent,
    InputComponent,
    OutputComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    FlexLayoutModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    Ng2Webstorage,
    SplitPaneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

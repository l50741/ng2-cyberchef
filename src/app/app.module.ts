import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Ng2Webstorage } from 'ng2-webstorage';
import { DragulaModule } from 'ng2-dragula';
import { SplitPaneModule } from 'ng2-split-pane/lib/ng2-split-pane';

import { AppComponent } from './app.component';
import { OperationsComponent, SearchPipe } from './operations/operations.component';
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
    ControlsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    SplitPaneModule,
    FlexLayoutModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    Ng2Webstorage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

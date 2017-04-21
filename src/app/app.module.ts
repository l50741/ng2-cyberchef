import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Ng2Webstorage } from 'ng2-webstorage';
import { DragulaModule } from 'ng2-dragula';
import { ConfigModule, ConfigLoader, ConfigStaticLoader } from 'ng2-config';

import { AppComponent } from './app.component';
import { OperationsComponent } from './operations/operations.component';
import { RecipeComponent } from './recipe/recipe.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { ControlsComponent } from './controls/controls.component';

export function configFactory() {
    return new ConfigStaticLoader('/config.json');
}

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
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: (configFactory)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

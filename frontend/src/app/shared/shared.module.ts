import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AutosizeModule} from 'ngx-autosize';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
	exports: [
		BrowserAnimationsModule,
		BrowserModule,
		CommonModule,
		FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
		MaterialModule,
    RouterModule,
    PipesModule,
    AutosizeModule,

	],
	declarations: [
  ]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
			providers: []
		};
	}
}

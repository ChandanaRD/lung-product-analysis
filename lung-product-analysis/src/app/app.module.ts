import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxTextEditorModule } from 'ngx-text-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoduleAnalysisComponent } from './components/nodule-analysis/nodule-analysis.component';
import { LowAttenuationAnalysisComponent } from './components/low-attenuation-analysis/low-attenuation-analysis.component';
import { HighAttenuationAnalysisComponent } from './components/high-attenuation-analysis/high-attenuation-analysis.component';
import { NoduleComponent } from './components/nodule/nodule.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NoduleAnalysisComponent,
    LowAttenuationAnalysisComponent,
    HighAttenuationAnalysisComponent,
    NoduleComponent,
    TextAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTextEditorModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoduleAnalysisComponent } from './components/nodule-analysis/nodule-analysis.component';
import { LowAttenuationAnalysisComponent } from './components/low-attenuation-analysis/low-attenuation-analysis.component';
import { HighAttenuationAnalysisComponent } from './components/high-attenuation-analysis/high-attenuation-analysis.component';
import { NoduleComponent } from './components/nodule/nodule.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NoduleAnalysisComponent,
    LowAttenuationAnalysisComponent,
    HighAttenuationAnalysisComponent,
    NoduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

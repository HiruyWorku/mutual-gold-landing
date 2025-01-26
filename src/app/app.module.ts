import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { LucideAngularModule, Calculator, ChartLine, DollarSign, ChartBar, ChartPie } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    LucideAngularModule.pick({ Calculator, ChartLine, DollarSign, ChartBar, ChartPie })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
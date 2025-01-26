import { Component } from '@angular/core';
import { Calculator, ChartLine, DollarSign } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  template: `
    <div class="relative overflow-hidden bg-gs-dark text-white py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div class="lg:w-1/2 animate-fade-up">
            <h1 class="text-4xl lg:text-6xl font-bold mb-6">
              Smart Mutual Fund Calculator
            </h1>
            <p class="text-lg lg:text-xl text-gs-light mb-8">
              Make informed investment decisions with our professional-grade mutual fund calculator. Powered by Goldman Sachs expertise.
            </p>
            <button class="bg-gs-purple hover:bg-gs-light hover:text-gs-dark transition-colors px-6 py-3 rounded-lg flex items-center">
              Start Calculating
              <lucide-calculator class="ml-2 h-5 w-5"></lucide-calculator>
            </button>
          </div>
          <div class="lg:w-1/2 flex justify-center items-center gap-6 animate-fade-up">
            <lucide-chart-line class="h-24 w-24 text-gs-light"></lucide-chart-line>
            <lucide-dollar-sign class="h-16 w-16 text-gs-purple"></lucide-dollar-sign>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HeroComponent {}
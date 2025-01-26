import { Component } from '@angular/core';
import { ChartBar, ChartPie, DollarSign } from 'lucide-angular';

@Component({
  selector: 'app-features',
  template: `
    <div class="bg-white py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl lg:text-4xl font-bold text-gs-dark text-center mb-12">
          Why Choose Our Calculator
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div *ngFor="let feature of features; let i = index"
               class="p-6 rounded-lg border border-gs-light hover:shadow-lg transition-shadow animate-fade-up"
               [style.animation-delay]="i * 100 + 'ms'">
            <div class="mb-4" [ngSwitch]="feature.icon">
              <lucide-chart-bar *ngSwitchCase="'ChartBar'" class="h-12 w-12 text-gs-purple"></lucide-chart-bar>
              <lucide-dollar-sign *ngSwitchCase="'DollarSign'" class="h-12 w-12 text-gs-purple"></lucide-dollar-sign>
              <lucide-chart-pie *ngSwitchCase="'ChartPie'" class="h-12 w-12 text-gs-purple"></lucide-chart-pie>
            </div>
            <h3 class="text-xl font-bold text-gs-dark mb-2">{{feature.title}}</h3>
            <p class="text-gs-neutral">{{feature.description}}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FeaturesComponent {
  features = [
    {
      icon: 'ChartBar',
      title: 'Performance Analysis',
      description: 'Track and analyze fund performance with professional-grade tools'
    },
    {
      icon: 'DollarSign',
      title: 'Return Calculator',
      description: 'Calculate potential returns based on historical data'
    },
    {
      icon: 'ChartPie',
      title: 'Portfolio Allocation',
      description: 'Optimize your portfolio with smart allocation suggestions'
    }
  ];
}
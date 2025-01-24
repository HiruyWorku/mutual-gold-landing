import { Calculator, ChartLine, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gs-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Smart Mutual Fund Calculator
            </h1>
            <p className="text-lg lg:text-xl text-gs-light mb-8">
              Make informed investment decisions with our professional-grade mutual fund calculator. Powered by Goldman Sachs expertise.
            </p>
            <Button
              size="lg"
              className="bg-gs-purple hover:bg-gs-light hover:text-gs-dark transition-colors"
            >
              Start Calculating
              <Calculator className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center gap-6 animate-fade-up">
            <ChartLine className="h-24 w-24 text-gs-light" />
            <DollarSign className="h-16 w-16 text-gs-purple" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
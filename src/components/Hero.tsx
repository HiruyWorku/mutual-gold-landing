import { Calculator, ChartLine, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gs-dark text-gs-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Mutual Fund Calculator
            </h1>
            <p className="text-lg lg:text-xl text-gs-white mb-8">
              Powered by Goldman Sachs Emerging Leaders
            </p>
            <Button
              size="lg"
              className="bg-gs-blue hover:bg-gs-blue/90 text-gs-white transition-colors"
              onClick={() => navigate('/calculator')}
            >
              Start Calculating
              <Calculator className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center gap-6 animate-fade-up">
            <ChartLine className="h-24 w-24 text-gs-white" />
            <DollarSign className="h-16 w-16 text-gs-blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
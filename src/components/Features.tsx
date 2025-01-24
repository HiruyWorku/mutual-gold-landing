import { ChartBar, ChartPie, DollarSign } from "lucide-react";

const features = [
  {
    icon: <ChartBar className="h-12 w-12 text-gs-purple" />,
    title: "Performance Analysis",
    description: "Track and analyze fund performance with professional-grade tools",
  },
  {
    icon: <DollarSign className="h-12 w-12 text-gs-purple" />,
    title: "Return Calculator",
    description: "Calculate potential returns based on historical data",
  },
  {
    icon: <ChartPie className="h-12 w-12 text-gs-purple" />,
    title: "Portfolio Allocation",
    description: "Optimize your portfolio with smart allocation suggestions",
  },
];

const Features = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gs-dark text-center mb-12">
          Why Choose Our Calculator
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gs-light hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gs-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gs-neutral">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
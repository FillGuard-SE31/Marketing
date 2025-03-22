
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              The Future of Waste Management
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Transform your waste collection with real-time monitoring, automated alerts, and data-driven insights.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="gap-1">
              Get Our Iot device <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
          <div className="relative w-full max-w-3xl overflow-hidden rounded-lg border border-gray-200 shadow-xl dark:border-gray-800">
            <div className="bg-white dark:bg-gray-950 p-6 md:p-10">
              <div className="aspect-[16/9] bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 rounded-md flex items-center justify-center">
                <img src="/com"></img>
                <div className="text-center space-y-2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

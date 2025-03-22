
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTASection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-primary/5 dark:bg-primary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Waste Management?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Join the growing network of smart cities and businesses optimizing their waste collection.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Enter your email"
                type="email"
                required
              />
              <Button type="submit" className="gap-1">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              We'll never share your email. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

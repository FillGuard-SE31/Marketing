
import { Separator } from "@/components/ui/separator";

const SpecsSection = () => {
  const specifications = [
    { name: "Dimensions", value: "350mm x 250mm x 150mm" },
    { name: "Weight", value: "250g" },
    { name: "Power Mode", value: "Battery" },
    { name: "Connectivity", value: " WiFi" },
    { name: "Sensors", value: "Ultrasonic, Temperature, Humidity, GPS" },
    { name: "Data Transmission", value: "Real-time Operating" },
    { name: "Operating Temperature", value: "38°C" },
    { name: "Water Resistance", value: "IP67 rated (waterproof)" },
    { name: "Material", value: "Recycled polymer composite" },
    { name: "Installation", value: "Tool-free mounting system" },
  ];

  return (
    <section id="specs" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Specifications
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Technical Details
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Advanced technology packed into a durable, efficient package
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="p-6">
              {specifications.map((spec, index) => (
                <div key={index}>
                  <div className="flex justify-between py-4">
                    <span className="font-medium">{spec.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{spec.value}</span>
                  </div>
                  {index < specifications.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;

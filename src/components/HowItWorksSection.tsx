// import { Check } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// const HowItWorksSection = () => {
//   const steps = [
//     {
//       number: "01",
//       title: "Sensor Data Collection",
//       description: "The IoT device collects real-time data from ultrasonic, temperature, humidity, and GPS sensors.",
//     },
//     {
//       number: "02",
//       title: "Data Transmission & Processing",
//       description: "Sensor data is sent via MQTT to the Node.js backend, which validates and stores it in a MongoDB database.",
//     },
//     {
//       number: "03",
//       title: "Real-Time Updates & Visualization",
//       description: "The backend pushes updates to the React.js frontend via WebSockets for live monitoring and analysis.",
//     },
//     {
//       number: "04",
//       title: "Alerts & Reports Generation",
//       description: "Users receive alerts on waste levels, access historical reports, and download summaries for better planning.",
//     },
//   ];

//   return (
//     <section id="how-it-works" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
//       <div className="container px-4 md:px-6">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
//               How It Works
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//               Efficient Monitoring & Management
//             </h2>
//             <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//               Understand the smart waste management system in four simple steps.
//             </p>
//           </div>
//         </div>
//         <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
//           {steps.map((step, index) => (
//             <Card key={index} className="relative overflow-hidden border-none bg-gradient-to-b from-gray-50 to-white shadow-md dark:from-gray-900 dark:to-gray-800">
//               <div className="absolute top-0 right-0 p-3">
//                 <span className="text-4xl font-bold text-gray-200 dark:text-gray-700">{step.number}</span>
//               </div>
//               <CardContent className="p-6">
//                 <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
//                   <Check className="h-5 w-5 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold">{step.title}</h3>
//                 <p className="text-gray-500 dark:text-gray-400 mt-2">{step.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorksSection;

import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Sensor Data Collection",
      description: "The IoT device collects real-time data from ultrasonic, temperature, humidity, and GPS sensors.",
    },
    {
      number: "02",
      title: "Data Transmission & Processing",
      description: "Sensor data is sent via MQTT to the Node.js backend, which validates and stores it in a MongoDB database.",
    },
    {
      number: "03",
      title: "Real-Time Updates & Visualization",
      description: "The backend pushes updates to the React.js frontend via WebSockets for live monitoring and analysis.",
    },
    {
      number: "04",
      title: "Alerts & Reports Generation",
      description: "Users receive alerts on waste levels, access historical reports, and download summaries for better planning.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Efficient Monitoring & Management
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Understand the smart waste management system in four simple steps.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-none bg-gradient-to-b from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-3">
                <span className="text-4xl font-bold text-green-300 dark:text-green-700">{step.number}</span>
              </div>
              <CardContent className="p-6">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-300/30 dark:bg-green-700/30">
                  <Check className="h-5 w-5 text-green-700 dark:text-green-300" />
                </div>
                <h3 className="text-xl font-bold text-green-800 dark:text-green-200">{step.title}</h3>
                <p className="text-green-700 dark:text-green-300 mt-2">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

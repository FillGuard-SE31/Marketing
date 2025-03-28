
// import { Cpu, Cloud, Map, Wifi, Activity, Settings, CirclePlusIcon } from "lucide-react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// const FeaturesSection = () => {
//   const features = [
//     {
//       icon: <Activity className="h-10 w-10 mb-3 text-primary" />,
//       title: "Real-Time Monitoring",
//       description: "Track fill levels, temperature, and usage patterns instantly from your dashboard.",
//     },
//     {
//       icon: <Cloud className="h-10 w-10 mb-3 text-primary" />,
//       title: "Cloud Integration",
//       description: "All data securely stored and processed in the cloud for easy access anywhere.",
//     },
//     {
//       icon: <Map className="h-10 w-10 mb-3 text-primary" />,
//       title: "Location Tracking",
//       description: "GPS enabled to monitor bin positions and optimize collection routes.",
//     },
//     {
//       icon: <Wifi className="h-10 w-10 mb-3 text-primary" />,
//       title: "Wireless Connectivity",
//       description: "Seamless connectivity via WiFi for uninterrupted service.",
//     },
//     {
//       icon: <Cpu className="h-10 w-10 mb-3 text-primary" />,
//       title: "Predictive Maintenance",
//       description: "Predicts when bins need to be emptied using machine learning.",
//     },
//     {
//       icon: <Settings className="h-10 w-10 mb-3 text-primary" />,
//       title: "Customizable Alerts",
//       description: "Set custom thresholds and receive notifications when bins need attention.",
//     },
//   ];

//   return (
//     <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-950">
//       <div className="container px-4 md:px-6 ">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
//               Features
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//               Smart Technology for Smarter Waste Management
//             </h2>
//             <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//               Our IoT sensor bins come packed with advanced features to revolutionize waste collection
//             </p>
//           </div>
//         </div>
//         <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
//           {features.map((feature, index) => (
//             <Card key={index} className="h-full">
//               <CardHeader className="pb-2">
//                 {feature.icon}
//                 <CardTitle>{feature.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-base">{feature.description}</CardDescription>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;


import { Cpu, Cloud, Map, Wifi, Activity, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Activity className="h-10 w-10 mb-3 text-white" />,
      title: "Real-Time Monitoring",
      description: "Track fill levels, temperature, and usage patterns instantly from your dashboard.",
      bgColor: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
    {
      icon: <Cloud className="h-10 w-10 mb-3 text-white" />,
      title: "Cloud Integration",
      description: "All data securely stored and processed in the cloud for easy access anywhere.",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: <Map className="h-10 w-10 mb-3 text-white" />,
      title: "Location Tracking",
      description: "GPS enabled to monitor bin positions and optimize collection routes.",
      bgColor: "bg-gradient-to-br from-green-500 to-teal-600",
    },
    {
      icon: <Wifi className="h-10 w-10 mb-3 text-white" />,
      title: "Wireless Connectivity",
      description: "Seamless connectivity via WiFi for uninterrupted service.",
      bgColor: "bg-gradient-to-br from-yellow-500 to-orange-600",
    },
    {
      icon: <Cpu className="h-10 w-10 mb-3 text-white" />,
      title: "Predictive Maintenance",
      description: "Predicts when bins need to be emptied using machine learning.",
      bgColor: "bg-gradient-to-br from-red-500 to-pink-600",
    },
    {
      icon: <Settings className="h-10 w-10 mb-3 text-white" />,
      title: "Customizable Alerts",
      description: "Set custom thresholds and receive notifications when bins need attention.",
      bgColor: "bg-gradient-to-br from-gray-700 to-gray-900",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Smart Technology for Smarter Waste Management
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Our IoT sensor bins come packed with advanced features to revolutionize waste collection.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`h-full p-6 rounded-xl text-white shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl ${feature.bgColor}`}
            >
              <CardHeader className="pb-2 flex flex-col items-start">
                <div className="p-3 rounded-lg bg-white/20">{feature.icon}</div>
                <CardTitle className="mt-3 text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/90">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

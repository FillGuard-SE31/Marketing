
// import { Separator } from "@/components/ui/separator";

// const SpecsSection = () => {
//   const specifications = [
//     { name: "Dimensions", value: "350mm x 250mm x 150mm" },
//     { name: "Weight", value: "250g" },
//     { name: "Power Mode", value: "Battery" },
//     { name: "Connectivity", value: " WiFi" },
//     { name: "Sensors", value: "Ultrasonic, Temperature, Humidity, GPS" },
//     { name: "Data Transmission", value: "Real-time Operating" },
//     { name: "Operating Temperature", value: "38°C" },
//     { name: "Water Resistance", value: "IP67 rated (waterproof)" },
//     { name: "Material", value: "Recycled polymer composite" },
//     { name: "Installation", value: "Tool-free mounting system" },
//   ];

//   return (
//     <section id="specs" className="py-16 md:py-24 bg-white dark:bg-gray-950">
//       <div className="container px-4 md:px-6">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
//               Specifications
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//               Technical Details
//             </h2>
//             <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//               Advanced technology packed into a durable, efficient package
//             </p>
//           </div>
//         </div>
//         <div className="mx-auto max-w-3xl mt-12">
//           <div className="rounded-lg border bg-card shadow-sm">
//             <div className="p-6">
//               {specifications.map((spec, index) => (
//                 <div key={index}>
//                   <div className="flex justify-between py-4">
//                     <span className="font-medium">{spec.name}</span>
//                     <span className="text-gray-500 dark:text-gray-400">{spec.value}</span>
//                   </div>
//                   {index < specifications.length - 1 && <Separator />}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecsSection;


// import { Separator } from "@/components/ui/separator";

// const SpecsSection = () => {
//   const specifications = [
//     { name: "Dimensions", value: "350mm x 250mm x 150mm" },
//     { name: "Weight", value: "250g" },
//     { name: "Power Mode", value: "Battery" },
//     { name: "Connectivity", value: "WiFi" },
//     { name: "Sensors", value: "Ultrasonic, Temperature, Humidity, GPS" },
//     { name: "Data Transmission", value: "Real-time Operating" },
//     { name: "Operating Temperature", value: "38°C" },
//     { name: "Water Resistance", value: "IP67 rated (waterproof)" },
//     { name: "Material", value: "Recycled polymer composite" },
//     { name: "Installation", value: "Tool-free mounting system" },
//   ];

//   return (
//     <section id="specs" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black">
//       <div className="container px-4 md:px-6">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-gray-100 dark:bg-gray-600 dark:text-gray-200">
//               Specifications
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-100 dark:text-gray-300">
//               Technical Details
//             </h2>
//             <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
//               Advanced technology packed into a durable, efficient package
//             </p>
//           </div>
//         </div>
//         <div className="mx-auto max-w-3xl mt-12">
//           <div className="rounded-lg border bg-gray-800 dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <div className="p-6">
//               {specifications.map((spec, index) => (
//                 <div key={index}>
//                   <div className="flex justify-between py-4 hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 rounded-md">
//                     <span className="font-medium text-gray-100 dark:text-gray-200">{spec.name}</span>
//                     <span className="text-gray-500 dark:text-gray-400">{spec.value}</span>
//                   </div>
//                   {index < specifications.length - 1 && <Separator />}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecsSection;



// import { useState, useEffect } from "react";
// import { Separator } from "@/components/ui/separator";

// const SpecsSection = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   const images = [
//     "src/components/IoTimg1.png",
//     "src/components/IoTimg2.png",
//     "src/components/IoTimg3.png"
//   ];

//   const specifications = [
//     { name: "Dimensions", value: "350mm x 250mm x 150mm" },
//     { name: "Weight", value: "250g" },
//     { name: "Power Mode", value: "Battery" },
//     { name: "Connectivity", value: "WiFi" },
//     { name: "Sensors", value: "Ultrasonic, Temperature, Humidity, GPS" },
//     { name: "Data Transmission", value: "Real-time Operating" },
//     { name: "Operating Temperature", value: "38°C" },
//     { name: "Water Resistance", value: "IP67 rated (waterproof)" },
//     { name: "Material", value: "Recycled polymer composite" },
//     { name: "Installation", value: "Tool-free mounting system" },
//   ];

//   // Automatically change image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 3000); // 3-second interval for image change

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, []);

//   return (
//     <section id="specs" className="py-16 md:py-24 bg-gray-800 dark:bg-gray-900">
//       <div className="container px-4 md:px-6 flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-12">
        
//         {/* Left Side: Specifications */}
//         <div className="flex flex-col items-center justify-center text-center lg:w-1/2">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-gray-600 px-3 py-1 text-sm text-gray-100 dark:bg-gray-500 dark:text-gray-200">
//               Specifications
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-100 dark:text-gray-300">
//               Technical Details
//             </h2>
//             <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
//               Advanced technology packed into a durable, efficient package
//             </p>
//           </div>

//           <div className="mx-auto max-w-3xl mt-12">
//             <div className="rounded-lg border bg-gray-700 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="p-6">
//                 {specifications.map((spec, index) => (
//                   <div key={index}>
//                     <div className="flex justify-between py-4 hover:bg-gray-600 dark:hover:bg-gray-700 transition-all duration-300 rounded-md">
//                       <span className="font-medium text-gray-100 dark:text-gray-200">{spec.name}</span>
//                       <span className="text-gray-500 dark:text-gray-400">{spec.value}</span>
//                     </div>
//                     {index < specifications.length - 1 && <Separator />}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Image Slideshow */}
//         <div className="lg:w-1/2">
//           <div className="relative w-full h-[300px] sm:h-[400px]">
//             <img
//               src={images[currentImage]}
//               alt={`IoT device ${currentImage + 1}`}
//               className="w-full h-full object-cover object-center transition-opacity duration-1000"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecsSection;


import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";

const SpecsSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "src/components/IoTimg1.png",
    "src/components/IoTimg2.png",
    "src/components/IoTimg3.png"
  ];

  const specifications = [
    { name: "Dimensions :", value: "350mm x 250mm x 150mm" },
    { name: "Weight :", value: "250g" },
    { name: "Power Mode :", value: "Battery" },
    { name: "Connectivity :", value: "WiFi" },
    { name: "Sensors :", value: "Ultrasonic, Temp/Hum, GPS" },
    { name: "Data Transmission :", value: "Real-time Operating" },
    { name: "Operating Temperature :", value: "38°C" },
    { name: "Material :", value: "Recycled polymer composite" },
    { name: "Installation :", value: "Tool-free mounting system" },
  ];

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // 3-second interval for image change

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <section id="specs" className="py-16 md:py-24 bg-gray-800 dark:bg-gray-900">
      <div className="container px-4 md:px-6 flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-12">
        
        {/* Left Side: Specifications */}
        <div className="flex flex-col items-center justify-center text-center lg:w-1/2 max-w-xl">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-600 px-3 py-1 text-sm text-gray-100 dark:bg-gray-500 dark:text-gray-200">
              Specifications
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-100 dark:text-gray-300">
              Technical Details
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Advanced technology packed into a durable, efficient package
            </p>
          </div>

          <div className="mx-auto max-w-3xl mt-12">
            <div className="rounded-lg border bg-gray-700 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                {specifications.map((spec, index) => (
                  <div key={index}>
                    <div className="flex justify-between py-4 hover:bg-gray-600 dark:hover:bg-gray-700 transition-all duration-300 rounded-md">
                      <span className="font-medium text-gray-100 dark:text-gray-200">{spec.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{spec.value}</span>
                    </div>
                    {index < specifications.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image Slideshow */}
        <div className="lg:w-1/2 w-full h-[500px] sm:h-[600px]">
          <div className="relative w-full h-full">
            <img
              src={images[currentImage]}
              alt={`IoT device ${currentImage + 1}`}
              className="w-full h-full object-cover object-center transition-opacity duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;

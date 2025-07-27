// app/page.tsx or pages/index.tsx (depending on your setup)
import Card from "@/components/shared/Card";
import Header from "@/components/shared/Header";
import Image from "next/image";
import {CalendarDays} from "lucide-react";

export default function Home() {
  return (
    <>
  
      <main className="wrapper">
        

                {/* Top Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
                    <p className="mt-2 text-gray-600">
                      Discover &amp; book tickets for amazing events
                    </p>
                  </div>

                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CalendarDays/>
                      <span className="font-medium"> 2 Upcoming Events</span>
                    </div>
                  </div>
                </div>

  
      <Card />
   
      </main>

    </>
  );
}

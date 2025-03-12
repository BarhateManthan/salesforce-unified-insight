
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SalesforceReport from "@/components/SalesforceReport";

const Index = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Salesforce Report Generator</h1>
        <p className="text-xl text-gray-600 mb-8">Click the button below to generate a Salesforce report</p>
        
        <Button 
          onClick={() => setShowPdf(!showPdf)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {showPdf ? "Hide Report" : "Generate Report"}
        </Button>
      </div>

      {showPdf && (
        <div className="mt-8 w-full max-w-7xl bg-white rounded-lg shadow-xl p-2">
          <SalesforceReport />
        </div>
      )}
    </div>
  );
};

export default Index;

import React, { useEffect } from "react";
import { supabase } from "./supabase.js"; // make sure this file exists
import Header from "./components/Header";
import ComingSoon from "./components/footer";

function App() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from("test_table").select("*");
      console.log("Data:", data);
      console.log("Error:", error);
    }

    testConnection();
  }, []);

  return (
    <>
      <div className="w-full overflow-x-hidden min-h-screen">
        <Header />
        <ComingSoon />
      </div>
    </>
  );
}

export default App;

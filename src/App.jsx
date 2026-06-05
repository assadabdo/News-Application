import { useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar";

import { Footer } from "./Components/Footer";
import { Results } from "./Components/Results";

function App() {
  return (
    <div className="bg-gray-800 transition-colors min-h-screen">
      <Navbar />

      <Footer />
    </div>
  );
}

export default App;

import NavBar from "./components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import DatasetPage from "./pages/DatasetPage";
import GetPrediction from "./pages/GetPrediction";
import AboutMe from "./pages/AboutMe";
import ModelInfo from "./pages/ModelInfo";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-6">
      <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl overflow-hidden">
        <NavBar />

        <div className="p-5">
          <Routes>
            <Route path="/" element={<Navigate to="/dataset_info" />} />

            <Route path="/dataset_info" element={<DatasetPage />} />
            <Route path="/get_prediction" element={<GetPrediction />} />
            <Route path="/model_info" element={<ModelInfo />} />
            <Route path="/about_me" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

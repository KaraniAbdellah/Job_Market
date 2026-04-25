import NavBar from "./components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import DatasetPage from "./pages/DatasetPage";
import GetPrediction from "./pages/GetPrediction";
import AboutMe from "./pages/AboutMe";
import ModelInfo from "./pages/ModelInfo";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-6 px-4">
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
          <footer className="border-gray-200 pt-6 text-center text-sm text-gray-600">
            <p>
              Thanks For Your Contribution! Check{" "}
              <a
                href="https://github.com/KaraniAbdellah/Job_Market"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                GitHub
              </a>
            </p>
          </footer>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;

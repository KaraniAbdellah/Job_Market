import { useState, type ChangeEvent } from "react";
import {
  occupation,
  city,
  country,
  field,
  employment_type,
  education_level,
  gender,
  company_size,
} from "../constants/data.ts";
import { usePredict } from "../hooks/usePredict.tsx";

const GetPrediction = () => {
  const predict = usePredict();
  const [form, setForm] = useState({
    country: "",
    city: "",
    occupation: "",
    field: "",
    years_of_experience: "",
    employment_type: "",
    education_level: "",
    gender: "",
    company_size: "",
  });

  const [result, setResult] = useState<number>(0);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePredict = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    const result = await predict.sendRequest(form);
    console.log(result.prediction[0]);
    const y_pred: number = Math.ceil(result.prediction[0]);
    setResult(y_pred);
  };

  const renderSelect = (name: string, label: string, options: string[]) => (
    <div className="mb-4">
      <label className="text-sm font-medium text-gray-700 block mb-2">
        {label}
      </label>
      <select
        name={name}
        value={form[name as keyof typeof form]}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        <option value="">Select {label}</option>
        {options.map((opt: string, i: number) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen  p-2">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <form
            onSubmit={handlePredict}
            className="bg-white rounded-2xl shadow-lg p-4"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Your Information
            </h2>

            {renderSelect("country", "Country", country)}
            {renderSelect("city", "City", city)}
            {renderSelect("occupation", "Occupation", occupation)}
            {renderSelect("field", "Field", field)}
            {renderSelect(
              "employment_type",
              "Employment Type",
              employment_type,
            )}
            {renderSelect(
              "education_level",
              "Education Level",
              education_level,
            )}
            {renderSelect("gender", "Gender", gender)}
            {renderSelect("company_size", "Company Size", company_size)}

            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Years of Experience
              </label>
              <input
                type="number"
                name="years_of_experience"
                value={form.years_of_experience}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="e.g. 5"
              />
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-lg text-base font-semibold transition-all duration-200 transform hover:scale-105">
              Predict Salary
            </button>
          </form>

          {/* Result */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
            <p className="text-sm font-medium text-gray-600 mb-4 text-center">
              Predicted Salary
            </p>
            <p className="text-5xl font-bold text-purple-700 mb-8 text-center">
              {result} Dollar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPrediction;

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
import { toast } from "react-toastify";

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
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // remove error when user fixes field
    setErrors((prev) => prev.filter((err) => err !== e.target.name));
  };

  // ✅ Validation
  const validateForm = () => {
    const requiredFields = [
      "country",
      "city",
      "occupation",
      "field",
      "years_of_experience",
      "employment_type",
      "education_level",
      "gender",
      "company_size",
    ];

    const missing = requiredFields.filter(
      (field) => !form[field as keyof typeof form]
    );

    setErrors(missing);
    return missing;
  };

  const handlePredict = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const missingFields = validateForm();

    if (missingFields.length > 0) {
      toast.error("Please fill all required fields");
      return;
    }

    // extra check for experience
    if (Number(form.years_of_experience) < 0) {
      toast.error("Years of experience must be positive");
      return;
    }

    try {
      setLoading(true);

      const result = await predict.sendRequest(form);

      if (!result || !result.prediction || !result.prediction[0]) {
        toast.error("Prediction failed. Please try again.");
        return;
      }

      const y_pred: number = Math.ceil(result.prediction[0]);
      setResult(y_pred);

      toast.success("Prediction generated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Server error: could not get prediction.");
    } finally {
      setLoading(false);
    }
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
        className={`w-full rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500
          ${errors.includes(name) ? "border-red-500 border" : "border-gray-300 border"}
        `}
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
    <div className="min-h-screen p-2">
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
              employment_type
            )}
            {renderSelect(
              "education_level",
              "Education Level",
              education_level
            )}
            {renderSelect("gender", "Gender", gender)}
            {renderSelect("company_size", "Company Size", company_size)}

            {/* Experience */}
            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Years of Experience
              </label>
              <input
                type="number"
                name="years_of_experience"
                value={form.years_of_experience}
                onChange={handleChange}
                className={`w-full rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500
                  ${
                    errors.includes("years_of_experience")
                      ? "border-red-500 border"
                      : "border-gray-300 border"
                  }
                `}
                placeholder="e.g. 5"
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50"
            >
              {loading ? "Predicting..." : "Predict Salary"}
            </button>
          </form>

          {/* Result */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
            <p className="text-sm font-medium text-gray-600 mb-4 text-center">
              Predicted Salary
            </p>
            <p className="text-5xl font-bold text-purple-700 mb-8 text-center">
              {result ? `${result} Dollar` : "--"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPrediction;
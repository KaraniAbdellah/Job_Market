const ModelInfo = () => {
  const features = [
    { name: "Years of Experience", value: 0.2288 },
    { name: "Education Level", value: 0.1139 },
    { name: "Company Size", value: 0.1029 },
    { name: "Country (US)", value: 0.0617 },
    { name: "Field (Technology)", value: 0.0564 },
    { name: "City (Bangalore)", value: 0.0454 },
  ];

  return (
    <div>
      <h2 className="text-sm font-medium text-gray-900 mb-1">
        Model information
      </h2>

      <p className="text-xs text-gray-500 mb-4">
        Algorithm details and performance metrics
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400">Algorithm</p>
          <p className="text-sm font-medium text-gray-900">Random Forest</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400">Accuracy</p>
          <p className="text-sm font-medium text-gray-900">80%</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-2">Model Parameters</p>

          <div className="space-y-1 text-sm text-gray-900 font-medium">
            <p>Estimators: 100 trees</p>
            <p>Max Depth: 20</p>
            <p>Max Samples: 0.9</p>
            <p>Max Leaf Nodes: 200</p>
            <p>OOB Score: True</p>
            <p>Random State: 42</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400">Library</p>
          <p className="text-sm font-medium text-gray-900">scikit-learn</p>
        </div>
      </div>

      <h3 className="text-sm font-medium text-gray-900 mb-3">
        Feature importance
      </h3>

      {features.map((f, i) => {
        const percent = (f.value * 100).toFixed(1);

        return (
          <div key={i} className="flex items-center gap-2 mb-3">
            <div className="w-28 text-xs text-gray-500">{f.name}</div>

            <div className="flex-1 bg-gray-100 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full"
                style={{ width: `${percent}%` }}
              ></div>
            </div>

            <div className="text-xs text-gray-400 w-10 text-right">
              {percent}%
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ModelInfo;

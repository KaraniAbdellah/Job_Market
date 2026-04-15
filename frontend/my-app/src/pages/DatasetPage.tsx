import {dataset_example} from "../constants/data";

const DatasetPage = () => {
    const features = ["City", "Occupation", "Field", "Experience", "Type", "Education", "Gender", "Company", "Year", "Month"];
    const target = "Salary";

    return (
        <div>
            <h2 className="text-sm font-medium text-gray-900 mb-1">
                Dataset overview
            </h2>
            <p className="text-xs text-gray-500 mb-4">Sample of dataset (10 rows)</p>

            {/* Dataset Statistics */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-xs text-gray-600">Number of Samples</p>
                    <p className="text-lg font-semibold text-gray-900">{"+500K"}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-xs text-gray-600">Number of Features</p>
                    <p className="text-lg font-semibold text-gray-900">{features.length}</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-xs text-gray-600">Target Variable</p>
                    <p className="text-lg font-semibold text-gray-900">{target}</p>
                </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-xs">
                    <thead className="bg-gray-50 text-gray-500">
                        <tr>
                            <th className="px-3 py-2 text-left">Index</th>
                            <th className="px-3 py-2 text-left">City</th>
                            <th className="px-3 py-2 text-left">Occupation</th>
                            <th className="px-3 py-2 text-left">Field</th>
                            <th className="px-3 py-2 text-left">Experience</th>
                            <th className="px-3 py-2 text-left">Salary</th>
                            <th className="px-3 py-2 text-left">Type</th>
                            <th className="px-3 py-2 text-left">Education</th>
                            <th className="px-3 py-2 text-left">Gender</th>
                            <th className="px-3 py-2 text-left">Company</th>
                            <th className="px-3 py-2 text-left">Year</th>
                            <th className="px-3 py-2 text-left">Month</th>
                        </tr>
                    </thead>

                    <tbody>
                        {dataset_example.map((item, index) => (
                            <tr key={index} className="border-t">
                                <td className="px-3 py-2">{item.index}</td>
                                <td className="px-3 py-2">{item.city}</td>
                                <td className="px-3 py-2">{item.occupation}</td>
                                <td className="px-3 py-2">{item.field}</td>
                                <td className="px-3 py-2">{item.years}</td>
                                <td className="px-3 py-2">${item.salary}</td>
                                <td className="px-3 py-2">{item.type}</td>
                                <td className="px-3 py-2">{item.education}</td>
                                <td className="px-3 py-2">{item.gender}</td>
                                <td className="px-3 py-2">{item.size}</td>
                                <td className="px-3 py-2">{item.year}</td>
                                <td className="px-3 py-2">{item.month}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DatasetPage;

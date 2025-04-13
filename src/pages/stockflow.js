import React, { useState, useEffect } from "react";

const StockFlow = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("inventoryData");
    return savedData ? JSON.parse(savedData) : Array.from({ length: 60 }, (_, i) => ({
      day: `Day ${i + 1}`,
      stockAdded: "",
      stockRemoved: "",
      totalStock: i === 0 ? 0 : null,
    }));
  });

  useEffect(() => {
    localStorage.setItem("inventoryData", JSON.stringify(data));
  }, [data]);

  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;

    if (field !== "totalStock") {
      newData[index].totalStock =
        (parseInt(newData[index - 1]?.totalStock || 0, 10) || 0) +
        (parseInt(newData[index].stockAdded, 10) || 0) -
        (parseInt(newData[index].stockRemoved, 10) || 0);
    }
    setData(newData);
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">Stock Flow Over 60 Days</h2>
      <table className="w-full border-collapse border border-gray-600 mt-4">
        <thead>
          <tr className="bg-gray-700 text-white">
            <th className="border border-gray-600 p-2">Day</th>
            <th className="border border-gray-600 p-2">Stock Added</th>
            <th className="border border-gray-600 p-2">Stock Removed</th>
            <th className="border border-gray-600 p-2">Total Stock</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index} className="text-center bg-gray-900 text-white">
              <td className="border border-gray-600 p-2">{entry.day}</td>
              <td className="border border-gray-600 p-2">
                <input
                  type="number"
                  className="bg-gray-700 text-white p-1"
                  value={entry.stockAdded}
                  onChange={(e) => handleChange(index, "stockAdded", e.target.value)}
                />
              </td>
              <td className="border border-gray-600 p-2">
                <input
                  type="number"
                  className="bg-gray-700 text-white p-1"
                  value={entry.stockRemoved}
                  onChange={(e) => handleChange(index, "stockRemoved", e.target.value)}
                />
              </td>
              <td className="border border-gray-600 p-2">{entry.totalStock || 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockFlow;

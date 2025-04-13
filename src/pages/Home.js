import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Home = () => {
  const stats = [
    { label: "Total Stock", value: "23,482" },
    { label: "Low Stock Items", value: "56" },
    { label: "Out of Stock Items", value: "18" },
    { label: "Inventory Value", value: "$681,254" },
  ];

  const stockData = [
    { name: "Apr 1", stock: 5000 },
    { name: "Apr 7", stock: 15000 },
    { name: "Apr 13", stock: 8000 },
    { name: "Apr 19", stock: 12000 },
    { name: "Apr 23", stock: 20000 },
  ];

  const pieData = [
    { name: "Category A", value: 10 },
    { name: "Category B", value: 8 },
    { name: "Category C", value: 6 },
    { name: "Category D", value: 8 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const products = [
    { name: "Laptop Pro 15", sku: "LP1500", quantity: 120, reorder: 20, supplier: "TechCorp", updated: "1 hour ago" },
    { name: "Wireless Mouse", sku: "WM220", quantity: 25, reorder: 10, supplier: "PeriphSupply", updated: "2 hours ago" },
    { name: "Office Chair", sku: "OC300", quantity: 8, reorder: 15, supplier: "FurniCo", updated: "3 hours ago" },
    { name: "Desk Lamp", sku: "DL100", quantity: 50, reorder: 10, supplier: "HomeGoods", updated: "5 hours ago" },
    { name: "Smartphone X", sku: "SPX939", quantity: 300, reorder: 50, supplier: "MobileHub", updated: "8 hours ago" },
    { name: "Noise-Canceling Headphones", sku: "NCH600", quantity: 12, reorder: 20, supplier: "AudioWare", updated: "1 day ago" },
    { name: "Ergonomic Keyboard", sku: "EK700", quantity: 75, reorder: 30, supplier: "PeriphSupply", updated: "1 day ago" },
    { name: "Printer Ink Cartridge", sku: "PIC430", quantity: 0, reorder: 5, supplier: "PrintWorks", updated: "3 days ago" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
            <h2 className="text-lg font-semibold">{stat.label}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Stock Levels</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={stockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Line type="monotone" dataKey="stock" stroke="#00C49F" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-4">Stock by Category</h2>
          <PieChart width={200} height={200}>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Product</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-2">Item Name</th>
              <th className="p-2">SKU</th>
              <th className="p-2">Quantity Available</th>
              <th className="p-2">Reorder Level</th>
              <th className="p-2">Supplier</th>
              <th className="p-2">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.sku}</td>
                <td className="p-2">{product.quantity}</td>
                <td className="p-2">{product.reorder}</td>
                <td className="p-2">{product.supplier}</td>
                <td className="p-2">{product.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

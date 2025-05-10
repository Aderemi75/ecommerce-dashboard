
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { customerData } from '@/utils/mockData';

// Create a custom tooltip
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
        <p className="font-medium text-sm">{`${label}`}</p>
        <p className="text-sm text-green-600">{`New: ${payload[0].value}`}</p>
        <p className="text-sm text-blue-600">{`Returning: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const CustomerChart = () => {
  const [timeframe, setTimeframe] = useState("quarterly");
  
  // Filter data based on timeframe
  const getFilteredData = () => {
    switch (timeframe) {
      case "monthly":
        return customerData.slice(-1);
      case "quarterly":
        return customerData.slice(-3);
      case "biannual":
        return customerData.slice(-6);
      case "yearly":
      default:
        return customerData.slice(-12);
    }
  };

  const filteredData = getFilteredData();
  
  // Calculate totals for heading
  const totalNew = filteredData.reduce((sum, entry) => sum + entry.new, 0);
  const totalReturning = filteredData.reduce((sum, entry) => sum + entry.returning, 0);
  const total = totalNew + totalReturning;

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Customer Growth
        </h2>
        
        <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-md">
          <button 
            onClick={() => setTimeframe('monthly')}
            className={`text-xs px-3 py-1 rounded ${timeframe === 'monthly' 
              ? 'bg-white dark:bg-gray-700 text-primary dark:text-white shadow-sm' 
              : 'text-gray-600 dark:text-gray-300'}`}
          >
            Month
          </button>
          <button 
            onClick={() => setTimeframe('quarterly')}
            className={`text-xs px-3 py-1 rounded ${timeframe === 'quarterly' 
              ? 'bg-white dark:bg-gray-700 text-primary dark:text-white shadow-sm' 
              : 'text-gray-600 dark:text-gray-300'}`}
          >
            Quarter
          </button>
          <button 
            onClick={() => setTimeframe('biannual')}
            className={`text-xs px-3 py-1 rounded ${timeframe === 'biannual' 
              ? 'bg-white dark:bg-gray-700 text-primary dark:text-white shadow-sm' 
              : 'text-gray-600 dark:text-gray-300'}`}
          >
            6 Months
          </button>
          <button 
            onClick={() => setTimeframe('yearly')}
            className={`text-xs px-3 py-1 rounded ${timeframe === 'yearly' 
              ? 'bg-white dark:bg-gray-700 text-primary dark:text-white shadow-sm' 
              : 'text-gray-600 dark:text-gray-300'}`}
          >
            Year
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-100 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">Total</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{total}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-100 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">New</p>
          <p className="text-lg font-semibold text-green-600">{totalNew}</p>
          <p className="text-xs text-gray-500">{Math.round((totalNew/total)*100)}% of total</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-100 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">Returning</p>
          <p className="text-lg font-semibold text-blue-600">{totalReturning}</p>
          <p className="text-xs text-gray-500">{Math.round((totalReturning/total)*100)}% of total</p>
        </div>
      </div>
      
      <div className="flex-1 min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={filteredData}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            barGap={0}
            barCategoryGap={8}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 11 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 11 }}
              width={25}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top" 
              wrapperStyle={{ lineHeight: '40px' }}
              formatter={(value) => <span className="text-sm font-medium">{value}</span>}
            />
            <Bar dataKey="new" name="New" fill="#4ade80" radius={[4, 4, 0, 0]} />
            <Bar dataKey="returning" name="Returning" fill="#60a5fa" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomerChart;

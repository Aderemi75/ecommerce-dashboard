
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { salesData } from '@/utils/mockData';

const SalesChart = () => {
  const [timeframe, setTimeframe] = useState("yearly");
  
  // Filter data based on timeframe
  const getFilteredData = () => {
    switch (timeframe) {
      case "monthly":
        return salesData.slice(-1);
      case "quarterly":
        return salesData.slice(-3);
      case "biannual":
        return salesData.slice(-6);
      case "yearly":
      default:
        return salesData;
    }
  };

  const filteredData = getFilteredData();

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Sales Trend
        </h2>
        
        <div className="flex items-center space-x-2">
          <button 
            className={`text-xs px-2 py-1 rounded-md transition-colors ${timeframe === 'monthly' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'}`}
            onClick={() => setTimeframe('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`text-xs px-2 py-1 rounded-md transition-colors ${timeframe === 'quarterly' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'}`}
            onClick={() => setTimeframe('quarterly')}
          >
            Quarterly
          </button>
          <button 
            className={`text-xs px-2 py-1 rounded-md transition-colors ${timeframe === 'biannual' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'}`}
            onClick={() => setTimeframe('biannual')}
          >
            6 Months
          </button>
          <button 
            className={`text-xs px-2 py-1 rounded-md transition-colors ${timeframe === 'yearly' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'}`}
            onClick={() => setTimeframe('yearly')}
          >
            Yearly
          </button>
        </div>
      </div>
      
      <div className="flex-1 min-h-[300px] -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={filteredData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12 }} 
              tickFormatter={(value) => `$${value}`}
              width={40}
            />
            <Tooltip 
              formatter={(value) => [`$${value}`, '']}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #eee', 
                borderRadius: '0.5rem',
                padding: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              labelStyle={{ fontWeight: 'bold', marginBottom: '5px' }}
            />
            <Legend verticalAlign="top" height={36} />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="revenue" 
              name="Revenue" 
              stroke="#8884d8" 
              fill="url(#colorRevenue)"
              strokeWidth={2}
              activeDot={{ r: 6, strokeWidth: 1, stroke: '#fff' }}
            />
            <Area 
              type="monotone" 
              name="Sales" 
              dataKey="sales" 
              stroke="#82ca9d" 
              fill="url(#colorSales)"
              strokeWidth={2}
              activeDot={{ r: 6, strokeWidth: 1, stroke: '#fff' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;

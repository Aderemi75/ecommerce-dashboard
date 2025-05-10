
import { ChevronRight } from 'lucide-react';
import { recentOrders, getStatusColor, formatCurrency } from '@/utils/mockData';

const RecentOrders = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Orders
        </h2>
        <a 
          href="#" 
          className="text-sm text-primary hover:text-primary/80 font-medium flex items-center"
        >
          View All <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left">
              <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Order</th>
              <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Customer</th>
              <th className="pb-3 font-medium text-gray-500 dark:text-gray-400 hidden sm:table-cell">Date</th>
              <th className="pb-3 font-medium text-gray-500 dark:text-gray-400">Status</th>
              <th className="pb-3 font-medium text-gray-500 dark:text-gray-400 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr 
                key={order.id} 
                className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
              >
                <td className="py-3 font-medium text-gray-900 dark:text-white">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-3 text-xs font-medium">
                      {order.items}
                    </div>
                    {order.id}
                  </div>
                </td>
                <td className="py-3 text-gray-600 dark:text-gray-300 truncate max-w-[120px]">
                  {order.customer}
                </td>
                <td className="py-3 text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                  {new Date(order.date).toLocaleDateString(undefined, { 
                    month: 'short', 
                    day: 'numeric'
                  })}
                </td>
                <td className="py-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 text-right font-medium text-gray-900 dark:text-white">
                  {formatCurrency(order.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
        <a href="#" className="text-sm text-primary font-medium hover:underline">
          Generate report
        </a>
      </div>
    </div>
  );
};

export default RecentOrders;


import { ArrowUpRight, ArrowDownRight, DollarSign, ShoppingBag, Users, CreditCard } from "lucide-react";
import { summaryData, formatCurrency } from "@/utils/mockData";

const SummaryCards = () => {
  const { totalSales, totalRevenue, totalOrders, totalCustomers, changeRates } = summaryData;

  const cards = [
    {
      title: "Total Revenue",
      value: formatCurrency(totalRevenue),
      change: changeRates.revenue,
      icon: <DollarSign size={18} />,
      bgClass: "bg-gradient-to-r from-violet-500 to-purple-500",
      textClass: "text-white",
    },
    {
      title: "Total Sales",
      value: totalSales.toLocaleString(),
      change: changeRates.sales,
      icon: <ShoppingBag size={18} />,
      bgClass: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
      textClass: "text-gray-900 dark:text-white",
    },
    {
      title: "Total Orders",
      value: totalOrders.toLocaleString(),
      change: changeRates.orders,
      icon: <CreditCard size={18} />,
      bgClass: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
      textClass: "text-gray-900 dark:text-white",
    },
    {
      title: "New Customers",
      value: totalCustomers.toLocaleString(),
      change: changeRates.customers,
      icon: <Users size={18} />,
      bgClass: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
      textClass: "text-gray-900 dark:text-white",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`${card.bgClass} rounded-xl p-5 ${index === 0 ? 'shadow-md' : 'shadow-sm'}`}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className={`${index === 0 ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'} text-sm font-medium`}>
              {card.title}
            </h3>
            <div className={`${index === 0 ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'} p-2 rounded-lg`}>
              {card.icon}
            </div>
          </div>
          
          <div className="flex flex-col">
            <p className={`text-2xl font-bold ${card.textClass}`}>
              {card.value}
            </p>
            <div className="flex items-center mt-2">
              {card.change > 0 ? (
                <>
                  <ArrowUpRight size={16} className="text-green-500 mr-1" />
                  <span className="text-green-500 text-sm font-medium">
                    +{card.change}%
                  </span>
                </>
              ) : (
                <>
                  <ArrowDownRight size={16} className="text-red-500 mr-1" />
                  <span className="text-red-500 text-sm font-medium">
                    {card.change}%
                  </span>
                </>
              )}
              <span className={`${index === 0 ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'} text-xs ml-1`}>
                vs last month
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;


import { ChevronRight } from 'lucide-react';
import { topProducts, formatCurrency } from '@/utils/mockData';

const TopProducts = () => {
  // Calculate the percentage of inventory for the progress bar
  const getInventoryPercentage = (inventory: number) => {
    // Just a simple calculation, assuming 1000 is the max inventory
    const percentage = (inventory / 1000) * 100;
    return Math.min(percentage, 100); // Cap at 100%
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Best Selling Products
        </h2>
        <a 
          href="#" 
          className="text-sm text-primary hover:text-primary/80 font-medium flex items-center"
        >
          View All <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div className="space-y-3 flex-1">
        {topProducts.slice(0, 4).map((product) => (
          <div 
            key={product.id} 
            className="flex flex-col p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150"
          >
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-white font-medium text-xs ${
                product.category === 'Electronics' ? 'bg-blue-500' :
                product.category === 'Fashion' ? 'bg-purple-500' :
                product.category === 'Food & Beverage' ? 'bg-green-500' : 'bg-amber-500'
              }`}>
                {product.category.slice(0, 2).toUpperCase()}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-900 dark:text-white ml-2">
                    {formatCurrency(product.price)}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor" 
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                    ))}
                    <span className="text-xs ml-1 text-gray-500 dark:text-gray-400">({product.sales} sold)</span>
                  </div>
                </div>
                
                <div className="mt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500 dark:text-gray-400">Inventory</span>
                    <span className="font-medium">{product.inventory} units</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                    <div 
                      className="bg-primary h-1.5 rounded-full" 
                      style={{ width: `${getInventoryPercentage(product.inventory)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Total Revenue</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {formatCurrency(
              topProducts.reduce((sum, product) => sum + product.revenue, 0)
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;

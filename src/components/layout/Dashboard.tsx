
import { useState } from 'react';
import SummaryCards from '@/components/dashboard/SummaryCards';
import SalesChart from '@/components/dashboard/SalesChart';
import CustomerChart from '@/components/dashboard/CustomerChart';
import RecentOrders from '@/components/dashboard/RecentOrders';
import TopProducts from '@/components/dashboard/TopProducts';
import { Sidebar } from './Sidebar';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Bell, Search, Menu } from 'lucide-react';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950 overflow-hidden">
      {/* Sidebar for desktop */}
      <div className={`hidden md:block ${showMobileMenu ? 'absolute z-20 h-full' : ''}`}>
        <Sidebar 
          collapsed={sidebarCollapsed} 
          setCollapsed={setSidebarCollapsed} 
        />
      </div>
      
      {/* Mobile sidebar backdrop */}
      {showMobileMenu && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-10"
          onClick={() => setShowMobileMenu(false)}
        />
      )}
      
      {/* Mobile sidebar */}
      <div className={`md:hidden fixed inset-y-0 left-0 z-20 transform ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out`}>
        <Sidebar 
          collapsed={false} 
          setCollapsed={() => {}} 
        />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between h-16 px-4">
            <div className="flex items-center">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <Menu size={24} />
              </button>
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="hidden md:block p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <Menu size={24} />
              </button>
              <h1 className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <Search className="absolute top-2.5 right-3 h-4 w-4 text-gray-400" />
              </div>
              
              <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
                <Bell size={20} />
              </button>
              
              <ThemeToggle />
              
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden ml-2">
                  <img
                    src="profile.jpg"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Summary Cards */}
            <SummaryCards />
            
            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
                <SalesChart />
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
                <CustomerChart />
              </div>
            </div>
            
            {/* Orders and Products */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
                <RecentOrders />
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6">
                <TopProducts />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

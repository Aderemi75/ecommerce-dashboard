
import { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, LayoutDashboard, 
  ShoppingBag, Users, Settings, 
  Package, CreditCard, PieChart, 
  ChevronDown
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const menuItems = [
    {
      name: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      href: '#'
    },
    {
      name: 'products',
      label: 'Products',
      icon: <Package size={20} />,
      href: '#',
      submenu: [
        { name: 'all-products', label: 'All Products', href: '#' },
        { name: 'add-product', label: 'Add Product', href: '#' },
        { name: 'categories', label: 'Categories', href: '#' }
      ]
    },
    {
      name: 'orders',
      label: 'Orders',
      icon: <ShoppingBag size={20} />,
      href: '#'
    },
    {
      name: 'customers',
      label: 'Customers',
      icon: <Users size={20} />,
      href: '#'
    },
    {
      name: 'payments',
      label: 'Payments',
      icon: <CreditCard size={20} />,
      href: '#'
    },
    {
      name: 'analytics',
      label: 'Analytics',
      icon: <PieChart size={20} />,
      href: '#'
    },
    {
      name: 'settings',
      label: 'Settings',
      icon: <Settings size={20} />,
      href: '#'
    }
  ];

  return (
    <div className={cn(
      'h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300',
      collapsed ? 'w-[70px]' : 'w-[250px]'
    )}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
        {!collapsed && (
          <h1 className="text-lg font-semibold text-primary">EcomInsight</h1>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <div className="flex flex-col flex-grow overflow-y-auto py-4 px-3">
        <nav>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <div className="flex flex-col">
                  <a 
                    href={item.href} 
                    onClick={(e) => {
                      if (item.submenu) {
                        e.preventDefault();
                        toggleSubMenu(item.name);
                      } else {
                        setActiveMenu(item.name);
                      }
                    }}
                    className={cn(
                      'flex items-center px-2 py-2 rounded-md text-sm font-medium',
                      activeMenu === item.name 
                        ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    )}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {!collapsed && (
                      <>
                        <span className="flex-grow">{item.label}</span>
                        {item.submenu && (
                          <ChevronDown 
                            size={16} 
                            className={cn(
                              "transition-transform",
                              openSubMenu === item.name ? "transform rotate-180" : ""
                            )} 
                          />
                        )}
                      </>
                    )}
                  </a>
                  
                  {!collapsed && item.submenu && openSubMenu === item.name && (
                    <ul className="mt-1 ml-8 space-y-1">
                      {item.submenu.map((subitem) => (
                        <li key={subitem.name}>
                          <a 
                            href={subitem.href} 
                            onClick={() => setActiveMenu(subitem.name)}
                            className={cn(
                              'block px-2 py-1.5 text-sm rounded-md',
                              activeMenu === subitem.name 
                                ? 'text-primary font-medium' 
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                            )}
                          >
                            {subitem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
            <span className="font-medium text-sm">AD</span>
          </div>
        </div>
        
        {!collapsed && (
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">admin@example.com</p>
          </div>
        )}
        
        {!collapsed && <ThemeToggle />}
      </div>
    </div>
  );
};

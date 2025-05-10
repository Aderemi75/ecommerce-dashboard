
// Mock data for dashboard components

// Summary data
export const summaryData = {
  totalSales: 84621,
  totalRevenue: 125430.50,
  totalOrders: 1254,
  totalCustomers: 879,
  changeRates: {
    sales: 12.5,
    revenue: 8.2,
    orders: 5.3,
    customers: 15.8,
  }
};

// Sales data for chart
export const salesData = [
  { month: 'Jan', sales: 4000, revenue: 24000 },
  { month: 'Feb', sales: 3000, revenue: 18500 },
  { month: 'Mar', sales: 5000, revenue: 28700 },
  { month: 'Apr', sales: 2780, revenue: 19600 },
  { month: 'May', sales: 1890, revenue: 14300 },
  { month: 'Jun', sales: 2390, revenue: 18100 },
  { month: 'Jul', sales: 3490, revenue: 24500 },
  { month: 'Aug', sales: 4000, revenue: 26900 },
  { month: 'Sep', sales: 4500, revenue: 29800 },
  { month: 'Oct', sales: 4900, revenue: 32000 },
  { month: 'Nov', sales: 5200, revenue: 37500 },
  { month: 'Dec', sales: 6000, revenue: 42000 },
];

// Customer data for chart
export const customerData = [
  { month: 'Jan', new: 120, returning: 80 },
  { month: 'Feb', new: 98, returning: 72 },
  { month: 'Mar', new: 135, returning: 85 },
  { month: 'Apr', new: 78, returning: 92 },
  { month: 'May', new: 55, returning: 75 },
  { month: 'Jun', new: 67, returning: 83 },
  { month: 'Jul', new: 89, returning: 95 },
  { month: 'Aug', new: 105, returning: 102 },
  { month: 'Sep', new: 120, returning: 110 },
  { month: 'Oct', new: 135, returning: 115 },
  { month: 'Nov', new: 143, returning: 125 },
  { month: 'Dec', new: 165, returning: 132 },
];

// Recent orders
export const recentOrders = [
  {
    id: 'ORD-12345',
    customer: 'John Doe',
    date: '2023-05-08T10:30:00',
    total: 324.95,
    status: 'Delivered',
    items: 3
  },
  {
    id: 'ORD-12344',
    customer: 'Jane Smith',
    date: '2023-05-08T09:15:00',
    total: 124.50,
    status: 'Processing',
    items: 2
  },
  {
    id: 'ORD-12343',
    customer: 'Robert Johnson',
    date: '2023-05-07T16:45:00',
    total: 520.00,
    status: 'Shipped',
    items: 5
  },
  {
    id: 'ORD-12342',
    customer: 'Sarah Williams',
    date: '2023-05-07T14:20:00',
    total: 84.99,
    status: 'Delivered',
    items: 1
  },
  {
    id: 'ORD-12341',
    customer: 'Michael Brown',
    date: '2023-05-06T11:10:00',
    total: 215.50,
    status: 'Cancelled',
    items: 3
  },
  {
    id: 'ORD-12340',
    customer: 'Emily Davis',
    date: '2023-05-06T09:45:00',
    total: 175.25,
    status: 'Delivered',
    items: 2
  }
];

// Top products
export const topProducts = [
  {
    id: 'PRD-1234',
    name: 'Wireless Headphones',
    price: 89.99,
    sales: 1245,
    revenue: 112036.55,
    inventory: 458,
    category: 'Electronics',
    rating: 4.8
  },
  {
    id: 'PRD-2345',
    name: 'Smart Watch',
    price: 199.99,
    sales: 980,
    revenue: 195990.20,
    inventory: 320,
    category: 'Electronics',
    rating: 4.6
  },
  {
    id: 'PRD-3456',
    name: 'Leather Backpack',
    price: 65.00,
    sales: 852,
    revenue: 55380.00,
    inventory: 215,
    category: 'Fashion',
    rating: 4.5
  },
  {
    id: 'PRD-4567',
    name: 'Organic Tea Set',
    price: 28.50,
    sales: 743,
    revenue: 21175.50,
    inventory: 532,
    category: 'Food & Beverage',
    rating: 4.7
  },
  {
    id: 'PRD-5678',
    name: 'Yoga Mat',
    price: 35.99,
    sales: 650,
    revenue: 23393.50,
    inventory: 320,
    category: 'Sports & Fitness',
    rating: 4.3
  }
];

// Helper for status color
export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'delivered':
      return 'bg-green-100 text-green-800';
    case 'processing':
      return 'bg-blue-100 text-blue-800';
    case 'shipped':
      return 'bg-purple-100 text-purple-800';
    case 'cancelled':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

// Format currency
export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(value);
};

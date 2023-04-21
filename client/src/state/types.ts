// Interface for the expenses by category object
export interface ExpensesByCategory {
  salaries: number; // Salaries expenses amount
  supplies: number; // Supplies expenses amount
  services: number; // Services expenses amount
}

// Interface for the month object
export interface Month {
  id: string; // Unique identifier for the month
  month: string; // Month label (e.g. "January")
  revenue: number; // Total revenue for the month
  expenses: number; // Total expenses for the month
  nonOperationalExpenses: number; // Non-operational expenses for the month
  operationalExpenses: number; // Operational expenses for the month
}

// Interface for the day object
export interface Day {
  id: string; // Unique identifier for the day
  data: string; // Date string (e.g. "2023-04-20")
  revenue: number; // Total revenue for the day
  expenses: number; // Total expenses for the day
}

// Interface for the GetKpisResponse object
export interface GetKpisResponse {
  id: string; // Unique identifier for the KPI object
  _id: string; // Alternative unique identifier for the KPI object (used in some databases)
  __v: number; // Version key for the KPI object (used in some databases)
  totalProfit: number; // Total profit amount
  totalRevenue: number; // Total revenue amount
  totalExpenses: number; // Total expenses amount
  expensesByCategory: ExpensesByCategory; // Expenses broken down by category
  monthlyData: Array<Month>; // Array of monthly data objects
  dailyData: Array<Day>; // Array of daily data objects
  createdAt: string; // Timestamp for when the KPI object was created
  updatedAt: string; // Timestamp for when the KPI object was last updated
}

// Interface for the GetProductsResponse object
export interface GetProductsResponse {
  id: string; // Unique identifier for the product object
  _id: string; // Alternative unique identifier for the product object (used in some databases)
  __v: number; // Version key for the product object (used in some databases)
  price: number; // Price of the product
  expense: number; // Expense associated with the product
  transactions: Array<string>; // Array of transaction IDs related to the product
  createdAt: string; // Timestamp for when the product object was created
  updatedAt: string; // Timestamp for when the product object was last updated
}

// Interface for the GetTransactionsResponse object
export interface GetTransactionsResponse {
  id: string; // Unique identifier for the transaction object
  _id: string; // Alternative unique identifier for the transaction object (used in some databases)
  __v: number; // Version key for the transaction object (used in some databases)
  buyer: string; // Buyer identifier or name
  amount: number; // Amount of the transaction
  productIds: Array<string>; // Array of product IDs related to the transaction
  createdAt: string; // Timestamp for when the transaction object was created
  updatedAt: string; // Timestamp for when the transaction object was last updated
}

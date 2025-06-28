import AdminStats from "@/components/admin/AdminStats"
import RecentOrders from "@/components/admin/RecentOrders"
import SalesChart from "@/components/admin/SalesChart"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your store.</p>
      </div>

      <AdminStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <RecentOrders />
      </div>
    </div>
  )
}

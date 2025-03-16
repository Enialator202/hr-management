import Link from "next/link"
import { BarChart3, CalendarDays, Clock, DollarSign, FileText, Home, Settings, Target, Users } from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Employees", href: "/dashboard/employees", icon: Users },
  { name: "Attendance", href: "/dashboard/attendance", icon: Clock },
  { name: "Leave Management", href: "/dashboard/leave", icon: CalendarDays },
  { name: "Payroll", href: "/dashboard/payroll", icon: DollarSign },
  { name: "Performance", href: "/dashboard/performance", icon: Target },
  { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
  { name: "Documents", href: "/dashboard/documents", icon: FileText },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function DashboardNav() {
  return (
    <nav className="grid items-start px-4 py-4 text-sm font-medium">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Icon className="h-4 w-4" />
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}


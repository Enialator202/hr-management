import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">HR Management System</h1>
        <p className="text-muted-foreground text-lg">
          A comprehensive solution for managing your organization  human resources
        </p>
        <p>Let&apos;s get started with your application!</p>

        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>
              Access the HR management dashboard to manage employees, attendance, payroll, and more.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Link href="/dashboard">
              <Button size="lg">Enter Dashboard</Button>
            </Link>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Employee Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage employee profiles, documents, and personal information.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Attendance & Leave</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Track attendance, manage leave requests, and monitor time off.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payroll & Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Process payroll, manage benefits, and handle expense reimbursements.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}


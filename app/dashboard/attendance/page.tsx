import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Calendar } from "@/components/ui/calendar" // Removed import as per instructions
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Filter } from "lucide-react"

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
          <p className="text-muted-foreground">Track employee attendance and time records.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Today  Overview</CardTitle>
            <CardDescription>April 3, 2025</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Present</span>
              <span className="text-sm font-medium">132/142</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="bg-green-500 h-full rounded-full" style={{ width: "93%" }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Absent</span>
              <span className="text-sm font-medium">4/142</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="bg-red-500 h-full rounded-full" style={{ width: "3%" }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">On Leave</span>
              <span className="text-sm font-medium">6/142</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="bg-yellow-500 h-full rounded-full" style={{ width: "4%" }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Attendance Calendar</CardTitle>
            <CardDescription>View attendance patterns by date</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center border rounded-md">
              <p className="text-muted-foreground">Calendar view will appear here</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="daily">
        <TabsList>
          <TabsTrigger value="daily">Daily View</TabsTrigger>
          <TabsTrigger value="weekly">Weekly View</TabsTrigger>
          <TabsTrigger value="monthly">Monthly View</TabsTrigger>
        </TabsList>
        <TabsContent value="daily" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Daily Attendance - April 3, 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Check In</TableHead>
                    <TableHead>Check Out</TableHead>
                    <TableHead>Total Hours</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "John Doe",
                      department: "Engineering",
                      checkIn: "09:02 AM",
                      checkOut: "06:05 PM",
                      hours: "9h 3m",
                      status: "Present",
                    },
                    {
                      name: "Jane Smith",
                      department: "Marketing",
                      checkIn: "08:55 AM",
                      checkOut: "05:45 PM",
                      hours: "8h 50m",
                      status: "Present",
                    },
                    {
                      name: "Robert Johnson",
                      department: "HR",
                      checkIn: "09:15 AM",
                      checkOut: "06:30 PM",
                      hours: "9h 15m",
                      status: "Present",
                    },
                    {
                      name: "Emily Davis",
                      department: "Finance",
                      checkIn: "-",
                      checkOut: "-",
                      hours: "-",
                      status: "On Leave",
                    },
                    {
                      name: "Michael Wilson",
                      department: "Engineering",
                      checkIn: "08:45 AM",
                      checkOut: "05:50 PM",
                      hours: "9h 5m",
                      status: "Present",
                    },
                  ].map((record, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{record.name}</TableCell>
                      <TableCell>{record.department}</TableCell>
                      <TableCell>{record.checkIn}</TableCell>
                      <TableCell>{record.checkOut}</TableCell>
                      <TableCell>{record.hours}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            record.status === "Present"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : record.status === "On Leave"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          }`}
                        >
                          {record.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p>It&apos;s a great day for attendance tracking!</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="weekly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Attendance - March 31 - April 6, 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Weekly attendance view will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Attendance - April 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Monthly attendance view will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


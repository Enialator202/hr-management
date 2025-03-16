import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search } from "lucide-react"

const employees = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    department: "Engineering",
    position: "Senior Developer",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    department: "Marketing",
    position: "Marketing Manager",
    status: "Active",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    department: "HR",
    position: "HR Specialist",
    status: "Active",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    department: "Finance",
    position: "Financial Analyst",
    status: "On Leave",
  },
  {
    id: 5,
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    department: "Engineering",
    position: "QA Engineer",
    status: "Active",
  },
  {
    id: 6,
    name: "Sarah Brown",
    email: "sarah.brown@example.com",
    department: "Sales",
    position: "Sales Representative",
    status: "Active",
  },
  {
    id: 7,
    name: "David Miller",
    email: "david.miller@example.com",
    department: "Product",
    position: "Product Manager",
    status: "Active",
  },
  {
    id: 8,
    name: "Jennifer Taylor",
    email: "jennifer.taylor@example.com",
    department: "Design",
    position: "UI/UX Designer",
    status: "Active",
  },
]

export default function EmployeesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Employees</h1>
          <p className="text-muted-foreground">Manage employee profiles and information.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search employees..." className="w-full pl-8" />
        </div>
        <Button variant="outline">Filters</Button>
        <Button variant="outline">Export</Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Employees</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="onleave">On Leave</TabsTrigger>
          <TabsTrigger value="terminated">Terminated</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">{employee.name}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            employee.status === "Active"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                        >
                          {employee.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Employees</CardTitle>
              <CardDescription>Employees currently active in the organization.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Active employees table would go here */}
              <p className="text-center text-muted-foreground py-4">Showing active employees only</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="onleave" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employees on Leave</CardTitle>
              <CardDescription>Employees currently on various types of leave.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* On leave employees table would go here */}
              <p className="text-center text-muted-foreground py-4">Showing employees on leave</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="terminated" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Terminated Employees</CardTitle>
              <CardDescription>Former employees who have been terminated.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Terminated employees table would go here */}
              <p className="text-center text-muted-foreground py-4">Showing terminated employees</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Target } from "lucide-react"

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Performance Management</h1>
          <p className="text-muted-foreground">Track employee performance, goals, and reviews.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Review
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24/142</div>
            <p className="text-xs text-muted-foreground">For Q1 2025</p>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden mt-2">
              <div className="bg-primary h-full rounded-full" style={{ width: `17%` }}></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8/5.0</div>
            <p className="text-xs text-muted-foreground">Across all departments</p>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden mt-2">
              <div className="bg-primary h-full rounded-full" style={{ width: `76%` }}></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Goals Achieved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">Company-wide</p>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden mt-2">
              <div className="bg-primary h-full rounded-full" style={{ width: `68%` }}></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Top Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Employees with 5.0 rating</p>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden mt-2">
              <div className="bg-primary h-full rounded-full" style={{ width: `8%` }}></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="reviews">
        <TabsList>
          <TabsTrigger value="reviews">Performance Reviews</TabsTrigger>
          <TabsTrigger value="goals">Goals & KPIs</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="development">Development Plans</TabsTrigger>
        </TabsList>
        <TabsContent value="reviews" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ongoing Performance Reviews</CardTitle>
              <CardDescription>Q1 2025 Performance Review Cycle</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Manager</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "John Doe",
                      department: "Engineering",
                      manager: "Sarah Brown",
                      dueDate: "Apr 15, 2025",
                      status: "In Progress",
                    },
                    {
                      name: "Jane Smith",
                      department: "Marketing",
                      manager: "David Miller",
                      dueDate: "Apr 10, 2025",
                      status: "Not Started",
                    },
                    {
                      name: "Robert Johnson",
                      department: "HR",
                      manager: "Jennifer Taylor",
                      dueDate: "Apr 20, 2025",
                      status: "Completed",
                    },
                    {
                      name: "Emily Davis",
                      department: "Finance",
                      manager: "Michael Wilson",
                      dueDate: "Apr 12, 2025",
                      status: "In Progress",
                    },
                    {
                      name: "Michael Wilson",
                      department: "Engineering",
                      manager: "Sarah Brown",
                      dueDate: "Apr 18, 2025",
                      status: "Not Started",
                    },
                  ].map((review, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{review.name}</TableCell>
                      <TableCell>{review.department}</TableCell>
                      <TableCell>{review.manager}</TableCell>
                      <TableCell>{review.dueDate}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            review.status === "Completed"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : review.status === "In Progress"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                        >
                          {review.status}
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
        <TabsContent value="goals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employee Goals & KPIs</CardTitle>
              <CardDescription>Track and manage employee goals and key performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { employee: "John Doe", goal: "Complete backend migration", progress: 75, dueDate: "May 15, 2025" },
                  {
                    employee: "Jane Smith",
                    goal: "Increase marketing leads by 20%",
                    progress: 40,
                    dueDate: "June 30, 2025",
                  },
                  {
                    employee: "Robert Johnson",
                    goal: "Reduce employee turnover by 5%",
                    progress: 60,
                    dueDate: "December 31, 2025",
                  },
                ].map((goal, i) => (
                  <div key={i} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h3 className="font-medium">{goal.employee}</h3>
                        <p className="text-sm text-muted-foreground">{goal.goal}</p>
                      </div>
                      <Target className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden mt-2">
                        <div className="bg-primary h-full rounded-full" style={{ width: `${goal.progress}%` }}></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Due: {goal.dueDate}</span>
                        <Button variant="ghost" size="sm" className="h-7 px-2">
                          Update
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="feedback" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employee Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Employee feedback will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="development" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Development Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Employee development plans will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


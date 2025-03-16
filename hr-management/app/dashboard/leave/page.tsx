import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"

export default function LeavePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leave Management</h1>
          <p className="text-muted-foreground">Manage employee leave requests and balances.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Request Leave
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Annual Leave</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12/24</div>
            <p className="text-xs text-muted-foreground">Days remaining</p>
            <div className="mt-2 w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: "50%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Sick Leave</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8/10</div>
            <p className="text-xs text-muted-foreground">Days remaining</p>
            <div className="mt-2 w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: "80%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Personal Leave</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/5</div>
            <p className="text-xs text-muted-foreground">Days remaining</p>
            <div className="mt-2 w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: "60%" }}></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Unpaid Leave</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Unlimited</div>
            <p className="text-xs text-muted-foreground">Subject to approval</p>
            <div className="mt-2 w-full h-2 bg-muted rounded-full overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: "100%" }}></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">Pending Requests</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
          <TabsTrigger value="all">All Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Leave Requests</CardTitle>
              <CardDescription>Leave requests awaiting approval</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Leave Type</TableHead>
                    <TableHead>From</TableHead>
                    <TableHead>To</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "John Doe",
                      type: "Annual Leave",
                      from: "Apr 10, 2025",
                      to: "Apr 15, 2025",
                      duration: "5 days",
                      reason: "Vacation",
                    },
                    {
                      name: "Jane Smith",
                      type: "Sick Leave",
                      from: "Apr 5, 2025",
                      to: "Apr 6, 2025",
                      duration: "2 days",
                      reason: "Medical appointment",
                    },
                    {
                      name: "Robert Johnson",
                      type: "Personal Leave",
                      from: "Apr 20, 2025",
                      to: "Apr 20, 2025",
                      duration: "1 day",
                      reason: "Family event",
                    },
                  ].map((request, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{request.name}</TableCell>
                      <TableCell>{request.type}</TableCell>
                      <TableCell>{request.from}</TableCell>
                      <TableCell>{request.to}</TableCell>
                      <TableCell>{request.duration}</TableCell>
                      <TableCell>{request.reason}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" className="mr-2">
                          Approve
                        </Button>
                        <Button variant="outline" size="sm">
                          Reject
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="approved" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Approved Leave Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Approved leave requests will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rejected" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rejected Leave Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Rejected leave requests will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Leave Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">All leave requests will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


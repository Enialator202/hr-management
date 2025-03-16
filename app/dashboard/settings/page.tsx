import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and system preferences.</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your company details and information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-website">Website</Label>
                  <Input id="company-website" defaultValue="https://acme.com" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-email">Email</Label>
                  <Input id="company-email" defaultValue="info@acme.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-phone">Phone</Label>
                  <Input id="company-phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-address">Address</Label>
                <Input id="company-address" defaultValue="123 Main St, Suite 100" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-city">City</Label>
                  <Input id="company-city" defaultValue="San Francisco" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-state">State</Label>
                  <Input id="company-state" defaultValue="CA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-zip">ZIP Code</Label>
                  <Input id="company-zip" defaultValue="94103" />
                </div>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Preferences</CardTitle>
              <CardDescription>Configure system-wide settings and defaults.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable dark mode for the entire application</p>
                  </div>
                  <Switch id="dark-mode" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-logout">Auto Logout</Label>
                    <p className="text-sm text-muted-foreground">Automatically log out after period of inactivity</p>
                  </div>
                  <Switch id="auto-logout" defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeout">Inactivity Timeout (minutes)</Label>
                  <Select defaultValue="30">
                    <SelectTrigger id="timeout">
                      <SelectValue placeholder="Select timeout" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="120">120 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date-format">Date Format</Label>
                  <RadioGroup defaultValue="mm-dd-yyyy" id="date-format">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mm-dd-yyyy" id="mm-dd-yyyy" />
                      <Label htmlFor="mm-dd-yyyy">MM/DD/YYYY</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dd-mm-yyyy" id="dd-mm-yyyy" />
                      <Label htmlFor="dd-mm-yyyy">DD/MM/YYYY</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yyyy-mm-dd" id="yyyy-mm-dd" />
                      <Label htmlFor="yyyy-mm-dd">YYYY/MM/DD</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="permissions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Role Permissions</CardTitle>
              <CardDescription>Configure access permissions for different user roles.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Admin</h3>
                  <p className="text-sm text-muted-foreground mb-4">Full access to all features and settings</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="admin-employees" defaultChecked disabled />
                      <Label htmlFor="admin-employees">Manage Employees</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="admin-payroll" defaultChecked disabled />
                      <Label htmlFor="admin-payroll">Manage Payroll</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="admin-settings" defaultChecked disabled />
                      <Label htmlFor="admin-settings">Manage Settings</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="admin-reports" defaultChecked disabled />
                      <Label htmlFor="admin-reports">View Reports</Label>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">HR Manager</h3>
                  <p className="text-sm text-muted-foreground mb-4">Manages employees, payroll, and performance</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="hr-employees" defaultChecked />
                      <Label htmlFor="hr-employees">Manage Employees</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="hr-payroll" defaultChecked />
                      <Label htmlFor="hr-payroll">Manage Payroll</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="hr-settings" />
                      <Label htmlFor="hr-settings">Manage Settings</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="hr-reports" defaultChecked />
                      <Label htmlFor="hr-reports">View Reports</Label>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Team Lead</h3>
                  <p className="text-sm text-muted-foreground mb-4">Manages assigned employees and approvals</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="lead-employees" />
                      <Label htmlFor="lead-employees">Manage Employees</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="lead-payroll" />
                      <Label htmlFor="lead-payroll">Manage Payroll</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="lead-settings" />
                      <Label htmlFor="lead-settings">Manage Settings</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="lead-reports" defaultChecked />
                      <Label htmlFor="lead-reports">View Reports</Label>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Employee</h3>
                  <p className="text-sm text-muted-foreground mb-4">Limited access to personal info and requests</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="emp-profile" defaultChecked disabled />
                      <Label htmlFor="emp-profile">View Own Profile</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="emp-payslips" defaultChecked disabled />
                      <Label htmlFor="emp-payslips">View Own Payslips</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="emp-leave" defaultChecked disabled />
                      <Label htmlFor="emp-leave">Request Leave</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="emp-performance" defaultChecked disabled />
                      <Label htmlFor="emp-performance">View Own Performance</Label>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="mt-4">Save Permissions</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when notifications are sent.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-leave">Leave Requests</Label>
                      <Switch id="email-leave" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-payroll">Payroll Processing</Label>
                      <Switch id="email-payroll" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-performance">Performance Reviews</Label>
                      <Switch id="email-performance" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-announcements">Company Announcements</Label>
                      <Switch id="email-announcements" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="border-b pb-4">
                  <h3 className="font-medium mb-2">In-App Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-leave">Leave Requests</Label>
                      <Switch id="app-leave" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-payroll">Payroll Processing</Label>
                      <Switch id="app-payroll" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-performance">Performance Reviews</Label>
                      <Switch id="app-performance" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="app-announcements">Company Announcements</Label>
                      <Switch id="app-announcements" defaultChecked />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Notification Frequency</h3>
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Email Digest Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger id="frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time</SelectItem>
                        <SelectItem value="daily">Daily Digest</SelectItem>
                        <SelectItem value="weekly">Weekly Digest</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <Button className="mt-4">Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect with third-party services and tools.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Google Workspace</h3>
                    <p className="text-sm text-muted-foreground">Connect with Google Calendar and Gmail</p>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Slack</h3>
                    <p className="text-sm text-muted-foreground">Send notifications to Slack channels</p>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">QuickBooks</h3>
                    <p className="text-sm text-muted-foreground">Sync payroll data with QuickBooks</p>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Microsoft 365</h3>
                    <p className="text-sm text-muted-foreground">Connect with Outlook Calendar and Teams</p>
                  </div>
                  <Button variant="outline">Connect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


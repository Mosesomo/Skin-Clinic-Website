import { useState } from "react"
import { Calendar, ShoppingBag, ChevronRight, Activity, Pill, CalendarClock, Heart, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const DashboardOverview = ({ user }) => {
  const [activeTab, setActiveTab] = useState("upcoming")

  // Mock data
  const upcomingAppointment = {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Dermatologist",
    date: "June 15, 2025",
    time: "10:00 AM",
    location: "Main Clinic, Room 204",
    status: "confirmed",
  }

  const recentOrders = [
    {
      id: "ORD-5923",
      date: "June 2, 2025",
      items: 3,
      total: 7500,
      status: "delivered",
    },
    {
      id: "ORD-5845",
      date: "May 28, 2025",
      items: 1,
      total: 2200,
      status: "processing",
    },
  ]

  const prescriptions = [
    {
      id: 1,
      name: "Tretinoin Cream",
      dosage: "0.025%, Apply nightly",
      refillsLeft: 2,
      expiryDate: "August 15, 2025",
      progress: 65,
    },
    {
      id: 2,
      name: "Clindamycin Gel",
      dosage: "1%, Apply twice daily",
      refillsLeft: 1,
      expiryDate: "July 10, 2025",
      progress: 30,
    },
  ]

  const skinJournal = [
    {
      id: 1,
      date: "June 1, 2025",
      note: "Skin feeling less irritated, redness reduced",
      mood: "good",
    },
    {
      id: 2,
      date: "May 25, 2025",
      note: "Slight breakout on chin area, possibly stress-related",
      mood: "fair",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "cancelled":
        return "bg-red-100 text-red-700"
      case "delivered":
        return "bg-green-100 text-green-700"
      case "processing":
        return "bg-blue-100 text-blue-700"
      case "shipped":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getMoodIcon = (mood) => {
    switch (mood) {
      case "good":
        return "😊"
      case "fair":
        return "😐"
      case "poor":
        return "😔"
      default:
        return "😐"
    }
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Welcome back, {user.name}!</h1>
            <p className="text-muted-foreground">Here's what's happening with your health today.</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="mr-2 h-4 w-4" />
              Book New Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Next: June 15, 2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Prescriptions</CardTitle>
            <Pill className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">1 due for renewal soon</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">1 in transit</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Treatment Progress</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <Progress value={65} className="h-2" />
          </CardContent>
        </Card>
      </section>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Upcoming Appointment */}
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarClock className="mr-2 h-5 w-5 text-blue-600" />
              Next Appointment
            </CardTitle>
            <CardDescription>Your upcoming consultation</CardDescription>
          </CardHeader>
          <CardContent>
            {upcomingAppointment ? (
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{upcomingAppointment.doctor}</h3>
                    <p className="text-sm text-muted-foreground">{upcomingAppointment.specialty}</p>
                  </div>
                  <Badge className={getStatusColor(upcomingAppointment.status)}>
                    {upcomingAppointment.status.charAt(0).toUpperCase() + upcomingAppointment.status.slice(1)}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Date</p>
                    <p className="text-sm">{upcomingAppointment.date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Time</p>
                    <p className="text-sm">{upcomingAppointment.time}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                    <p className="text-sm">{upcomingAppointment.location}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <Calendar className="h-10 w-10 text-muted-foreground mb-3" />
                <h3 className="font-medium mb-1">No upcoming appointments</h3>
                <p className="text-sm text-muted-foreground mb-4">Schedule your next consultation</p>
                <Button size="sm">Book Appointment</Button>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <a href="#" className="flex items-center justify-center">
                <span>View all appointments</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5 text-blue-600" />
              Recent Orders
            </CardTitle>
            <CardDescription>Your latest purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                    <p className="text-sm">
                      {order.items} items · KSh {order.total.toLocaleString()}
                    </p>
                  </div>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <a href="#" className="flex items-center justify-center">
                <span>View order history</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>

        {/* Prescriptions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Pill className="mr-2 h-5 w-5 text-blue-600" />
              Active Prescriptions
            </CardTitle>
            <CardDescription>Your current medications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {prescriptions.map((prescription) => (
                <div key={prescription.id} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{prescription.name}</p>
                      <p className="text-sm text-muted-foreground">{prescription.dosage}</p>
                    </div>
                    <Badge variant="outline">
                      {prescription.refillsLeft} {prescription.refillsLeft === 1 ? "refill" : "refills"} left
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span>Supply remaining</span>
                      <span>{prescription.progress}%</span>
                    </div>
                    <Progress value={prescription.progress} className="h-2" />
                  </div>
                  <p className="text-xs text-muted-foreground">Expires: {prescription.expiryDate}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" asChild>
              <a href="#" className="flex items-center justify-center">
                <span>Manage prescriptions</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>

        {/* Skin Journal & Health Tips */}
        <Card className="md:col-span-2">
          <CardHeader>
            <Tabs defaultValue="journal" className="w-full">
              <div className="flex items-center justify-between">
                <CardTitle>Skin Health Tracker</CardTitle>
                <TabsList>
                  <TabsTrigger value="journal">Journal</TabsTrigger>
                  <TabsTrigger value="tips">Health Tips</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal" className="w-full">
                <TabsContent value="journal" className="mt-0">
                <div className="space-y-4">
                    {skinJournal.map((entry) => (
                    <div key={entry.id} className="flex space-x-4 border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">
                        {getMoodIcon(entry.mood)}
                        </div>
                        <div>
                        <p className="text-sm font-medium">{entry.date}</p>
                        <p className="text-sm text-muted-foreground mt-1">{entry.note}</p>
                        </div>
                    </div>
                    ))}
                    <Button size="sm" variant="outline" className="w-full mt-2">
                    Add New Entry
                    </Button>
                </div>
                </TabsContent>
                <TabsContent value="tips" className="mt-0">
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-700 mb-2">Daily Skin Care Tip</h3>
                    <p className="text-sm text-blue-600">
                        Remember to apply sunscreen daily, even on cloudy days. UV rays can penetrate clouds and cause skin
                        damage.
                    </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-green-700 mb-2">Hydration Reminder</h3>
                    <p className="text-sm text-green-600">
                        Drinking enough water helps maintain skin elasticity and prevents dryness. Aim for 8 glasses daily.
                    </p>
                    </div>
                </div>
                </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used services</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button variant="outline" className="justify-between">
              <span className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Appointment
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="justify-between">
              <span className="flex items-center">
                <Pill className="mr-2 h-4 w-4" />
                Request Prescription Refill
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="justify-between">
              <span className="flex items-center">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Shop Medications
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="justify-between">
              <span className="flex items-center">
                <Heart className="mr-2 h-4 w-4" />
                View Saved Products
              </span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default DashboardOverview

import { useState } from "react"
import {
  CalendarIcon,
  Clock,
  MapPin,
  Video,
  Plus,
  Search,
  MoreHorizontal,
  AlertCircle,
  CheckCircle2,
  XCircle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const Appointments = () => {
  const [date, setDate] = useState(new Date())
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showCalendar, setShowCalendar] = useState(false)
  const [showRescheduleDialog, setShowRescheduleDialog] = useState(false)
  const [showCancelDialog, setShowCancelDialog] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState(null)

  // Mock data
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Dermatologist",
      date: "June 15, 2025",
      time: "10:00 AM",
      duration: "30 min",
      location: "Main Clinic, Room 204",
      type: "in-person",
      status: "confirmed",
      notes: "Follow-up on acne treatment progress",
      image:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "June 28, 2025",
      time: "2:30 PM",
      duration: "45 min",
      location: "Virtual Consultation",
      type: "virtual",
      status: "confirmed",
      notes: "Initial consultation for eczema treatment",
      image:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      doctor: "Dr. Lisa Rodriguez",
      specialty: "Dermatologist",
      date: "May 10, 2025",
      time: "11:15 AM",
      duration: "30 min",
      location: "Main Clinic, Room 108",
      type: "in-person",
      status: "completed",
      notes: "Skin cancer screening",
      image:
        "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      doctor: "Dr. James Wilson",
      specialty: "Dermatologist",
      date: "April 22, 2025",
      time: "9:00 AM",
      duration: "30 min",
      location: "Branch Clinic, Room 5",
      type: "in-person",
      status: "cancelled",
      notes: "Consultation for psoriasis treatment",
      image:
        "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "completed":
        return "bg-blue-100 text-blue-700"
      case "cancelled":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "virtual":
        return <Video className="h-4 w-4 text-blue-600" />
      case "in-person":
        return <MapPin className="h-4 w-4 text-green-600" />
      default:
        return <MapPin className="h-4 w-4 text-gray-600" />
    }
  }

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch = appointment.doctor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === "all" || appointment.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const handleReschedule = (appointment) => {
    setSelectedAppointment(appointment)
    setShowRescheduleDialog(true)
  }

  const handleCancel = (appointment) => {
    setSelectedAppointment(appointment)
    setShowCancelDialog(true)
  }

  const confirmReschedule = () => {
    // Handle reschedule logic here
    setShowRescheduleDialog(false)
    setSelectedAppointment(null)
  }

  const confirmCancel = () => {
    // Handle cancel logic here
    setShowCancelDialog(false)
    setSelectedAppointment(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Appointments</h1>
          <p className="text-muted-foreground">Manage your scheduled consultations</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => setShowCalendar(!showCalendar)}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            Calendar View
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
        </div>
      </div>

      {showCalendar && (
        <Card>
          <CardHeader>
            <CardTitle>Appointment Calendar</CardTitle>
            <CardDescription>View your appointments by date</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="upcoming" className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search doctor..."
                className="pl-9 w-[200px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="upcoming" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            {filteredAppointments
              .filter((appointment) => ["confirmed", "pending"].includes(appointment.status))
              .map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  getStatusColor={getStatusColor}
                  getTypeIcon={getTypeIcon}
                  onReschedule={handleReschedule}
                  onCancel={handleCancel}
                />
              ))}
            {filteredAppointments.filter((appointment) => ["confirmed", "pending"].includes(appointment.status))
              .length === 0 && <NoAppointmentsMessage type="upcoming" />}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            {filteredAppointments
              .filter((appointment) => appointment.status === "completed")
              .map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  getStatusColor={getStatusColor}
                  getTypeIcon={getTypeIcon}
                  isCompleted
                />
              ))}
            {filteredAppointments.filter((appointment) => appointment.status === "completed").length === 0 && (
              <NoAppointmentsMessage type="completed" />
            )}
          </div>
        </TabsContent>

        <TabsContent value="cancelled" className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            {filteredAppointments
              .filter((appointment) => appointment.status === "cancelled")
              .map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  getStatusColor={getStatusColor}
                  getTypeIcon={getTypeIcon}
                  isCancelled
                />
              ))}
            {filteredAppointments.filter((appointment) => appointment.status === "cancelled").length === 0 && (
              <NoAppointmentsMessage type="cancelled" />
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Reschedule Dialog */}
      <Dialog open={showRescheduleDialog} onOpenChange={setShowRescheduleDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reschedule Appointment</DialogTitle>
            <DialogDescription>
              Select a new date and time for your appointment with {selectedAppointment?.doctor}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Select Date</label>
                <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border mt-2" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRescheduleDialog(false)}>
              Cancel
            </Button>
            <Button onClick={confirmReschedule} className="bg-blue-600 hover:bg-blue-700">
              Confirm Reschedule
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Cancel Dialog */}
      <Dialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Appointment</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel your appointment with {selectedAppointment?.doctor} on{" "}
              {selectedAppointment?.date} at {selectedAppointment?.time}?
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-red-800">Cancellation Policy</h4>
                  <p className="text-sm text-red-700 mt-1">
                    Please note that cancellations made less than 24 hours before the appointment may incur a fee.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCancelDialog(false)}>
              Keep Appointment
            </Button>
            <Button variant="destructive" onClick={confirmCancel}>
              Cancel Appointment
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const AppointmentCard = ({
  appointment,
  getStatusColor,
  getTypeIcon,
  onReschedule,
  onCancel,
  isCompleted,
  isCancelled,
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
              <img
                src={appointment.image || "/placeholder.svg"}
                alt={appointment.doctor}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <CardTitle className="text-lg">{appointment.doctor}</CardTitle>
              <CardDescription>{appointment.specialty}</CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className={getStatusColor(appointment.status)}>
              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
            </Badge>
            {!isCompleted && !isCancelled && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => onReschedule(appointment)}>
                    <Clock className="mr-2 h-4 w-4" />
                    Reschedule
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onCancel(appointment)} className="text-red-600">
                    <XCircle className="mr-2 h-4 w-4" />
                    Cancel
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{appointment.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{appointment.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            {getTypeIcon(appointment.type)}
            <span className="text-sm">{appointment.type === "virtual" ? "Virtual" : "In-person"}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{appointment.duration}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <span className="text-sm">{appointment.location}</span>
          </div>
          {appointment.notes && (
            <div className="flex items-start space-x-2">
              <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5" />
              <span className="text-sm text-muted-foreground">{appointment.notes}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        {appointment.type === "virtual" && appointment.status === "confirmed" && (
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Video className="mr-2 h-4 w-4" />
            Join Video Call
          </Button>
        )}
        {isCompleted && (
          <Button variant="outline" className="w-full">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            View Summary
          </Button>
        )}
        {isCancelled && (
          <Button variant="outline" className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Book New Appointment
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

const NoAppointmentsMessage = ({ type }) => {
  const messages = {
    upcoming: {
      title: "No upcoming appointments",
      description: "You don't have any scheduled appointments.",
      action: "Book Appointment",
    },
    completed: {
      title: "No completed appointments",
      description: "You haven't completed any appointments yet.",
      action: "Book Your First Appointment",
    },
    cancelled: {
      title: "No cancelled appointments",
      description: "You haven't cancelled any appointments.",
      action: "Book Appointment",
    },
  }

  const message = messages[type]

  return (
    <div className="col-span-full">
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12 text-center">
          <CalendarIcon className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">{message.title}</h3>
          <p className="text-muted-foreground mb-6">{message.description}</p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            {message.action}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Appointments

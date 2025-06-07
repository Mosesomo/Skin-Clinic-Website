import { motion } from "framer-motion"
import { User, Mail, Phone, MapPin, Calendar, Clock, Activity, X, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const UserProfile = ({ user, isOpen, onClose, isModal = true }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const ContentWrapper = ({ children }) => {
    if (isModal) {
      return (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">{children}</div>
        </motion.div>
      )
    }
    return <div className="container mx-auto px-4 py-8">{children}</div>
  }

  const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center space-x-3">
      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  )

  if (!isOpen || !user) return null

  const content = (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-background rounded-lg shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="relative h-32 bg-gradient-to-r from-primary to-primary/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_70%)]"></div>
        <motion.button
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="h-5 w-5" />
        </motion.button>
      </div>

      {/* Profile Content */}
      <div className="px-6 pb-6">
        {/* Avatar and Basic Info */}
        <div className="relative -mt-16 mb-8 flex items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="relative"
          >
            <div className="h-24 w-24 rounded-full border-4 border-background overflow-hidden bg-primary/10 flex items-center justify-center">
              {user.avatar ? (
                <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-full w-full object-cover" />
              ) : (
                <User className="h-12 w-12 text-primary" />
              )}
            </div>
          </motion.div>

          <div className="ml-4">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-foreground">{user.name}</h1>
              <Badge
                variant="outline"
                className={
                  user.role === "admin"
                    ? "bg-purple-100 text-purple-800 border-purple-200"
                    : user.role === "patient"
                      ? "bg-blue-100 text-blue-800 border-blue-200"
                      : user.role === "doctor"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : "bg-gray-100 text-gray-800 border-gray-200"
                }
              >
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </Badge>
            </div>
            <p className="text-muted-foreground">{user.title || "User"}</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6">
          {/* Contact & Account Information */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">User Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoItem icon={Mail} label="Email" value={user.email} />
              <InfoItem icon={Phone} label="Phone" value={user.phone || "Not provided"} />
              <InfoItem icon={MapPin} label="Address" value={user.address || "Not provided"} />
              <InfoItem icon={Calendar} label="Member Since" value={new Date(user.joinedDate).toLocaleDateString()} />
              <InfoItem
                icon={Activity}
                label="Status"
                value={
                  <Badge
                    variant="outline"
                    className={
                      user.status === "active"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : "bg-gray-100 text-gray-800 border-gray-200"
                    }
                  >
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </Badge>
                }
              />
              <InfoItem icon={Clock} label="Last Activity" value={new Date().toLocaleDateString()} />
            </div>
          </Card>

          {/* Recent Activity Summary */}
          {user.role === "patient" && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Medical Information</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Appointments</span>
                  <Badge variant="outline" className="bg-blue-100 text-blue-800">
                    {user.appointments?.length || 0}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Medical Records</span>
                  <span className="font-medium">{user.medicalHistory?.length || 0} records</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Last Visit</span>
                  <span className="font-medium">
                    {user.medicalHistory?.[0]?.date
                      ? new Date(user.medicalHistory[0].date).toLocaleDateString()
                      : "No visits yet"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Next Appointment</span>
                  <span className="font-medium">
                    {user.appointments?.[0]?.date
                      ? new Date(user.appointments[0].date).toLocaleDateString()
                      : "None scheduled"}
                  </span>
                </div>
              </div>
            </Card>
          )}

          {/* Medical History for Patients */}
          {user.role === "patient" && user.medicalHistory && user.medicalHistory.length > 0 && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Medical History</h2>
              <div className="space-y-4">
                {user.medicalHistory.slice(0, 3).map((record, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{record.condition}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{record.notes}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {new Date(record.date).toLocaleDateString()}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Upcoming Appointments for Patients */}
          {user.role === "patient" && user.appointments && user.appointments.length > 0 && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
              <div className="space-y-4">
                {user.appointments.slice(0, 3).map((appointment, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{appointment.service}</h3>
                      <p className="text-sm text-muted-foreground">{appointment.time}</p>
                    </div>
                    <Badge variant="outline">{new Date(appointment.date).toLocaleDateString()}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Admin Information */}
          {user.role === "admin" && (
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">Administrative Information</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Access Level</span>
                  <Badge className="bg-purple-100 text-purple-800">
                    <Shield className="h-3 w-3 mr-1" />
                    Administrator
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Department</span>
                  <span className="font-medium">System Administration</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Permissions</span>
                  <span className="font-medium">Full Access</span>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </motion.div>
  )

  return <ContentWrapper>{content}</ContentWrapper>
}

export default UserProfile

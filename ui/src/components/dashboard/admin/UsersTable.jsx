import { useState } from "react"
import { motion } from "framer-motion"
import { Search, MoreVertical, Mail, Calendar, Ban, Check, Eye, Edit, Trash2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import UserProfile from "./UserProfile"

// Mock users data
const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "patient",
    status: "active",
    joinedDate: "2024-01-15",
    phone: "+254 712 345 678",
    address: "123 Main St, Nairobi, Kenya",
    title: "Regular Patient",
    medicalHistory: [
      {
        condition: "Acne Treatment",
        date: "2024-02-15",
        notes: "Prescribed topical medication and recommended follow-up in 4 weeks",
      },
      {
        condition: "Skin Consultation",
        date: "2024-01-20",
        notes: "Initial consultation for skin care routine",
      },
    ],
    appointments: [
      {
        service: "Follow-up Consultation",
        date: "2024-03-15",
        time: "10:00 AM",
      },
      {
        service: "Acne Treatment",
        date: "2024-03-22",
        time: "2:30 PM",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "admin",
    status: "active",
    joinedDate: "2023-12-01",
    phone: "+254 723 456 789",
    address: "456 Oak Ave, Mombasa, Kenya",
    title: "Senior Administrator",
    medicalHistory: [],
    appointments: [],
  },
]

const UsersTable = () => {
  const [users, setUsers] = useState(mockUsers)
  const [searchQuery, setSearchQuery] = useState("")
  const [actionDialog, setActionDialog] = useState({ open: false, type: null, user: null })
  const [selectedUser, setSelectedUser] = useState(null)
  const [showProfile, setShowProfile] = useState(false)
  const [confirmDialog, setConfirmDialog] = useState({ open: false, action: null, user: null })

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleAction = (type, user) => {
    if (type === "view") {
      setSelectedUser(user)
      setShowProfile(true)
    } else if (["delete", "ban", "activate"].includes(type)) {
      setConfirmDialog({
        open: true,
        action: type,
        user: user,
      })
    } else {
      setActionDialog({
        open: true,
        type,
        user,
      })
    }
  }

  const handleConfirmAction = () => {
    const { type, user } = confirmDialog
    if (type === "deactivate") {
      setUsers(users.map((u) => (u.id === user.id ? { ...u, status: "inactive" } : u)))
    } else if (type === "activate") {
      setUsers(users.map((u) => (u.id === user.id ? { ...u, status: "active" } : u)))
    }
    setConfirmDialog({ open: false, action: null, user: null })
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const getRoleBadge = (role) => {
    const styles = {
      admin: "bg-primary text-primary-foreground",
      patient: "bg-blue-100 text-blue-800",
      doctor: "bg-green-100 text-green-800",
      staff: "bg-purple-100 text-purple-800",
    }
    return styles[role] || "bg-gray-100 text-gray-800"
  }

  const getActionIcon = (action) => {
    switch (action) {
      case "delete":
        return <Trash2 className="w-4 h-4 text-destructive" />
      case "ban":
        return <Ban className="w-4 h-4 text-destructive" />
      case "activate":
        return <Check className="w-4 h-4 text-green-600" />
      default:
        return null
    }
  }

  const getActionText = (action) => {
    switch (action) {
      case "delete":
        return "Delete User"
      case "ban":
        return "Ban User"
      case "activate":
        return "Activate User"
      default:
        return ""
    }
  }

  // Mobile user card component
  const UserCard = ({ user }) => (
    <Card className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{user.name}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              {user.email}
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => handleAction("view", user)}>
              <Eye className="w-4 h-4 mr-2" />
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleAction("edit", user)}>
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleAction(user.status === "active" ? "ban" : "activate", user)}
              className={user.status === "active" ? "text-destructive" : "text-green-600"}
            >
              {user.status === "active" ? (
                <>
                  <Ban className="w-4 h-4 mr-2" />
                  Ban User
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Activate User
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleAction("delete", user)} className="text-destructive">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm">
        <Badge className={getRoleBadge(user.role)}>{user.role}</Badge>
        <Badge variant={user.status === "active" ? "default" : "secondary"} className="capitalize">
          {user.status}
        </Badge>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Joined {user.joinedDate}</span>
        </div>
      </div>
    </Card>
  )

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
      <Card className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold">Users</h2>
          <div className="relative flex-1 sm:flex-initial max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="rounded-md border hidden md:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        {user.name}
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getRoleBadge(user.role)}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.status === "active" ? "default" : "secondary"} className="capitalize">
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joinedDate}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleAction("view", user)}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction("edit", user)}>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleAction(user.status === "active" ? "ban" : "activate", user)}
                          className={user.status === "active" ? "text-destructive" : "text-green-600"}
                        >
                          {user.status === "active" ? (
                            <>
                              <Ban className="w-4 h-4 mr-2" />
                              Ban User
                            </>
                          ) : (
                            <>
                              <Check className="w-4 h-4 mr-2" />
                              Activate User
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction("delete", user)} className="text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="grid gap-4 md:hidden">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </Card>

      {/* User Profile Modal */}
      {selectedUser && (
        <UserProfile
          user={selectedUser}
          isOpen={showProfile}
          onClose={() => {
            setShowProfile(false)
            setSelectedUser(null)
          }}
        />
      )}

      {/* Confirmation Dialog */}
      <Dialog
        open={confirmDialog.open}
        onOpenChange={() => setConfirmDialog({ open: false, action: null, user: null })}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to {getActionText(confirmDialog.action).toLowerCase()} {confirmDialog.user?.name}?
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmDialog({ open: false, action: null, user: null })}>
              Cancel
            </Button>
            <Button
              variant={confirmDialog.action === "activate" ? "default" : "destructive"}
              onClick={handleConfirmAction}
            >
              {getActionIcon(confirmDialog.action)}
              <span className="ml-2">{getActionText(confirmDialog.action)}</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

export default UsersTable

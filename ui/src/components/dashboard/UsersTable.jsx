import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  MoreVertical,
  Mail,
  Calendar,
  Shield,
  UserCheck,
  UserX,
  User,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

// Mock users data
const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    status: 'active',
    joinedDate: '2024-01-15',
  },
  {
    id: 2,
    name: 'Sarah Smith',
    email: 'sarah@example.com',
    role: 'user',
    status: 'active',
    joinedDate: '2024-02-20',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'user',
    status: 'inactive',
    joinedDate: '2024-03-01',
  },
];

const UsersTable = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [actionDialog, setActionDialog] = useState({ open: false, type: null, user: null });

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAction = (type, user) => {
    setActionDialog({
      open: true,
      type,
      user,
    });
  };

  const handleConfirmAction = () => {
    const { type, user } = actionDialog;
    if (type === 'deactivate') {
      setUsers(
        users.map((u) =>
          u.id === user.id ? { ...u, status: 'inactive' } : u
        )
      );
    } else if (type === 'activate') {
      setUsers(
        users.map((u) =>
          u.id === user.id ? { ...u, status: 'active' } : u
        )
      );
    }
    setActionDialog({ open: false, type: null, user: null });
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const getRoleBadge = (role) => {
    const roleConfig = {
      admin: { color: 'bg-purple-500', label: 'Admin' },
      user: { color: 'bg-blue-500', label: 'User' },
    };

    const config = roleConfig[role];
    return (
      <Badge
        variant="outline"
        className={`${config.color} text-white`}
      >
        {config.label}
      </Badge>
    );
  };

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
            <DropdownMenuItem>View Profile</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                handleAction(
                  user.status === 'active' ? 'deactivate' : 'activate',
                  user
                )
              }
              className={user.status === 'active' ? 'text-red-600' : 'text-green-600'}
            >
              {user.status === 'active' ? (
                <>
                  <UserX className="h-4 w-4 mr-2" />
                  Deactivate
                </>
              ) : (
                <>
                  <UserCheck className="h-4 w-4 mr-2" />
                  Activate
                </>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm">
        {getRoleBadge(user.role)}
        <Badge
          variant={user.status === 'active' ? 'default' : 'secondary'}
          className="capitalize"
        >
          {user.status}
        </Badge>
        <div className="flex items-center gap-1 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Joined {user.joinedDate}</span>
        </div>
      </div>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
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
                        <div className="text-sm text-muted-foreground">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getRoleBadge(user.role)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={user.status === 'active' ? 'default' : 'secondary'}
                      className="capitalize"
                    >
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
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            handleAction(
                              user.status === 'active' ? 'deactivate' : 'activate',
                              user
                            )
                          }
                          className={user.status === 'active' ? 'text-red-600' : 'text-green-600'}
                        >
                          {user.status === 'active' ? (
                            <>
                              <UserX className="h-4 w-4 mr-2" />
                              Deactivate
                            </>
                          ) : (
                            <>
                              <UserCheck className="h-4 w-4 mr-2" />
                              Activate
                            </>
                          )}
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

      <Dialog
        open={actionDialog.open}
        onOpenChange={() => setActionDialog({ open: false, type: null, user: null })}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {actionDialog.type === 'deactivate' ? 'Deactivate' : 'Activate'} User
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to {actionDialog.type === 'deactivate' ? 'deactivate' : 'activate'}{' '}
              {actionDialog.user?.name}? This action can be reversed later.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setActionDialog({ open: false, type: null, user: null })}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              variant={actionDialog.type === 'deactivate' ? 'destructive' : 'default'}
              onClick={handleConfirmAction}
              className="w-full sm:w-auto"
            >
              {actionDialog.type === 'deactivate' ? 'Deactivate' : 'Activate'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default UsersTable;
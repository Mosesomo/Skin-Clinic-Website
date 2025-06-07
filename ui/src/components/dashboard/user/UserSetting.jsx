import { useState } from "react"
import {
  Shield,
  Globe,
  Palette,
  Moon,
  Sun,
  Monitor,
  Smartphone,
  Mail,
  MessageSquare,
  Eye,
  Trash2,
  Download,
  AlertTriangle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const UserSettings = ({ user }) => {
  const [theme, setTheme] = useState("system")
  const [language, setLanguage] = useState("en")
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showDataDialog, setShowDataDialog] = useState(false)

  const [notifications, setNotifications] = useState({
    email: {
      appointments: true,
      orderUpdates: true,
      prescriptionReminders: true,
      promotions: false,
      newsletter: true,
    },
    sms: {
      appointments: true,
      orderUpdates: false,
      prescriptionReminders: true,
      promotions: false,
    },
    push: {
      appointments: true,
      orderUpdates: true,
      prescriptionReminders: true,
      promotions: false,
    },
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: "private",
    dataSharing: false,
    analyticsTracking: true,
    marketingCommunications: false,
    thirdPartySharing: false,
  })

  const [accessibility, setAccessibility] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    screenReader: false,
  })

  const handleNotificationChange = (category, setting, value) => {
    setNotifications((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value,
      },
    }))
  }

  const handlePrivacyChange = (setting, value) => {
    setPrivacy((prev) => ({
      ...prev,
      [setting]: value,
    }))
  }

  const handleAccessibilityChange = (setting, value) => {
    setAccessibility((prev) => ({
      ...prev,
      [setting]: value,
    }))
  }

  const handleExportData = () => {
    setShowDataDialog(true)
  }

  const handleDeleteAccount = () => {
    setShowDeleteDialog(true)
  }

  const confirmDataExport = () => {
    // Handle data export logic here
    setShowDataDialog(false)
  }

  const confirmAccountDeletion = () => {
    // Handle account deletion logic here
    setShowDeleteDialog(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and settings</p>
        </div>
      </div>

      <Tabs defaultValue="notifications" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        <TabsContent value="notifications" className="space-y-6">
          {/* Email Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-600" />
                Email Notifications
              </CardTitle>
              <CardDescription>Choose what email notifications you want to receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-appointments" className="font-medium">
                    Appointment Reminders
                  </Label>
                  <p className="text-sm text-muted-foreground">Get reminded about upcoming appointments</p>
                </div>
                <Switch
                  id="email-appointments"
                  checked={notifications.email.appointments}
                  onCheckedChange={(checked) => handleNotificationChange("email", "appointments", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-orders" className="font-medium">
                    Order Updates
                  </Label>
                  <p className="text-sm text-muted-foreground">Notifications about your order status</p>
                </div>
                <Switch
                  id="email-orders"
                  checked={notifications.email.orderUpdates}
                  onCheckedChange={(checked) => handleNotificationChange("email", "orderUpdates", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-prescriptions" className="font-medium">
                    Prescription Reminders
                  </Label>
                  <p className="text-sm text-muted-foreground">Reminders for prescription refills</p>
                </div>
                <Switch
                  id="email-prescriptions"
                  checked={notifications.email.prescriptionReminders}
                  onCheckedChange={(checked) => handleNotificationChange("email", "prescriptionReminders", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-promotions" className="font-medium">
                    Promotions & Offers
                  </Label>
                  <p className="text-sm text-muted-foreground">Special offers and promotional content</p>
                </div>
                <Switch
                  id="email-promotions"
                  checked={notifications.email.promotions}
                  onCheckedChange={(checked) => handleNotificationChange("email", "promotions", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-newsletter" className="font-medium">
                    Newsletter
                  </Label>
                  <p className="text-sm text-muted-foreground">Health tips and dermatology news</p>
                </div>
                <Switch
                  id="email-newsletter"
                  checked={notifications.email.newsletter}
                  onCheckedChange={(checked) => handleNotificationChange("email", "newsletter", checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* SMS Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-green-600" />
                SMS Notifications
              </CardTitle>
              <CardDescription>Manage SMS notifications to your phone</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms-appointments" className="font-medium">
                    Appointment Reminders
                  </Label>
                  <p className="text-sm text-muted-foreground">SMS reminders for appointments</p>
                </div>
                <Switch
                  id="sms-appointments"
                  checked={notifications.sms.appointments}
                  onCheckedChange={(checked) => handleNotificationChange("sms", "appointments", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms-orders" className="font-medium">
                    Order Updates
                  </Label>
                  <p className="text-sm text-muted-foreground">SMS updates about order status</p>
                </div>
                <Switch
                  id="sms-orders"
                  checked={notifications.sms.orderUpdates}
                  onCheckedChange={(checked) => handleNotificationChange("sms", "orderUpdates", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms-prescriptions" className="font-medium">
                    Prescription Reminders
                  </Label>
                  <p className="text-sm text-muted-foreground">SMS reminders for refills</p>
                </div>
                <Switch
                  id="sms-prescriptions"
                  checked={notifications.sms.prescriptionReminders}
                  onCheckedChange={(checked) => handleNotificationChange("sms", "prescriptionReminders", checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Push Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="mr-2 h-5 w-5 text-purple-600" />
                Push Notifications
              </CardTitle>
              <CardDescription>Browser and mobile app notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-appointments" className="font-medium">
                    Appointment Reminders
                  </Label>
                  <p className="text-sm text-muted-foreground">Push notifications for appointments</p>
                </div>
                <Switch
                  id="push-appointments"
                  checked={notifications.push.appointments}
                  onCheckedChange={(checked) => handleNotificationChange("push", "appointments", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-orders" className="font-medium">
                    Order Updates
                  </Label>
                  <p className="text-sm text-muted-foreground">Push notifications for order status</p>
                </div>
                <Switch
                  id="push-orders"
                  checked={notifications.push.orderUpdates}
                  onCheckedChange={(checked) => handleNotificationChange("push", "orderUpdates", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-prescriptions" className="font-medium">
                    Prescription Reminders
                  </Label>
                  <p className="text-sm text-muted-foreground">Push notifications for refills</p>
                </div>
                <Switch
                  id="push-prescriptions"
                  checked={notifications.push.prescriptionReminders}
                  onCheckedChange={(checked) => handleNotificationChange("push", "prescriptionReminders", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          {/* Profile Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 h-5 w-5 text-blue-600" />
                Profile Privacy
              </CardTitle>
              <CardDescription>Control who can see your profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="profile-visibility" className="font-medium">
                    Profile Visibility
                  </Label>
                  <p className="text-sm text-muted-foreground">Who can see your profile</p>
                </div>
                <Select
                  value={privacy.profileVisibility}
                  onValueChange={(value) => handlePrivacyChange("profileVisibility", value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="doctors">Doctors Only</SelectItem>
                    <SelectItem value="public">Public</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-5 w-5 text-green-600" />
                Data Sharing & Analytics
              </CardTitle>
              <CardDescription>Control how your data is used and shared</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="data-sharing" className="font-medium">
                    Anonymous Data Sharing
                  </Label>
                  <p className="text-sm text-muted-foreground">Help improve our services with anonymized data</p>
                </div>
                <Switch
                  id="data-sharing"
                  checked={privacy.dataSharing}
                  onCheckedChange={(checked) => handlePrivacyChange("dataSharing", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="analytics" className="font-medium">
                    Analytics Tracking
                  </Label>
                  <p className="text-sm text-muted-foreground">Allow analytics to improve user experience</p>
                </div>
                <Switch
                  id="analytics"
                  checked={privacy.analyticsTracking}
                  onCheckedChange={(checked) => handlePrivacyChange("analyticsTracking", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="marketing" className="font-medium">
                    Marketing Communications
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive personalized marketing content</p>
                </div>
                <Switch
                  id="marketing"
                  checked={privacy.marketingCommunications}
                  onCheckedChange={(checked) => handlePrivacyChange("marketingCommunications", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="third-party" className="font-medium">
                    Third-party Sharing
                  </Label>
                  <p className="text-sm text-muted-foreground">Share data with trusted partners</p>
                </div>
                <Switch
                  id="third-party"
                  checked={privacy.thirdPartySharing}
                  onCheckedChange={(checked) => handlePrivacyChange("thirdPartySharing", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          {/* Theme Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="mr-2 h-5 w-5 text-purple-600" />
                Theme
              </CardTitle>
              <CardDescription>Choose your preferred color scheme</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    theme === "light" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setTheme("light")}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Sun className="h-6 w-6 text-yellow-500" />
                  </div>
                  <p className="text-center text-sm font-medium">Light</p>
                </div>
                <div
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    theme === "dark" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setTheme("dark")}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Moon className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-center text-sm font-medium">Dark</p>
                </div>
                <div
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    theme === "system" ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setTheme("system")}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Monitor className="h-6 w-6 text-gray-600" />
                  </div>
                  <p className="text-center text-sm font-medium">System</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-5 w-5 text-green-600" />
                Language & Region
              </CardTitle>
              <CardDescription>Set your preferred language and regional settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="language" className="font-medium">
                    Language
                  </Label>
                  <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                </div>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="sw">Kiswahili</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="ar">العربية</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accessibility" className="space-y-6">
          {/* Accessibility Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="mr-2 h-5 w-5 text-blue-600" />
                Visual Accessibility
              </CardTitle>
              <CardDescription>Adjust visual settings for better accessibility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="high-contrast" className="font-medium">
                    High Contrast
                  </Label>
                  <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                </div>
                <Switch
                  id="high-contrast"
                  checked={accessibility.highContrast}
                  onCheckedChange={(checked) => handleAccessibilityChange("highContrast", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="large-text" className="font-medium">
                    Large Text
                  </Label>
                  <p className="text-sm text-muted-foreground">Increase text size throughout the app</p>
                </div>
                <Switch
                  id="large-text"
                  checked={accessibility.largeText}
                  onCheckedChange={(checked) => handleAccessibilityChange("largeText", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="reduced-motion" className="font-medium">
                    Reduced Motion
                  </Label>
                  <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                </div>
                <Switch
                  id="reduced-motion"
                  checked={accessibility.reducedMotion}
                  onCheckedChange={(checked) => handleAccessibilityChange("reducedMotion", checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="screen-reader" className="font-medium">
                    Screen Reader Support
                  </Label>
                  <p className="text-sm text-muted-foreground">Enhanced support for screen readers</p>
                </div>
                <Switch
                  id="screen-reader"
                  checked={accessibility.screenReader}
                  onCheckedChange={(checked) => handleAccessibilityChange("screenReader", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          {/* Data Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="mr-2 h-5 w-5 text-blue-600" />
                Data Management
              </CardTitle>
              <CardDescription>Manage your personal data and account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Export Your Data</h4>
                  <p className="text-sm text-muted-foreground">Download a copy of your personal data</p>
                </div>
                <Button variant="outline" onClick={handleExportData}>
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Account Deletion */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Danger Zone
              </CardTitle>
              <CardDescription>Irreversible actions that affect your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-red-600">Delete Account</h4>
                  <p className="text-sm text-muted-foreground">
                    Permanently delete your account and all associated data
                  </p>
                </div>
                <Button variant="destructive" onClick={handleDeleteAccount}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Data Export Dialog */}
      <Dialog open={showDataDialog} onOpenChange={setShowDataDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Export Your Data</DialogTitle>
            <DialogDescription>
              We'll prepare a download of your personal data. This may take a few minutes.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="profile" defaultChecked className="rounded" />
                <label htmlFor="profile" className="text-sm">
                  Profile information
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="medical" defaultChecked className="rounded" />
                <label htmlFor="medical" className="text-sm">
                  Medical records
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="orders" defaultChecked className="rounded" />
                <label htmlFor="orders" className="text-sm">
                  Order history
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="appointments" defaultChecked className="rounded" />
                <label htmlFor="appointments" className="text-sm">
                  Appointment history
                </label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDataDialog(false)}>
              Cancel
            </Button>
            <Button onClick={confirmDataExport} className="bg-blue-600 hover:bg-blue-700">
              Export Data
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Account Deletion Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-red-600">Delete Account</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove all your data from our
              servers.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 mr-3" />
                <div>
                  <h4 className="text-sm font-medium text-red-800">Warning</h4>
                  <ul className="text-sm text-red-700 mt-1 list-disc list-inside space-y-1">
                    <li>All your medical records will be permanently deleted</li>
                    <li>Your appointment history will be lost</li>
                    <li>Any active prescriptions will be cancelled</li>
                    <li>This action cannot be reversed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmAccountDeletion}>
              Delete Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UserSettings

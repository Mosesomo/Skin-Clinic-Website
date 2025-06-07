import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Download, Eye, Calendar, User, Pill, Activity, Plus, Search, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const MedicalRecords = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [selectedRecord, setSelectedRecord] = useState(null)

  // Mock data
  const medicalRecords = [
    {
      id: 1,
      type: "consultation",
      title: "Acne Treatment Follow-up",
      doctor: "Dr. Sarah Johnson",
      date: "2025-05-10",
      summary: "Patient showing good improvement with current tretinoin regimen. Reduced inflammatory lesions.",
      diagnosis: "Acne vulgaris - improving",
      treatment: "Continue tretinoin 0.025% nightly, add benzoyl peroxide wash",
      nextAppointment: "2025-06-10",
      attachments: ["lab_results.pdf", "photos_before_after.jpg"],
    },
    {
      id: 2,
      type: "prescription",
      title: "Tretinoin Cream Prescription",
      doctor: "Dr. Sarah Johnson",
      date: "2025-04-15",
      summary: "Prescribed tretinoin cream for acne treatment",
      medication: "Tretinoin Cream 0.025%",
      dosage: "Apply thin layer to affected areas once nightly",
      duration: "3 months",
      refills: 2,
      attachments: ["prescription.pdf"],
    },
    {
      id: 3,
      type: "lab_result",
      title: "Skin Biopsy Results",
      doctor: "Dr. Michael Chen",
      date: "2025-03-22",
      summary: "Biopsy results from suspicious mole on left shoulder",
      result: "Benign melanocytic nevus",
      recommendation: "Continue regular skin checks, no further treatment needed",
      attachments: ["biopsy_report.pdf", "pathology_images.jpg"],
    },
    {
      id: 4,
      type: "consultation",
      title: "Initial Dermatology Consultation",
      doctor: "Dr. Sarah Johnson",
      date: "2025-02-28",
      summary: "Comprehensive skin examination and treatment plan development",
      diagnosis: "Acne vulgaris, moderate severity",
      treatment: "Topical retinoid therapy, gentle skincare routine",
      nextAppointment: "2025-04-15",
      attachments: ["consultation_notes.pdf"],
    },
    {
      id: 5,
      type: "imaging",
      title: "Dermoscopy Images",
      doctor: "Dr. Lisa Rodriguez",
      date: "2025-01-15",
      summary: "Dermoscopic examination of multiple moles",
      findings: "All examined lesions appear benign",
      recommendation: "Annual follow-up recommended",
      attachments: ["dermoscopy_report.pdf", "mole_mapping.jpg"],
    },
  ]

  const prescriptions = [
    {
      id: 1,
      medication: "Tretinoin Cream 0.025%",
      prescribedBy: "Dr. Sarah Johnson",
      prescribedDate: "2025-04-15",
      dosage: "Apply thin layer once nightly",
      duration: "3 months",
      status: "active",
      refillsLeft: 2,
      expiryDate: "2025-07-15",
    },
    {
      id: 2,
      medication: "Hydrocortisone Cream 1%",
      prescribedBy: "Dr. Michael Chen",
      prescribedDate: "2025-03-10",
      dosage: "Apply twice daily as needed",
      duration: "2 weeks",
      status: "completed",
      refillsLeft: 0,
      expiryDate: "2025-03-24",
    },
    {
      id: 3,
      medication: "Clindamycin Gel 1%",
      prescribedBy: "Dr. Sarah Johnson",
      prescribedDate: "2025-02-20",
      dosage: "Apply twice daily to affected areas",
      duration: "6 weeks",
      status: "completed",
      refillsLeft: 0,
      expiryDate: "2025-04-02",
    },
  ]

  const getRecordTypeIcon = (type) => {
    switch (type) {
      case "consultation":
        return <User className="h-4 w-4 text-blue-600" />
      case "prescription":
        return <Pill className="h-4 w-4 text-green-600" />
      case "lab_result":
        return <Activity className="h-4 w-4 text-purple-600" />
      case "imaging":
        return <Eye className="h-4 w-4 text-orange-600" />
      default:
        return <FileText className="h-4 w-4 text-gray-600" />
    }
  }

  const getRecordTypeColor = (type) => {
    switch (type) {
      case "consultation":
        return "bg-blue-100 text-blue-700"
      case "prescription":
        return "bg-green-100 text-green-700"
      case "lab_result":
        return "bg-purple-100 text-purple-700"
      case "imaging":
        return "bg-orange-100 text-orange-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700"
      case "completed":
        return "bg-gray-100 text-gray-700"
      case "expired":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const filteredRecords = medicalRecords.filter((record) => {
    const matchesSearch =
      record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.doctor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = filterType === "all" || record.type === filterType
    return matchesSearch && matchesType
  })

  const handleViewRecord = (record) => {
    setSelectedRecord(record)
  }

  const handleCloseRecord = () => {
    setSelectedRecord(null)
  }

  const handleDownload = (attachment) => {
    // Handle download logic here
    console.log(`Downloading ${attachment}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Medical Records</h1>
          <p className="text-muted-foreground">View your medical history and documents</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Request Records
        </Button>
      </div>

      <Tabs defaultValue="records" className="w-full">
        <TabsList>
          <TabsTrigger value="records">Medical Records</TabsTrigger>
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 my-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search records..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="consultation">Consultations</SelectItem>
              <SelectItem value="prescription">Prescriptions</SelectItem>
              <SelectItem value="lab_result">Lab Results</SelectItem>
              <SelectItem value="imaging">Imaging</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="records" className="mt-0">
          <div className="space-y-4">
            {filteredRecords.map((record) => (
              <Card key={record.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">{getRecordTypeIcon(record.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg">{record.title}</h3>
                          <Badge className={getRecordTypeColor(record.type)}>
                            {record.type.replace("_", " ").toUpperCase()}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center space-x-2">
                            <User className="h-3 w-3" />
                            <span>{record.doctor}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(record.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{record.summary}</p>
                        {record.attachments && record.attachments.length > 0 && (
                          <div className="flex items-center space-x-2 mt-2">
                            <FileText className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {record.attachments.length} attachment{record.attachments.length > 1 ? "s" : ""}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleViewRecord(record)}>
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {filteredRecords.length === 0 && (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No records found</h3>
                  <p className="text-muted-foreground">No medical records match your search criteria.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="prescriptions" className="mt-0">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Medication</TableHead>
                    <TableHead>Prescribed By</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Refills Left</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {prescriptions.map((prescription) => (
                    <TableRow key={prescription.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{prescription.medication}</p>
                          <p className="text-sm text-muted-foreground">{prescription.dosage}</p>
                        </div>
                      </TableCell>
                      <TableCell>{prescription.prescribedBy}</TableCell>
                      <TableCell>{new Date(prescription.prescribedDate).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(prescription.status)}>
                          {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>{prescription.refillsLeft}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          {prescription.status === "active" && prescription.refillsLeft > 0 && (
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              Request Refill
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Medical Timeline</CardTitle>
              <CardDescription>Chronological view of your medical history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {medicalRecords
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((record, index) => (
                    <div key={record.id} className="flex items-start space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          {getRecordTypeIcon(record.type)}
                        </div>
                        {index < medicalRecords.length - 1 && <div className="w-px h-12 bg-gray-200 mt-2"></div>}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium">{record.title}</h4>
                          <Badge variant="outline" className={getRecordTypeColor(record.type)}>
                            {record.type.replace("_", " ")}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                          <span>{record.doctor}</span>
                          <span>•</span>
                          <span>{new Date(record.date).toLocaleDateString()}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{record.summary}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Record Details Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-blue-600 text-white p-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">{selectedRecord.title}</h2>
              <Button variant="ghost" size="icon" onClick={handleCloseRecord} className="text-white hover:bg-blue-700">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Doctor</h3>
                  <p className="text-sm">{selectedRecord.doctor}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Date</h3>
                  <p className="text-sm">{new Date(selectedRecord.date).toLocaleDateString()}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Type</h3>
                  <Badge className={getRecordTypeColor(selectedRecord.type)}>
                    {selectedRecord.type.replace("_", " ").toUpperCase()}
                  </Badge>
                </div>
                {selectedRecord.nextAppointment && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Next Appointment</h3>
                    <p className="text-sm">{new Date(selectedRecord.nextAppointment).toLocaleDateString()}</p>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Summary</h3>
                  <p className="text-sm">{selectedRecord.summary}</p>
                </div>

                {selectedRecord.diagnosis && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Diagnosis</h3>
                    <p className="text-sm">{selectedRecord.diagnosis}</p>
                  </div>
                )}

                {selectedRecord.treatment && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Treatment</h3>
                    <p className="text-sm">{selectedRecord.treatment}</p>
                  </div>
                )}

                {selectedRecord.medication && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Medication</h3>
                    <p className="text-sm">{selectedRecord.medication}</p>
                  </div>
                )}

                {selectedRecord.attachments && selectedRecord.attachments.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Attachments</h3>
                    <div className="space-y-2">
                      {selectedRecord.attachments.map((attachment, index) => (
                        <div key={index} className="flex items-center justify-between p-2 border rounded">
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{attachment}</span>
                          </div>
                          <Button variant="outline" size="sm" onClick={() => handleDownload(attachment)}>
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default MedicalRecords

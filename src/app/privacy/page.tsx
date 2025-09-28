import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Users, Database, Phone } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2">
              Privacy & Data Protection
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Your privacy and data security are our top priorities
            </p>
            <p className="text-sm text-blue-200 mt-4">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <Card className="border-l-4 border-blue-600 mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-blue-600 mt-1" />
                    <div>
                      <h2 className="text-2xl font-bold text-blue-900 mb-3">Our Commitment to Privacy</h2>
                      <p className="text-gray-700 leading-relaxed">
                        Baba Travel Solution is committed to protecting and respecting your privacy.
                        This policy explains how we collect, use, and safeguard your personal information
                        when you use our travel services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Information We Collect */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="h-6 w-6 text-green-600" />
                  <h2 className="text-3xl font-bold text-blue-900">Information We Collect</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4">Personal Information</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Full name and contact details</li>
                        <li>• Phone number and email address</li>
                        <li>• Address and identification documents</li>
                        <li>• Payment and billing information</li>
                        <li>• Travel preferences and requirements</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-blue-900 mb-4">Service Information</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Booking and reservation details</li>
                        <li>• Travel history and feedback</li>
                        <li>• Communication records</li>
                        <li>• Emergency contact information</li>
                        <li>• Special requirements or accessibility needs</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="h-6 w-6 text-green-600" />
                  <h2 className="text-3xl font-bold text-blue-900">How We Use Your Information</h2>
                </div>

                <Card className="border-0 shadow-lg mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Service Delivery</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Process your bookings and reservations</li>
                      <li>• Provide tourism, car rental, and guide services</li>
                      <li>• Handle payments and billing</li>
                      <li>• Manage your travel itineraries</li>
                      <li>• Provide customer support and assistance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Communication</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Send booking confirmations and updates</li>
                      <li>• Provide travel information and alerts</li>
                      <li>• Respond to your inquiries and requests</li>
                      <li>• Share promotional offers (with consent)</li>
                      <li>• Conduct customer satisfaction surveys</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Safety & Legal</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Ensure passenger safety and security</li>
                      <li>• Comply with legal and regulatory requirements</li>
                      <li>• Prevent fraud and unauthorized activities</li>
                      <li>• Maintain service quality and standards</li>
                      <li>• Handle emergency situations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-6 w-6 text-green-600" />
                  <h2 className="text-3xl font-bold text-blue-900">Information Sharing</h2>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                  <p className="text-blue-900 font-semibold mb-2">We do not sell your personal information.</p>
                  <p className="text-blue-800">
                    We only share your information when necessary to provide our services or as required by law.
                  </p>
                </div>

                <div className="space-y-4">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Service Partners</h3>
                      <p className="text-gray-700">
                        Hotels, transportation providers, and tour operators to fulfill your bookings.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Legal Requirements</h3>
                      <p className="text-gray-700">
                        Government authorities when required by law or to protect rights and safety.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Emergency Situations</h3>
                      <p className="text-gray-700">
                        Emergency contacts and medical professionals when passenger safety is at risk.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="h-6 w-6 text-green-600" />
                  <h2 className="text-3xl font-bold text-blue-900">Data Security</h2>
                </div>

                <Card className="border-0 shadow-lg mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Security Measures</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-700">
                        <li>• Encrypted data transmission</li>
                        <li>• Secure storage systems</li>
                        <li>• Regular security audits</li>
                        <li>• Staff training on data protection</li>
                      </ul>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Access controls and authentication</li>
                        <li>• Data backup and recovery</li>
                        <li>• Monitoring for unauthorized access</li>
                        <li>• Incident response procedures</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-green-600" />
                  <h2 className="text-3xl font-bold text-blue-900">Your Rights</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Access & Correction</h3>
                      <p className="text-gray-700 text-sm">
                        Request copies of your personal data and ask for corrections if information is inaccurate.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Data Deletion</h3>
                      <p className="text-gray-700 text-sm">
                        Request deletion of your personal data (subject to legal and business requirements).
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Marketing Opt-out</h3>
                      <p className="text-gray-700 text-sm">
                        Unsubscribe from promotional communications at any time.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">Data Portability</h3>
                      <p className="text-gray-700 text-sm">
                        Request your data in a portable format to transfer to another service provider.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-blue-900">Privacy Questions?</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this privacy policy or how we handle your data, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-blue-900">Phone:</p>
                    <p className="text-gray-700">6371286189</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Email:</p>
                    <p className="text-gray-700">madhusudan3620@gmail.com</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-semibold text-blue-900">Address:</p>
                  <p className="text-gray-700">NEAR CHAITANYA MATHA, NH-16, BARUNEI CHHAK, KHORDHA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

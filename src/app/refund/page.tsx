import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Calendar, Clock, CreditCard, AlertTriangle, CheckCircle, Phone, Mail } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2">
              Refund & Returns
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Refund & Returns Policy
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Fair and transparent refund policies for all our travel services
            </p>
            <p className="text-sm text-blue-200 mt-4">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <Card className="border-l-4 border-green-600 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <RefreshCw className="h-8 w-8 text-green-600 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-3">Our Refund Commitment</h2>
                    <p className="text-gray-700 leading-relaxed">
                      At Baba Travel Solution, we understand that travel plans can change.
                      Our refund policy is designed to be fair and transparent while considering
                      the unique nature of travel services and third-party commitments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tourism Services Refund */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-6 w-6 text-green-600" />
                <h2 className="text-3xl font-bold text-blue-900">Tourism Package Cancellations</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-0 shadow-lg border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-blue-900">Full Refund</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>30+ days before travel:</strong> 100% refund</li>
                      <li>• Medical emergencies with certificate</li>
                      <li>• Natural disasters affecting destination</li>
                      <li>• Government travel restrictions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg border-l-4 border-yellow-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-6 w-6 text-yellow-600" />
                      <h3 className="text-xl font-semibold text-blue-900">Partial Refund</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>15-29 days:</strong> 75% refund</li>
                      <li>• <strong>7-14 days:</strong> 50% refund</li>
                      <li>• <strong>3-6 days:</strong> 25% refund</li>
                      <li>• Service fees may apply</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-lg border-l-4 border-red-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                    <h3 className="text-xl font-semibold text-blue-900">No Refund Conditions</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Cancellations within 48 hours of travel</li>
                    <li>• No-show without prior notice</li>
                    <li>• Cancellation due to personal convenience after booking confirmation</li>
                    <li>• Services already consumed or partially used</li>
                    <li>• Third-party non-refundable bookings (hotels, flights)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Car Rental Refund */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-6 w-6 text-green-600" />
                <h2 className="text-3xl font-bold text-blue-900">Car Rental Cancellations</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">24+ Hours Advance</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                    <p className="text-gray-700 text-sm">Full refund for cancellations made 24 hours or more before pickup time.</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">6-24 Hours</h3>
                    <div className="text-2xl font-bold text-yellow-600 mb-2">50%</div>
                    <p className="text-gray-700 text-sm">50% refund for cancellations between 6-24 hours before pickup.</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Less than 6 Hours</h3>
                    <div className="text-2xl font-bold text-red-600 mb-2">0%</div>
                    <p className="text-gray-700 text-sm">No refund for last-minute cancellations or no-shows.</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-lg mt-6 bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Special Circumstances</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Vehicle breakdown:</strong> Full refund or replacement vehicle</li>
                    <li>• <strong>Accident coverage:</strong> Insurance claims handled separately</li>
                    <li>• <strong>Early return:</strong> Prorated refund based on unused time</li>
                    <li>• <strong>Fuel charges:</strong> Refunded if tank returned full as agreed</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Tour Guide Services */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-green-600" />
                <h2 className="text-3xl font-bold text-blue-900">Tour Guide Service Cancellations</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Cancellation Timeline</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-gray-700">48+ hours notice</span>
                        <span className="font-semibold text-green-600">100% refund</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-gray-700">24-48 hours</span>
                        <span className="font-semibold text-yellow-600">75% refund</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-gray-700">12-24 hours</span>
                        <span className="font-semibold text-orange-600">50% refund</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Less than 12 hours</span>
                        <span className="font-semibold text-red-600">No refund</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Weather & Force Majeure</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Severe weather:</strong> Full refund or rescheduling</li>
                      <li>• <strong>Guide illness:</strong> Replacement guide or full refund</li>
                      <li>• <strong>Site closures:</strong> Alternative options or refund</li>
                      <li>• <strong>Transportation issues:</strong> Adjusted service or refund</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Refund Process */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="h-6 w-6 text-green-600" />
                <h2 className="text-3xl font-bold text-blue-900">Refund Process</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                    <h3 className="font-semibold text-blue-900 mb-2">Contact Us</h3>
                    <p className="text-gray-600 text-sm">Call or email to initiate refund request</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                    <h3 className="font-semibold text-blue-900 mb-2">Documentation</h3>
                    <p className="text-gray-600 text-sm">Provide booking details and reason for cancellation</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                    <h3 className="font-semibold text-blue-900 mb-2">Processing</h3>
                    <p className="text-gray-600 text-sm">Review and approval within 2-3 business days</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                    <h3 className="font-semibold text-blue-900 mb-2">Refund</h3>
                    <p className="text-gray-600 text-sm">Amount credited within 5-7 business days</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Important Notes */}
            <Card className="border-0 shadow-lg bg-yellow-50 border-l-4 border-yellow-500 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Important Notes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Refunds will be processed to the original payment method</li>
                  <li>• Bank processing times may vary (3-10 business days)</li>
                  <li>• Service charges and booking fees may be non-refundable</li>
                  <li>• Third-party bookings subject to their individual policies</li>
                  <li>• Written confirmation required for all refund requests</li>
                  <li>• Refund eligibility determined case-by-case for unique situations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact for Refunds */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-blue-900">Refund Requests</h2>
              </div>
              <p className="text-gray-700 mb-4">
                To request a refund or discuss your specific situation, please contact us immediately:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-blue-900">Phone (Preferred):</p>
                  <p className="text-gray-700 text-lg">6371286189</p>
                  <p className="text-sm text-gray-500">Available 24/7 for urgent matters</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Email:</p>
                  <p className="text-gray-700">madhusudan3620@gmail.com</p>
                  <p className="text-sm text-gray-500">Response within 4 hours</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                <p className="text-blue-900 font-semibold">
                  💡 Tip: Contact us as early as possible for better refund options and to avoid last-minute cancellation charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

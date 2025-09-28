import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, AlertTriangle, Scale, Car, Users, Compass, Phone } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2">
              Legal Terms
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Please read these terms carefully before using our travel services
            </p>
            <p className="text-sm text-blue-200 mt-4">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="border-l-4 border-blue-600 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-blue-600 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-3">Agreement to Terms</h2>
                    <p className="text-gray-700 leading-relaxed">
                      By accessing and using the services of Baba Travel Solution, you agree to be bound by these Terms and Conditions.
                      These terms govern your use of our tourism, car rental, and tour guide services.
                      If you do not agree with any part of these terms, please do not use our services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Definitions */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="h-6 w-6 text-green-600" />
                <h2 className="text-3xl font-bold text-blue-900">Service Definitions</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Compass className="h-6 w-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-blue-900">Tourism Services</h3>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Planning, booking, and coordinating travel packages, tours, and related accommodations
                      for domestic and international destinations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Car className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-blue-900">Car Rental</h3>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Provision of vehicles for self-drive or chauffeur-driven transportation services
                      for various durations and purposes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-6 w-6 text-purple-600" />
                      <h3 className="text-lg font-semibold text-blue-900">Tour Guide Services</h3>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Professional guide services providing local expertise, cultural insights,
                      and assistance during tours and travel experiences.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Booking and Payment Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-green-600" />
                <h2 className="text-3xl font-bold text-blue-900">Booking & Payment Terms</h2>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Booking Confirmation</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• All bookings require advance confirmation and deposit</li>
                      <li>• Services are subject to availability at time of booking</li>
                      <li>• Booking confirmation will be sent via email or SMS</li>
                      <li>• Changes to confirmed bookings may incur additional charges</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Payment Terms</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Payment required at time of booking or as agreed</li>
                      <li>• Accepted payment methods: Cash, Bank Transfer, UPI, Credit/Debit Cards</li>
                      <li>• Full payment required before service commencement</li>
                      <li>• Late payment may result in service cancellation</li>
                      <li>• All prices are in Indian Rupees (INR) unless stated otherwise</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Pricing & Additional Charges</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Quoted prices are valid for 7 days unless extended</li>
                      <li>• Fuel charges, tolls, parking fees may apply separately</li>
                      <li>• Peak season and holiday surcharges may apply</li>
                      <li>• Additional services requested during travel charged separately</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Customer Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-green-600" />
                <h2 className="text-3xl font-bold text-blue-900">Customer Responsibilities</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">General Obligations</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Provide accurate personal and contact information</li>
                      <li>• Arrive on time for scheduled services</li>
                      <li>• Carry valid identification and travel documents</li>
                      <li>• Follow safety instructions and guidelines</li>
                      <li>• Respect local customs and regulations</li>
                      <li>• Report any issues immediately</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Vehicle Rental Specific</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Valid driving license required for self-drive</li>
                      <li>• Responsible for vehicle during rental period</li>
                      <li>• Report accidents or damage immediately</li>
                      <li>• Return vehicle in same condition as received</li>
                      <li>• Fuel tank to be returned as agreed</li>
                      <li>• No unauthorized modifications or use</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Limitations of Liability */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-green-600" />
                <h2 className="text-3xl font-bold text-blue-900">Limitations of Liability</h2>
              </div>

              <Card className="border-0 shadow-lg border-l-4 border-yellow-500 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Service Limitations</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Services subject to weather conditions and force majeure events</li>
                    <li>• Third-party service providers (hotels, airlines) have separate terms</li>
                    <li>• Route changes may be necessary due to road conditions or safety</li>
                    <li>• We are not liable for delays caused by traffic, weather, or external factors</li>
                    <li>• Personal belongings and valuables are customer's responsibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg border-l-4 border-red-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Liability Exclusions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Personal injury due to customer negligence or misconduct</li>
                    <li>• Loss or damage to personal property</li>
                    <li>• Indirect, incidental, or consequential damages</li>
                    <li>• Disruptions due to political unrest, natural disasters, or strikes</li>
                    <li>• Medical emergencies or pre-existing health conditions</li>
                    <li>• Activities undertaken against our advice or recommendations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Cancellation Policy */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-green-600" />
                <h2 className="text-3xl font-bold text-blue-900">Cancellation & Force Majeure</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Customer Cancellation</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Cancellation charges as per refund policy</li>
                      <li>• Written notice required for all cancellations</li>
                      <li>• No-show bookings forfeit full payment</li>
                      <li>• Partial cancellations subject to renegotiation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Force Majeure</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Natural disasters, epidemics, war</li>
                      <li>• Government restrictions or bans</li>
                      <li>• Infrastructure failures beyond our control</li>
                      <li>• Alternative arrangements or refunds offered</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="h-6 w-6 text-green-600" />
                <h2 className="text-3xl font-bold text-blue-900">Dispute Resolution</h2>
              </div>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Resolution Process</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                      <h4 className="font-semibold text-blue-900 mb-2">Direct Discussion</h4>
                      <p className="text-gray-600 text-sm">Contact us to resolve issues amicably</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                      <h4 className="font-semibold text-blue-900 mb-2">Mediation</h4>
                      <p className="text-gray-600 text-sm">Third-party mediation if needed</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                      <h4 className="font-semibold text-blue-900 mb-2">Legal Action</h4>
                      <p className="text-gray-600 text-sm">Courts in Khordha jurisdiction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Governing Law */}
            <Card className="border-0 shadow-lg bg-blue-50 border-l-4 border-blue-600 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Governing Law & Jurisdiction</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• These terms are governed by the laws of India</li>
                  <li>• Disputes subject to exclusive jurisdiction of Khordha courts</li>
                  <li>• Any modifications to terms must be in writing</li>
                  <li>• If any provision is invalid, the remainder remains in effect</li>
                  <li>• Terms may be updated periodically with notice</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-blue-900">Questions About Terms?</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you have questions about these terms and conditions or need clarification on any aspect of our services:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-blue-900">Phone:</p>
                  <p className="text-gray-700 text-lg">6371286189</p>
                  <p className="text-sm text-gray-500">Available for immediate assistance</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Email:</p>
                  <p className="text-gray-700">madhusudan3620@gmail.com</p>
                  <p className="text-sm text-gray-500">Detailed queries welcome</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-semibold text-blue-900">Office Address:</p>
                <p className="text-gray-700">NEAR CHAITANYA MATHA, NH-16, BARUNEI CHHAK, KHORDHA</p>
              </div>
              <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                <p className="text-blue-900 font-semibold">
                  📋 By using our services, you acknowledge that you have read, understood, and agree to these terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

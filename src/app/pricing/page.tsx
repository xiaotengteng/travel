import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Car,
  Users,
  Phone,
  Mail,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Award,
  Calculator
} from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2">
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Affordable Travel Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
              Quality services at competitive prices for every budget
            </p>

          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Service Categories & Pricing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of services designed to fit different budgets and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tourism Planning */}
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Compass className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Tourism Planning</h3>
                  <p className="text-gray-600">Custom tour packages and itineraries</p>
                </div>

                <div className="mb-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-blue-900">₹500 - ₹50,000</span>
                    <p className="text-sm text-gray-500">per person/package</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Day trips from ₹500</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Weekend packages from ₹2,000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Extended tours up to ₹50,000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Custom luxury packages</span>
                  </div>
                </div>

                <a href="mailto:madhusudan3620@gmail.com?subject=Tour Quote Request">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Get Tour Quote
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Car Rental */}
            <Card className="border-2 border-green-200 hover:border-green-400 transition-colors duration-300 hover:shadow-xl relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1">
                Most Popular
              </Badge>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Car className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Car Rental</h3>
                  <p className="text-gray-600">Self-drive and chauffeur services</p>
                </div>

                <div className="mb-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-blue-900">₹100 - ₹25,000</span>
                    <p className="text-sm text-gray-500">per hour/day/month</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Hourly rentals from ₹100</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Daily rentals from ₹1,200</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Monthly packages available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Premium vehicles up to ₹25,000</span>
                  </div>
                </div>

                <a href="tel:6371286189">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Check Availability
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Tour Guide */}
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Tour Guide Services</h3>
                  <p className="text-gray-600">Professional local guides</p>
                </div>

                <div className="mb-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-blue-900">₹300 - ₹15,000</span>
                    <p className="text-sm text-gray-500">per half/full day</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Half-day tours from ₹300</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Full-day tours from ₹800</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Multi-day guide services</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Specialized tours available</span>
                  </div>
                </div>

                <a href="tel:6371286189">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Book Guide
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">What Affects Pricing?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our pricing is transparent and depends on several factors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-900 mb-2">Duration</h3>
                <p className="text-gray-600 text-sm">Length of service affects total cost</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-900 mb-2">Group Size</h3>
                <p className="text-gray-600 text-sm">Better rates for larger groups</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-900 mb-2">Service Level</h3>
                <p className="text-gray-600 text-sm">Standard to premium options</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-900 mb-2">Customization</h3>
                <p className="text-gray-600 text-sm">Tailored experiences may vary</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">Why Our Pricing Offers Great Value</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">All-Inclusive</h3>
                <p className="text-gray-600">No hidden charges or surprise fees</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Quality Assured</h3>
                <p className="text-gray-600">Premium service at competitive rates</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Flexible Payment</h3>
                <p className="text-gray-600">Multiple payment options available</p>
              </div>
            </div>

            <p className="text-xl text-gray-600 mb-8">
              Ready to experience our services? Contact us for a personalized quote
              that fits your specific needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Request CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Your Custom Quote</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Tell us about your travel plans and we'll provide a detailed, no-obligation quote
            tailored to your requirements and budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="tel:6371286189"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-3 text-lg"
            >
              <Phone className="h-5 w-5" />
              Call for Instant Quote: 6371286189
            </a>
            <a
              href="mailto:madhusudan3620@gmail.com"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-3 text-lg"
            >
              <Mail className="h-5 w-5" />
              Email for Detailed Quote
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-green-400 font-semibold mb-2">Quick Response Guarantee</p>
            <p className="text-blue-200">We respond to all quote requests within 2 hours during business hours</p>
          </div>
        </div>
      </section>
    </div>
  );
}

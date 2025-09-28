import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Car,
  Users,
  MapPin,
  Shield,
  Clock,
  Star,
  CheckCircle,
  Phone,
  Mountain,
  Camera,
  Plane,
  Train,
  Home,
  Briefcase
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Travel Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Tourism, Car Rental & Tour Guide Services - Everything you need for the perfect journey
            </p>
          </div>
        </div>
      </section>

      {/* Tourism Planning Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Compass className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-blue-900">Tourism Planning</h2>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover incredible destinations with our expertly crafted tour packages.
                From serene hill stations to vibrant cultural centers, we create personalized
                itineraries that match your interests and budget.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Custom itineraries</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Group & family tours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Adventure tourism</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Cultural experiences</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Photography tours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span>Pilgrimage trips</span>
                </div>
              </div>

              <a href="tel:6371286189">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Phone className="h-4 w-4 mr-2" />
                  Plan Your Tour
                </Button>
              </a>
            </div>

            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Mountain className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-blue-900 mb-2">Hill Stations</h3>
                    <p className="text-sm text-gray-600">Scenic mountain retreats</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Camera className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-blue-900 mb-2">Cultural Tours</h3>
                    <p className="text-sm text-gray-600">Heritage & traditions</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Plane className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-blue-900 mb-2">Air Travel</h3>
                    <p className="text-sm text-gray-600">Flight bookings</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Train className="h-8 w-8 text-red-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-blue-900 mb-2">Train Tours</h3>
                    <p className="text-sm text-gray-600">Railway packages</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Rental Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600 p-3 rounded-full">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-blue-900">Car Rental Services</h2>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Travel in comfort and style with our premium vehicle rental services.
                Choose from a wide range of well-maintained vehicles with both self-drive
                and chauffeur-driven options available.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Self-Drive Options</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hatchbacks, sedans, and SUVs available</li>
                    <li>• Flexible rental periods (hourly to monthly)</li>
                    <li>• Well-maintained and sanitized vehicles</li>
                    <li>• 24/7 roadside assistance included</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Chauffeur Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional, experienced drivers</li>
                    <li>• Local area knowledge and navigation</li>
                    <li>• Airport transfers and city tours</li>
                    <li>• Corporate and event transportation</li>
                  </ul>
                </div>
              </div>

              <a href="tel:6371286189">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  <Car className="h-4 w-4 mr-2" />
                  Rent Vehicle Now
                </Button>
              </a>
            </div>

            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-semibold text-blue-900">Corporate Travel</h3>
                    </div>
                    <p className="text-gray-600 mb-4">Professional transportation for business meetings, conferences, and corporate events.</p>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <Star className="h-4 w-4" />
                      <span>Premium service guaranteed</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Home className="h-6 w-6 text-green-600" />
                      <h3 className="text-xl font-semibold text-blue-900">Family Trips</h3>
                    </div>
                    <p className="text-gray-600 mb-4">Comfortable and safe vehicles perfect for family vacations and outings.</p>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <Shield className="h-4 w-4" />
                      <span>Safety first approach</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Guide Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-blue-900">Professional Tour Guides</h2>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enhance your travel experience with our knowledgeable and passionate tour guides.
                They bring destinations to life with fascinating stories, local insights,
                and cultural expertise you won't find in guidebooks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Local Expertise</h3>
                  <p className="text-sm text-gray-600">Deep knowledge of local history, culture, and hidden gems</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Licensed Guides</h3>
                  <p className="text-sm text-gray-600">Certified and experienced professional tour guides</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Multi-Language</h3>
                  <p className="text-sm text-gray-600">Guides available in multiple languages for international visitors</p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">Storytelling</h3>
                  <p className="text-sm text-gray-600">Engaging narratives that make history come alive</p>
                </div>
              </div>

              <a href="tel:6371286189">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                  <Users className="h-4 w-4 mr-2" />
                  Book Tour Guide
                </Button>
              </a>
            </div>

            <div className="lg:w-1/2">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-green-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Guide Services Include:</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">City Walking Tours</h4>
                        <p className="text-sm text-gray-600">Explore historic districts and cultural landmarks</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mountain className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Adventure Expeditions</h4>
                        <p className="text-sm text-gray-600">Guided trekking and outdoor activities</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Camera className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Photography Tours</h4>
                        <p className="text-sm text-gray-600">Capture the best shots with expert guidance</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Flexible Scheduling</h4>
                        <p className="text-sm text-gray-600">Half-day, full-day, or custom duration tours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Our Services?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to customize your perfect travel experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6371286189"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call: 6371286189
            </a>
            <a
              href="mailto:madhusudan3620@gmail.com"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Compass,
  Car,
  Users,
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  Award,
  ChevronRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm">
              Premium Travel Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your <span className="text-green-400">Trusted</span> Travel Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Experience seamless tourism, reliable car rentals, and expert tour guide services
              across incredible destinations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="tel:6371286189">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Book Now
                </Button>
              </a>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-green-400 hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                >
                  Learn More
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive travel solutions designed to make your journey unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tourism Service */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Tourism Planning</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Expertly crafted travel packages and itineraries for domestic and international destinations.
                  From hill stations to beaches, we cover it all.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Custom tour packages</li>
                  <li>• Group & family tours</li>
                  <li>• Adventure tourism</li>
                  <li>• Cultural experiences</li>
                </ul>
                <Link href="/services">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    Explore Tours
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Car Rental Service */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Car className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Car Rental</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Premium vehicle rental services with both self-drive and chauffeur options.
                  Well-maintained fleet for comfortable journeys.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Self-drive rentals</li>
                  <li>• Chauffeur services</li>
                  <li>• Multiple vehicle types</li>
                  <li>• 24/7 roadside assistance</li>
                </ul>
                <a href="tel:6371286189">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    Rent Vehicle
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Tour Guide Service */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-full w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Tour Guide Services</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Professional, knowledgeable tour guides who bring destinations to life with
                  local insights and cultural expertise.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li>• Licensed tour guides</li>
                  <li>• Local expertise</li>
                  <li>• Multi-language support</li>
                  <li>• Cultural storytelling</li>
                </ul>
                <a href="tel:6371286189">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                    Book Guide
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80')"
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Choose Baba Travel Solution?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence makes us the preferred choice for travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Safety First</h3>
              <p className="text-gray-600 text-sm">Your safety and security is our top priority on every journey</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">5-Star Service</h3>
              <p className="text-gray-600 text-sm">Premium quality service that exceeds your expectations</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Clock className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock customer support for peace of mind</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">Deep local knowledge for authentic travel experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Explore Amazing Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From mountain retreats to cultural wonders, discover the world with our expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Mountain Adventures"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Mountain Adventures</h3>
                <p className="text-sm">Breathtaking hill stations and trekking expeditions</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80"
                alt="Cultural Heritage"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Cultural Heritage</h3>
                <p className="text-sm">Historic sites and architectural marvels</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                alt="Coastal Paradise"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Coastal Paradise</h3>
                <p className="text-sm">Pristine beaches and island getaways</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Wildlife Safari"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Wildlife Safari</h3>
                <p className="text-sm">Thrilling wildlife encounters and nature reserves</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="City Tours"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">City Tours</h3>
                <p className="text-sm">Urban exploration and metropolitan experiences</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Desert Adventures"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Desert Adventures</h3>
                <p className="text-sm">Golden dunes and desert camping experiences</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from travelers who've experienced our exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Absolutely amazing experience! The mountain trek was perfectly organized and our guide was incredibly knowledgeable. Baba Travel Solution made our dream vacation a reality."
                </p>
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold">
                    R
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Rajesh Sharma</h4>
                    <p className="text-gray-500 text-sm">Mountain Adventure Tour</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "The car rental service was exceptional! Clean, comfortable vehicle and the driver was very professional. Great value for money and excellent customer service throughout."
                </p>
                <div className="flex items-center">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold">
                    P
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Priya Patel</h4>
                    <p className="text-gray-500 text-sm">Car Rental Service</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Our family trip to Kerala was perfectly planned. The local guide showed us hidden gems we never would have found on our own. Highly recommend their services!"
                </p>
                <div className="flex items-center">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold">
                    A
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Amit Kumar</h4>
                    <p className="text-gray-500 text-sm">Cultural Heritage Tour</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Fantastic beach vacation package! Everything was well-coordinated from hotel bookings to local transportation. The team was available 24/7 for any assistance."
                </p>
                <div className="flex items-center">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold">
                    S
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Sunita Mehta</h4>
                    <p className="text-gray-500 text-sm">Coastal Paradise Package</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 5 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Professional and reliable service! The tour guide was excellent and made our historical tour very informative and enjoyable. Will definitely book again."
                </p>
                <div className="flex items-center">
                  <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold">
                    V
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Vikram Singh</h4>
                    <p className="text-gray-500 text-sm">Historical City Tour</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 6 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "Great experience overall! The desert safari was thrilling and well-organized. The only minor issue was a slight delay in pickup, but everything else was perfect."
                </p>
                <div className="flex items-center">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold">
                    M
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Meera Gupta</h4>
                    <p className="text-gray-500 text-sm">Desert Adventure Tour</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-lg p-8 inline-block">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-3xl font-bold text-blue-900">4.8/5</span>
              </div>
              <p className="text-blue-800 font-semibold">Based on 150+ customer reviews</p>
              <p className="text-blue-600 text-sm mt-2">Join our satisfied customers and create your own amazing travel memories!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to plan your perfect trip or book our services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Call Us</p>
                <p className="text-blue-200">6371286189</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Email Us</p>
                <p className="text-blue-200">madhusudan3620@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="bg-white/20 p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Visit Us</p>
                <p className="text-blue-200">KHORDHA</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Contact Us Now
              </Button>
            </Link>
            <a href="mailto:madhusudan3620@gmail.com?subject=Quote Request - Baba Travel Solution">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-green-400 hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold"
              >
                Get Quote
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

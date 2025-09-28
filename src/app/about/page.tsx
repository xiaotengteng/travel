import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Award, Users, Clock, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2">
              About Our Company
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Travel Partner
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Baba Travel Solution - Where every journey becomes a memorable experience
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-8 text-center">
                Founded with a passion for creating unforgettable travel experiences,
                <strong className="text-blue-900"> Baba Travel Solution</strong> has been serving travelers
                with dedication, reliability, and local expertise.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                  <p className="mb-6">
                    To provide exceptional travel services that combine safety, comfort, and authentic local experiences.
                    We believe that every journey should be more than just transportation—it should be an adventure
                    filled with discovery and joy.
                  </p>

                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
                  <p>
                    To become the most trusted and preferred travel partner in the region, known for our commitment
                    to excellence, customer satisfaction, and creating lasting memories for every traveler.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600 mt-1" />
                      <span><strong>Safety First:</strong> Your security is our top priority</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-green-600 mt-1" />
                      <span><strong>Personal Touch:</strong> Customized service for every customer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-green-600 mt-1" />
                      <span><strong>Local Expertise:</strong> Deep knowledge of destinations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-green-600 mt-1" />
                      <span><strong>24/7 Support:</strong> Always here when you need us</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reliability */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Reliability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Count on us for punctual, dependable service every time. Your trust is our foundation.
                </p>
              </CardContent>
            </Card>

            {/* Safety */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Heart className="h-8 w-8 text-green-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Safety</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your well-being is paramount. We maintain the highest safety standards in all our services.
                </p>
              </CardContent>
            </Card>

            {/* Local Expertise */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Local Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deep local knowledge and connections provide you with authentic, insider experiences.
                </p>
              </CardContent>
            </Card>

            {/* Customer Focus */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Star className="h-8 w-8 text-orange-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Customer Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your satisfaction drives everything we do. We go above and beyond to exceed expectations.
                </p>
              </CardContent>
            </Card>

            {/* Innovation */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Award className="h-8 w-8 text-red-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We continuously strive for excellence in every aspect of our service delivery.
                </p>
              </CardContent>
            </Card>

            {/* Integrity */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                  <Clock className="h-8 w-8 text-teal-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Integrity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Honest, transparent business practices build lasting relationships with our customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let us be your trusted partner for your next adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6371286189"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call: 6371286189
            </a>
            <a
              href="mailto:madhusudan3620@gmail.com"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

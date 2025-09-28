"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Baba Travel Solution
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Ready to plan your perfect journey? We're here to help you every step of the way
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Get In Touch With Us</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Have questions about our services or ready to book your next adventure?
                We're available to assist you with all your travel needs.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">Phone</h3>
                        <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                        <a
                          href="tel:6371286189"
                          className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                        >
                          6371286189
                        </a>
                        <p className="text-sm text-gray-500 mt-1">Available 24/7 for emergencies</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-600 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">Email</h3>
                        <p className="text-gray-600 mb-2">Send us your detailed requirements</p>
                        <a
                          href="mailto:madhusudan3620@gmail.com"
                          className="text-lg font-semibold text-green-600 hover:text-green-700 transition-colors break-all"
                        >
                          madhusudan3620@gmail.com
                        </a>
                        <p className="text-sm text-gray-500 mt-1">We respond within 2 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">Address</h3>
                        <p className="text-gray-600 mb-2">Visit our office for in-person consultation</p>
                        <address className="text-lg text-gray-700 not-italic leading-relaxed">
                          NEAR CHAITANYA MATHA,<br />
                          NH-16, BARUNEI CHHAK,<br />
                          KHORDHA
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-600 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">Business Hours</h3>
                        <div className="space-y-2 text-gray-700">
                          <div className="flex justify-between">
                            <span>Monday - Saturday:</span>
                            <span className="font-semibold">9:00 AM - 8:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sunday:</span>
                            <span className="font-semibold">10:00 AM - 6:00 PM</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">Emergency services available 24/7</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                    <h2 className="text-3xl font-bold text-blue-900">Send Us a Message</h2>
                  </div>

                  {isSubmitted && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-blue-900 font-semibold">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-blue-900 font-semibold">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-blue-900 font-semibold">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-blue-900 font-semibold">
                        Service Interested In
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="tourism">Tourism Planning</option>
                        <option value="car-rental">Car Rental</option>
                        <option value="tour-guide">Tour Guide Services</option>
                        <option value="combination">Combination Package</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-blue-900 font-semibold">
                        Your Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2 min-h-[120px]"
                        placeholder="Tell us about your travel plans, requirements, or any questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      * Required fields. We'll respond to your inquiry within 2 hours during business hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl text-gray-600">Choose the fastest way to reach us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Call Now</h3>
                <p className="text-gray-600 mb-4">Speak directly with our travel experts</p>
                <a href="tel:6371286189">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    Call 6371286189
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-400 transition-colors duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Email Us</h3>
                <p className="text-gray-600 mb-4">Send detailed requirements</p>
                <a href="mailto:madhusudan3620@gmail.com">
                  <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                    Send Email
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Schedule Visit</h3>
                <p className="text-gray-600 mb-4">Book an in-person consultation</p>
                <a href="tel:6371286189">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                    Book Appointment
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-50 border-t-4 border-red-500">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-4">Emergency Support</h3>
          <p className="text-red-700 mb-4">
            If you're currently traveling and need emergency assistance, call us immediately:
          </p>
          <a
            href="tel:6371286189"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            <Phone className="h-5 w-5" />
            Emergency: 6371286189
          </a>
          <p className="text-sm text-red-600 mt-3">Available 24/7 for travelers in need</p>
        </div>
      </section>
    </div>
  );
}

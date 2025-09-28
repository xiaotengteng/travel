"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  MapPin,
  Car,
  Users,
  CreditCard,
  Phone,
  Mail,
  Clock,
  Shield,
  CheckCircle,
  Plus,
  Minus
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    category: "Booking & Reservations",
    icon: <CheckCircle className="h-5 w-5" />,
    questions: [
      {
        q: "How do I book a tour with Baba Travel Solution?",
        a: "You can book a tour by calling us at 6371286189, emailing us at madhusudan3620@gmail.com, or visiting our office in Khordha. We'll help you choose the perfect package and handle all arrangements."
      },
      {
        q: "How far in advance should I book my trip?",
        a: "We recommend booking at least 2-3 weeks in advance for domestic trips and 4-6 weeks for international tours. This ensures better availability and pricing. However, we can also accommodate last-minute bookings based on availability."
      },
      {
        q: "Can I modify or cancel my booking?",
        a: "Yes, modifications and cancellations are possible based on our policy. Please refer to our refund policy page for detailed terms. Generally, changes made 48+ hours before travel have minimal charges."
      },
      {
        q: "Do you offer group discounts?",
        a: "Yes! We offer attractive discounts for groups of 8 or more people. The discount varies based on group size and chosen package. Contact us for a customized group quote."
      }
    ]
  },
  {
    category: "Car Rental Services",
    icon: <Car className="h-5 w-5" />,
    questions: [
      {
        q: "What types of vehicles do you offer for rental?",
        a: "We offer a wide range of vehicles including hatchbacks, sedans, SUVs, and luxury cars. All vehicles are well-maintained, sanitized, and come with necessary documentation."
      },
      {
        q: "Do you provide chauffeur-driven cars?",
        a: "Yes, we offer both self-drive and chauffeur-driven options. Our professional drivers are experienced, licensed, and familiar with local routes."
      },
      {
        q: "What documents do I need for car rental?",
        a: "For self-drive: Valid driving license, ID proof (Aadhar/Passport), and address proof. For chauffeur-driven: Just ID proof is sufficient."
      },
      {
        q: "Is fuel included in the rental price?",
        a: "Fuel is generally not included in the base rental price. However, for chauffeur-driven long-distance trips, we can provide packages that include fuel costs."
      }
    ]
  },
  {
    category: "Tour Guide Services",
    icon: <Users className="h-5 w-5" />,
    questions: [
      {
        q: "Are your tour guides licensed and experienced?",
        a: "Yes, all our tour guides are licensed professionals with extensive local knowledge and years of experience. They speak multiple languages and are trained in customer service."
      },
      {
        q: "Can I request a guide who speaks a specific language?",
        a: "Absolutely! We have guides who speak Hindi, English, Odia, and several other regional languages. Please specify your language preference when booking."
      },
      {
        q: "What areas do your tour guides cover?",
        a: "Our guides cover all major tourist destinations in Odisha and neighboring states. For specific locations, please check with us during booking."
      },
      {
        q: "How much do tour guide services cost?",
        a: "Guide charges vary based on duration and location. Half-day tours start from ₹300, full-day from ₹800. Contact us for detailed pricing based on your requirements."
      }
    ]
  },
  {
    category: "Payments & Pricing",
    icon: <CreditCard className="h-5 w-5" />,
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, bank transfers, UPI payments, and major credit/debit cards. For large bookings, we also accept cheque payments."
      },
      {
        q: "Do I need to pay the full amount upfront?",
        a: "For most bookings, we require 30-50% advance payment to confirm your reservation. The balance can be paid before or during the trip as agreed."
      },
      {
        q: "Are there any hidden charges?",
        a: "No, we believe in transparent pricing. All charges including taxes, tolls, parking fees (where applicable) are clearly mentioned in your quotation."
      },
      {
        q: "Do your prices include GST?",
        a: "GST is applicable as per government regulations and will be clearly mentioned in your invoice. All quoted prices typically include applicable taxes unless specified otherwise."
      }
    ]
  },
  {
    category: "Safety & Support",
    icon: <Shield className="h-5 w-5" />,
    questions: [
      {
        q: "What safety measures do you have in place?",
        a: "We prioritize safety with regular vehicle maintenance, verified drivers, 24/7 tracking, emergency contacts, and comprehensive insurance coverage for all our services."
      },
      {
        q: "Do you provide 24/7 customer support?",
        a: "Yes, we offer round-the-clock support for travelers. You can reach us at 6371286189 for any emergencies or assistance during your trip."
      },
      {
        q: "What happens in case of vehicle breakdown?",
        a: "We provide 24/7 roadside assistance and replacement vehicles. Our support team will immediately arrange alternative transportation to minimize any inconvenience."
      },
      {
        q: "Are your services insured?",
        a: "Yes, all our vehicles and services are comprehensively insured. We also recommend travel insurance for customers undertaking longer journeys."
      }
    ]
  },
  {
    category: "General Information",
    icon: <HelpCircle className="h-5 w-5" />,
    questions: [
      {
        q: "What areas do you cover for travel services?",
        a: "We primarily cover Odisha and neighboring states. For specific destinations or interstate travel, please contact us to confirm coverage and pricing."
      },
      {
        q: "Do you arrange accommodation and meals?",
        a: "Yes, we can arrange hotel bookings and meal plans as part of our tour packages. We work with trusted partners to ensure quality accommodation."
      },
      {
        q: "What is your operating hours?",
        a: "Our office operates Monday-Saturday 9 AM to 8 PM, Sunday 10 AM to 6 PM. However, our emergency support is available 24/7 for traveling customers."
      },
      {
        q: "Do you offer customized tour packages?",
        a: "Absolutely! We specialize in creating customized itineraries based on your preferences, budget, and time constraints. Contact us to discuss your requirements."
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setOpenItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
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
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Questions Answered
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Find answers to common questions about our travel services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Everything You Need to Know</h2>
              <p className="text-lg text-gray-600">
                Can't find what you're looking for? Contact us directly and we'll be happy to help!
              </p>
            </div>

            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-600 text-white p-2 rounded-full">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const itemId = `${categoryIndex}-${faqIndex}`;
                      const isOpen = openItems.includes(itemId);

                      return (
                        <Card key={faqIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <CardContent className="p-0">
                            <button
                              onClick={() => toggleItem(itemId)}
                              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                            >
                              <h4 className="text-lg font-semibold text-blue-900 pr-4">
                                {faq.q}
                              </h4>
                              {isOpen ? (
                                <Minus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                              ) : (
                                <Plus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                              )}
                            </button>

                            {isOpen && (
                              <div className="px-6 pb-6">
                                <div className="border-t border-gray-200 pt-4">
                                  <p className="text-gray-700 leading-relaxed">
                                    {faq.a}
                                  </p>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our travel experts are here to help you plan the perfect trip
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Call Us</h3>
                  <p className="text-gray-600 mb-4">Speak with our travel experts</p>
                  <a
                    href="tel:6371286189"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"
                  >
                    6371286189
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 hover:border-green-400 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Email Us</h3>
                  <p className="text-gray-600 mb-4">Get detailed information</p>
                  <a
                    href="mailto:madhusudan3620@gmail.com"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"
                  >
                    Send Email
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Visit Office</h3>
                  <p className="text-gray-600 mb-4">Personal consultation</p>
                  <span className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold">
                    KHORDHA
                  </span>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-blue-50 rounded-lg p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">Quick Response Guarantee</h3>
              </div>
              <p className="text-blue-800">
                We respond to all inquiries within 2 hours during business hours (9 AM - 8 PM)
              </p>
              <p className="text-blue-600 text-sm mt-2">
                Emergency support available 24/7 for traveling customers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Calendar, Heart, ArrowRight, Shield, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-xl text-primary">HealNow</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#security" className="text-gray-600 hover:text-primary transition-colors">
              Security
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Log in
            </Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Healthcare Reimagined: Accessible, Confidential, Efficient
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Leveraging AI and Digital Tools to Transform Your Health Experience
              </p>
              <Button size="lg" className="px-8 py-6 text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our platform combines cutting-edge technology with compassionate care
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-blue-100 p-4 rounded-full mb-4">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">AI Symptom Analysis</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  <p>
                    Instant, accurate symptom insights powered by advanced AI algorithms to help identify potential
                    health concerns.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-blue-100 p-4 rounded-full mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Doctor Appointments</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  <p>
                    Seamless online consultations with certified healthcare professionals available 24/7 for your
                    convenience.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-blue-100 p-4 rounded-full mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Mental Health Support</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  <p>
                    Confidential, compassionate care from specialized mental health professionals in a safe digital
                    environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Getting started is simple and straightforward</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
                <p className="text-gray-600">Sign up and complete your health profile with relevant medical history.</p>
              </div>

              <div className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Describe Symptoms</h3>
                <p className="text-gray-600">Use our AI tool to analyze your symptoms or schedule a consultation.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Receive Care</h3>
                <p className="text-gray-600">Get personalized treatment plans and follow-up care from our providers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust and Security Section */}
        <section id="security" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trust and Security</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Your privacy and data security are our top priorities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">HIPAA Compliant</h3>
                  <p className="text-gray-600">
                    Our platform adheres to all HIPAA regulations, ensuring your medical information remains
                    confidential and secure.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
                  <p className="text-gray-600">
                    All communications between you and healthcare providers are protected with advanced encryption
                    technology.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
                  <p className="text-gray-600">
                    Your health data is stored securely and never shared with third parties without your explicit
                    consent.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Verified Providers</h3>
                  <p className="text-gray-600">
                    All healthcare professionals on our platform are licensed, credentialed, and thoroughly vetted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real experiences from people who've transformed their healthcare journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    "The AI symptom checker helped me identify a potential issue that I might have otherwise ignored.
                    The doctor I connected with was compassionate and thorough."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-200 mr-3"></div>
                    <div>
                      <p className="font-semibold">Sarah J.</p>
                      <p className="text-sm text-gray-500">Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    "As someone with anxiety about doctor visits, this platform has been a game-changer. I can get the
                    care I need without the added stress."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-200 mr-3"></div>
                    <div>
                      <p className="font-semibold">Michael T.</p>
                      <p className="text-sm text-gray-500">Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4">
                    "The mental health resources available here have made a significant difference in my life.
                    Professional, accessible, and truly caring."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-200 mr-3"></div>
                    <div>
                      <p className="font-semibold">Emily R.</p>
                      <p className="text-sm text-gray-500">Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Call-to-Action Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of users who have already discovered a better way to manage their health
            </p>
            <Button size="lg" className="px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </div>

          <div className="border-t pt-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-xl text-primary">HealNow</span>
                </div>
                <p className="text-gray-600">Transforming healthcare through technology and compassion.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-primary">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      For Providers
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      HIPAA Compliance
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Accessibility
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t mt-12 pt-8 text-center text-gray-600">
              <p>© {new Date().getFullYear()} HealNow. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


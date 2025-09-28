
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "./header/page"
import {
  Phone,
  MessageCircle,
  Calculator,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  CreditCard,
  PiggyBank,
  Home,
  Car,
  Briefcase,
  X,
  Menu,
  ChevronDown,
  Users,
  Award,
  Mail,
  MapPin,
} from "lucide-react"
import Link from "next/link"

const useAOS = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll("[data-aos]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

const products = [
  {
    id: "loan-against-property",
    title: "Loan Against Property",
    description: "Unlock the value of your property with competitive rates and flexible terms.",
    icon: Home,
    features: ["Lower Interest Rates", "Higher Loan Amounts", "Flexible Usage", "Long Tenure"],
    rate: "9.5% onwards",
    amount: "Up to ₹5 Cr",
    tenure: "Up to 20 years",
  },
  {
    id: "business-loan",
    title: "Business Loan",
    description: "Fuel your business growth with quick and hassle-free business financing.",
    icon: Briefcase,
    features: ["Quick Approval", "Minimal Documentation", "Flexible Repayment", "No Collateral"],
    rate: "12% onwards",
    amount: "Up to ₹50 Lakh",
    tenure: "Up to 5 years",
  },
  {
    id: "personal-loan",
    title: "Personal Loan",
    description: "Meet your personal financial needs with our instant personal loans.",
    icon: CreditCard,
    features: ["Instant Approval", "No Collateral", "Flexible EMI", "Quick Disbursal"],
    rate: "10.5% onwards",
    amount: "Up to ₹50 Lakh",
    tenure: "Up to 5 years",
  },
  {
    id: "home-loan",
    title: "Home Loan",
    description: "Make your dream home a reality with our attractive home loan offers.",
    icon: Home,
    features: ["Low Interest Rates", "Tax Benefits", "Long Tenure", "Quick Processing"],
    rate: "8.5% onwards",
    amount: "Up to ₹10 Cr",
    tenure: "Up to 30 years",
  },
  {
    id: "working-capital",
    title: "Working Capital Loan",
    description: "Maintain smooth business operations with our working capital solutions.",
    icon: TrendingUp,
    features: ["Flexible Credit Limit", "Pay Only for Usage", "Quick Access", "Easy Renewal"],
    rate: "11% onwards",
    amount: "Up to ₹2 Cr",
    tenure: "Up to 3 years",
  },
  {
    id: "used-car-loan",
    title: "Used Car Loan",
    description: "Drive your dream car with our competitive used car financing options.",
    icon: Car,
    features: ["Up to 85% Financing", "Quick Approval", "Flexible Tenure", "Minimal Documentation"],
    rate: "9.75% onwards",
    amount: "Up to ₹1 Cr",
    tenure: "Up to 7 years",
  },
]

const faqs = [
  {
    question: "What documents are required for loan application?",
    answer:
      "Basic documents include identity proof, address proof, income proof, and bank statements. Specific requirements may vary based on the loan type.",
  },
  {
    question: "How long does the loan approval process take?",
    answer:
      "Our digital process ensures quick approvals. Most loans are approved within 24-48 hours of document submission.",
  },
  {
    question: "Can I prepay my loan without penalty?",
    answer:
      "Yes, we offer flexible prepayment options with minimal or no prepayment charges on most of our loan products.",
  },
  {
    question: "What is the minimum credit score required?",
    answer:
      "While we consider applications with various credit scores, a score of 650+ increases your chances of approval with better terms.",
  },
  {
    question: "Do you offer doorstep service?",
    answer: "Yes, we provide doorstep document collection and verification services for your convenience.",
  },
]

const blogs = [
  {
    title: "5 Tips to Improve Your Credit Score",
    excerpt: "Learn effective strategies to boost your credit score and get better loan terms.",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/credit-score-improvement-tips.jpg",
  },
  {
    title: "Home Loan vs Rent: Making the Right Choice",
    excerpt: "Compare the benefits of buying vs renting to make an informed decision.",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/home-loan-vs-rent-comparison.jpg",
  },
  {
    title: "Business Loan Guide for Startups",
    excerpt: "Everything you need to know about securing funding for your startup.",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/startup-business-loan-guide.jpg",
  },
]

const bankLogos = [
  { name: "BOB", logo: "BOB" },
  { name: "HDFC", logo: "HDFC" },
  { name: "ICICI", logo: "ICICI" },
  { name: "KOTAK", logo: "KOTAK" },
  { name: "SBI", logo: "SBI" },
  { name: "AXIS", logo: "AXIS" },
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [currentBankIndex, setCurrentBankIndex] = useState(0)
  const [showEMICalculator, setShowEMICalculator] = useState(false)

  useAOS()



  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content:
        "Penny Farm Finance helped me expand my business with their quick business loan approval. Excellent service!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "Got my home loan approved in just 2 days. The team was very supportive throughout the process.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Entrepreneur",
      content: "Their working capital loan helped me manage my cash flow effectively. Highly recommended!",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBankIndex((prev) => (prev + 1) % bankLogos.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">

      <Header />
      {/* Floating Mobile Buttons */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <div className="flex justify-center items-center gap-3 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg">
          <Button
            size="lg"
            className="w-14 h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
            onClick={() => setShowEMICalculator(true)}
          >
            <Calculator className="w-6 h-6" />
          </Button>
          <Button
            size="lg"
            className="w-14 h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
            onClick={() => window.location.href = 'tel:+919664982919'}
          >
            <Phone className="w-6 h-6" />
          </Button>
          <Button
            size="lg"
            className="w-14 h-14 rounded-xl bg-green-500 hover:bg-green-600 text-white shadow-xl"
            onClick={() => window.location.href = 'https://wa.me/919664982919'}
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      </div>
      {/* <Button
        className="floating-emi-btn bg-primary hover:bg-primary/90 text-primary-foreground md:hidden"
        onClick={() => setShowEMICalculator(true)}
      >
        <Calculator className="w-6 h-6" />
      </Button> */}

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" data-aos="aos-fade-up">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                India's Trusted Financial Partner
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Your Financial Dreams, <span className="gradient-text">Our Priority</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Get instant approvals, competitive rates, and personalized financial solutions. Join over 50,000+
                satisfied customers who trust us with their financial needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow"
                  onClick={() => window.open('tel:+919664982919', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent"
                  onClick={() => window.open('https://wa.me/919664982919', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-8">
                  <div className="flex -space-x-2 sm:-space-x-3">
                    {[1, 2, 3, 4].map((num) => (
                      <div
                        key={num}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-white overflow-hidden ring-1 sm:ring-2 ring-primary/20 hover-scale"
                      >
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${num}`}
                          alt={`User ${num}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[royalblue] from-primary to-secondary border-2 sm:border-4 border-white flex items-center justify-center text-white text-xs sm:text-sm font-bold ring-1 sm:ring-2 ring-secondary/30 hover-scale">
                      500+
                    </div>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-center sm:text-left">Join 500+ satisfied clients in their financial journey</p>
                </div>
                
              </div>
            </div>

            <div data-aos="aos-fade-left">
              <img
                src="/happy-family-with-financial-advisor-discussing-loa.jpg"
                alt="Financial Advisory"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30" data-aos="aos-fade-up">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">About Us</Badge>
              <h2 className="text-4xl font-bold mb-6">Your Money Concerns are now Completely Resolved.</h2>
              <p className="text-lg text-muted-foreground mb-6">
              Penny Farm Finance is a preferred partner of leading financial institutions, offering you the most competitive rates throughout our array of loans. Our nearly two decades of industry experience have given us the knowledge and skills necessary to choose the best loan for your circumstances. 
              </p>
              <p className="text-muted-foreground mb-8">
               We take responsibility for our deeds and maintain transparency in our operations.
Our greatest asset is your trust—something you can always rely on!
Penny Farm Finance is your constant companion as you strive to live the best life imaginable. For you, we recommend the low cost. We bolster and reassure you that there is every chance you will be able to realise every ambition you have ever had.
              </p>
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6" data-aos="aos-fade-right">
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">60+</div>
                <div className="text-sm text-muted-foreground">Partner Banks & NBFCs</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Financial Advisors</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Logos Section */}
      <section className="py-20" data-aos="aos-fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Money Concerns are now Completely Resolved.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Trusted by leading banks and financial institutions across India
            </p>

            <div className="flex justify-center items-center space-x-8 overflow-hidden">
              {bankLogos.map((bank, index) => (
                <div
                  key={bank.name}
                  className={`transition-all duration-500 ${
                    index === currentBankIndex ? "scale-110 opacity-100" : "scale-90 opacity-60"
                  }`}
                >
                  <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-primary text-sm">{bank.logo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted/30" data-aos="aos-fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Our Products</Badge>
            <h2 className="text-4xl font-bold mb-4">Financial Solutions for Every Need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of loan products designed to meet your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
                  data-aos="aos-zoom-in"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <div className="text-muted-foreground">Rate</div>
                          <div className="font-semibold text-primary">{product.rate}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Amount</div>
                          <div className="font-semibold">{product.amount}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Tenure</div>
                          <div className="font-semibold">{product.tenure}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <Link href={`/products/${product.id}`}>
                        <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Explore All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20" data-aos="aos-fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold mb-4">Comprehensive Services You Can Trust</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are aware that wise financial decisions are critical to the expansion of your company. This is why you
              ought to pick us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-6 rounded-2xl transition-all duration-300 hover:bg-primary/5 hover:shadow-xl hover:-translate-y-1" data-aos="aos-fade-up">
              <div className="relative">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                  <Users className="w-10 h-10 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Personalized Service</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Penny is able to provide tailored support and direction during our application procedure.
              </p>
            </div>

            <div className="group p-6 rounded-2xl transition-all duration-300 hover:bg-primary/5 hover:shadow-xl hover:-translate-y-1" data-aos="aos-fade-up">
              <div className="relative">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                  <Award className="w-10 h-10 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Expertise You Can Trust</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Our team of seasoned experts will collaborate directly with you to comprehend your particular
                requirements and financial circumstances.
              </p>
            </div>

            <div className="group p-6 rounded-2xl transition-all duration-300 hover:bg-primary/5 hover:shadow-xl hover:-translate-y-1" data-aos="aos-fade-up">
              <div className="relative">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                  <Shield className="w-10 h-10 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Transparency and Reliability</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                It's crucial to make sure a consultant is trustworthy and transparent before approaching them.
              </p>
            </div>

            <div className="group p-6 rounded-2xl transition-all duration-300 hover:bg-primary/5 hover:shadow-xl hover:-translate-y-1" data-aos="aos-fade-up">
              <div className="relative">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                  <Home className="w-10 h-10 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">Doorstep Assistance</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                We guarantee that you may easily begin your financial journey with our simplified application process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-muted/30" data-aos="aos-fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Testimonials</Badge>
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl italic mb-6 text-muted-foreground">
                    "{testimonials[activeTestimonial].content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-lg">{testimonials[activeTestimonial].name}</div>
                    <div className="text-muted-foreground">{testimonials[activeTestimonial].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20" data-aos="aos-fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our loan products and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border/50 overflow-hidden" data-aos="aos-fade-up">
                <CardHeader
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${expandedFAQ === index ? "rotate-180" : ""}`}
                    />
                  </div>
                </CardHeader>
                {expandedFAQ === index && (
                  <CardContent className="animate-fade-in">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-20 bg-muted/30" data-aos="aos-fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Latest Insights</Badge>
            <h2 className="text-4xl font-bold mb-4">Financial Tips & Guides</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest articles on personal finance and loan management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50"
                data-aos="aos-zoom-in"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{blog.title}</CardTitle>
                  <CardDescription>{blog.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blogs">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Explore More Blogs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact-section" className="py-20" data-aos="aos-fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Contact Us</Badge>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your financial journey? Contact us today for personalized assistance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 96649 82919</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">Quick Support Available</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@pennyfarmfinance.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      623, Dev Atelier, 100 Feet Anand Nagar Rd, Prahlad Nagar, Ahmedabad, Gujarat 380015
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Loan Type</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option>Select loan type</option>
                    <option>Personal Loan</option>
                    <option>Business Loan</option>
                    <option>Home Loan</option>
                    <option>Loan Against Property</option>
                    <option>Working Capital</option>
                    <option>Used Car Loan</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea placeholder="Tell us about your requirements" rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white" data-aos="aos-fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards your financial goals. Apply now and get instant approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
              onClick={() => window.open('tel:+919664982919', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +91 96649 82919
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/pennyfarm-logo.jpeg"
                  alt="Penny Farm Finance Logo"
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">Penny Farm Finance</span>
              </div>
              <p className="text-background/70 mb-4">
                Your trusted partner for all financial needs. We provide quick, reliable, and affordable loan solutions.
              </p>
              <div className="flex space-x-4">
                <Button 
                  size="sm" 
                  className="bg-green-500 hover:bg-green-600"
                  onClick={() => window.open('https://wa.me/919664982919', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-background/20 text-background hover:bg-background hover:text-foreground bg-transparent"
                  onClick={() => window.open('tel:+919664982919', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-background/70">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-primary transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <button onClick={scrollToContact} className="hover:text-primary transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-background/70">
                <li>
                  <Link href="/products/personal-loan" className="hover:text-primary transition-colors">
                    Personal Loan
                  </Link>
                </li>
                <li>
                  <Link href="/products/business-loan" className="hover:text-primary transition-colors">
                    Business Loan
                  </Link>
                </li>
                <li>
                  <Link href="/products/home-loan" className="hover:text-primary transition-colors">
                    Home Loan
                  </Link>
                </li>
                <li>
                  <Link href="/products/loan-against-property" className="hover:text-primary transition-colors">
                    Loan Against Property
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-background/70">
                <p>📞 +91-96649 82919</p>
                <p>✉️ info@pennyfarmfinance.com</p>
                <p>📍 Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
            <p>&copy; 2024 Penny Farm Finance. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* EMI Calculator Modal */}
     
    </div>
  )
}

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fff8eb]">
      {/* Hero Section (Previous code remains the same) */}
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700">
        {/* Mountain silhouettes overlay */}
        <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          // backgroundImage: "url('/mountains-silhouette.svg')",
          backgroundImage: "url('/image.jpeg')",
        }}
        />

        {/* Content container */}
        <div className="relative z-10">
          {/* Navigation */}
          <header className="container mx-auto px-4 py-6 flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-white text-3xl font-bold mr-12">
              <div className="relative w-14 h-12 bg-cover bg-center bg-no-repeat" 
                style={{
                  backgroundImage: `url('/logo.png')`,
                }}></div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  Products
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  Solutions
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  Research
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  Resources
                </a>
                <a href="#" className="text-white hover:text-white/80 transition-colors">
                  Company
                </a>
              </nav>
            </div>
            <div className="flex space-x-4">
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                Try the API <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                Talk to sales <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </header>

          {/* Hero section */}
          <main className="container mx-auto px-4 pt-20 pb-32 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">Frontier AI. In Your Hands.</h1>
            <p className="text-xl md:text-2xl text-white mb-12">Configurable AI for all builders.</p>

            {/* Chat input */}
            <div className="max-w-xl mx-auto relative">
              <Input
                type="text"
                placeholder="Talk to Ie Chat"
                className="bg-white/90 text-amber-900 h-12 pl-4 pr-12 rounded-md w-full"
              />
              <Button
                className="absolute right-1 top-1 h-10 w-10 p-0 bg-amber-600 hover:bg-amber-700"
                aria-label="Send message"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Bottom links */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-24">
              <a
                href="#"
                className="text-white text-lg border-b-2 border-white/50 pb-1 hover:border-white transition-colors"
              >
                Enterprise deployments
              </a>
              <a
                href="#"
                className="text-white text-lg border-b-2 border-white/50 pb-1 hover:border-white transition-colors flex items-center"
              >
                APIs on Ia Plateforme <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#fff8eb] rounded-lg p-6">
          <div className="flex items-center gap-6">
            <Image
              src="/secondlogo.png"
              alt="Le Chat Logo"
              width={80}
              height={80}
              className="bg-gradient-to-b from-orange-400 to-red-600 p-2"
            />
            <h2 className="text-2xl font-semibold text-gray-900">Le Chat: Your AI assistant for life and work.</h2>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="transition-transform hover:scale-105">
              <Image
                src="/appstore.svg"
                alt="Download on the App Store"
                width={140}
                height={42}
                className="h-[42px] w-auto"
              />
            </Link>
            <Link href="#" className="transition-transform hover:scale-105">
              <Image
                src="/googleplay.svg"
                alt="Get it on Google Play"
                width={140}
                height={42}
                className="h-[42px] w-auto"
              />
            </Link>
          </div>
          {/* <Image
            src="/secondlogo.png"
            alt="Pixel Character"
            width={60}
            height={60}
            className="absolute top-4 right-4 md:static"
          /> */}
        </div>
      </div>

      {/* Partners Logo Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {[
            { name: "Harvey", logo: "/harvey.png" },
            { name: "Hugging Face", logo: "/hugging.png" },
            { name: "IBM", logo: "/ibm.png" },
            { name: "Mars", logo: "/mars.png" },
            { name: "MongoDB", logo: "/mongodb.jpeg" },
            { name: "OctoAI", logo: "/octoai.png" },
          ].map((partner) => (
            <Image
              key={partner.name}
              src={partner.logo || "/placeholder.svg"}
              alt={`${partner.name} logo`}
              width={120}
              height={40}
              className="max-w-[120px] h-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Your AI future belongs in your hands.
              <span className="inline-block ml-2">
                <Image src="/icon.svg" alt="Decorative icon" width={32} height={32} className="inline-block" />
              </span>
            </h2>
            <div className="relative">
              <Input
                type="text"
                placeholder="Talk to Le Chat"
                className="w-full pl-4 pr-12 py-3 rounded-lg border border-gray-200"
              />
              <Button
                className="absolute right-1 top-1 h-10 w-10 p-0 bg-orange-500 hover:bg-orange-600"
                aria-label="Send message"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-gray-900">Customizable, from pre-training to the real world.</h3>
            <div className="flex items-start gap-4">
              <ArrowRight className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">
                World class, benchmark-setting open models to customize, distill, fine-tune, iterate, and build on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


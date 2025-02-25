import { AboutMe } from "@/components/about-me"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="container mx-auto">
      <AboutMe></AboutMe>
      <Contact></Contact>
    </div>
  )
}

import AboutPage from "@/components/AboutPage";
import ApplicantPage from "@/components/ApplicantPage";
import BookPage from "@/components/BookPage";
import ContactPage from "@/components/ContactPage";
import FooterUp from "@/components/FooterUp";
import HomePage from "@/components/HomePage";
import LocationPage from "@/components/LocationPage";
import MasterPage from "@/components/MasterPage";
import PartnersPage from "@/components/PartnersPage";
import ServicesPage from "@/components/ServicesPage";
import TeamMembers from "@/components/TeamMembers";

export default function Home() {
  return (
    <div>
      <HomePage />
      <section id="about" className="pt-20">
        <AboutPage />
      </section>
      <ServicesPage />
      <section id="team" className="scroll-mt-20">
        <TeamMembers />
      </section>
      <PartnersPage />
      <LocationPage />
      <ApplicantPage />
      <MasterPage />
      <BookPage />
      <ContactPage />
      <FooterUp />
    </div>
  );
}

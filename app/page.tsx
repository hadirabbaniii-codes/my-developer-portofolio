import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GithubStats from "@/components/GithubStats";
import ProjectList from "@/components/ProjectList";
import Contact from "@/components/Contact";
import { UserProfile } from "@/types/profile";

const myProfile: UserProfile = {
  name: "Hadi Rabbani",
  role: "Junior Web Developer",
  university: "Universitas Komputer Indonesia (UNIKOM)",
  major: "S1 Informatics Engineering",
  bio: "Mahasiswa Aktif Teknik Informatika dengan fokus utama pada perancangan dan pengembangan aplikasi web modern yang scalable, clean code, dan berkinerja tinggi. Didukung pemahaman konfigurasi jaringan komputer, Konfigurasi Router MikroTik (Bandwidth Management/Queues, Firewall, Hotspot, Static Routing), Cisco Packet Tracer (VLAN, Inter-VLAN Routing, OSPF, NAT), IP Subnetting, dan troubleshooting LAN.",
  skills: [
    "React.js",
    "Laravel",
    "TypeScript",
    "Tailwind CSS",
    "PHP",
    "MySQL",
    "Git",
  ],
  otherSkills: ["MikroTik", "Cisco"],
  socials: {
    email: "h.hadirabbani@gmail.com",
    linkedin: "https://linkedin.com/in/hadirabbani",
    instagram: "https://instagram.com/hadirabbaniii",
  },
  isAvailableForHire: true,
};

export default async function Home() {
  const githubUsername = "hadirabbaniii-codes";

  return (
    <main className="relative min-h-screen bg-slate-50/70 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col items-center px-6 py-10 sm:py-16 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-300 bg-grid-pattern overflow-hidden">
      {/* Top subtle ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-indigo-500/15 via-sky-500/10 to-transparent blur-3xl opacity-70 dark:opacity-40"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl sm:max-w-3xl flex flex-col items-center space-y-12">
        <Navbar
          isAvailableForHire={myProfile.isAvailableForHire}
          email={myProfile.socials.email}
        />
        <Hero profile={myProfile} />
        <GithubStats username={githubUsername} />
        <ProjectList username={githubUsername} />
        <Contact socials={myProfile.socials} />
      </div>
    </main>
  );
}

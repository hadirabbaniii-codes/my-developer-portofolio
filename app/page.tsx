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
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col items-center justify-center p-6 gap-6 transition-colors duration-300">
      <div className="w-full max-w-2xl flex justify-end"></div>

      <Hero profile={myProfile} />
      <GithubStats username={githubUsername} />
      <ProjectList username={githubUsername} />
      <Contact socials={myProfile.socials} />
    </main>
  );
}

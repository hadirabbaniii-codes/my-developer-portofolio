import Hero from "@/components/Hero";
import GithubStats from "@/components/GithubStats";
import ProjectList from "@/components/ProjectList";
import Guestbook from "@/components/Guestbook";
import { getGuestbookEntries } from "@/app/actions/guestbook";
import { UserProfile } from "@/types/profile";

const myProfile: UserProfile = {
  name: "Hadi Rabbani",
  role: "Full Stack Developer Trainee",
  university: "Universitas Komputer Indonesia (UNIKOM)",
  major: "S1 Informatics Engineering",
  bio: "Mahasiswa Teknik Informatika yang berfokus pada pengembangan aplikasi web modern yang scalable, clean code, dan berkinerja tinggi.",
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Git",
  ],
  isAvailableForHire: true,
};

export default async function Home() {
  const githubUsername = "hadirabbaniii-codes";
  const entries = await getGuestbookEntries();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 gap-6">
      <Hero profile={myProfile} />
      <GithubStats username={githubUsername} />
      <ProjectList username={githubUsername} />
      <Guestbook initialEntries={entries} />
    </main>
  );
}

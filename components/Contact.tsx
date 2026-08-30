import { SocialLinks } from "@/types/profile";

interface ContactProps {
  socials: SocialLinks;
}

export default function Contact({ socials }: ContactProps) {
  return (
    <section className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm transition-colors duration-300">
      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
        Let's Connect
      </h2>

      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
        Tertarik untuk berdiskusi seputar peluang magang, proyek rekayasa web,
        atau implementasi jaringan? Silakan hubungi saya melalui kanal berikut:
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <a
          href={socials.email}
          className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700 hover:border-blue-500 transition-colors"
        >
          ✉️ Email
        </a>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700 hover:border-blue-500 transition-colors"
        >
          💼 LinkedIn
        </a>
        <a
          href={socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700 hover:border-blue-500 transition-colors"
        >
          📸 Instagram
        </a>
      </div>
    </section>
  );
}

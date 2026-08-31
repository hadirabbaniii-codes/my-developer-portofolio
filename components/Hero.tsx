import { UserProfile } from "@/types/profile";
import { GraduationCap, Code2, Network } from "lucide-react";

interface HeroProps {
  profile: UserProfile;
}

const skillStyles: Record<string, { light: string; dark: string; dot: string }> = {
  "React.js": {
    light: "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100/80",
    dark: "dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/60 dark:hover:bg-sky-900/40",
    dot: "bg-sky-500",
  },
  Laravel: {
    light: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100/80",
    dark: "dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/60 dark:hover:bg-rose-900/40",
    dot: "bg-rose-500",
  },
  TypeScript: {
    light: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100/80",
    dark: "dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60 dark:hover:bg-blue-900/40",
    dot: "bg-blue-500",
  },
  "Tailwind CSS": {
    light: "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100/80",
    dark: "dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800/60 dark:hover:bg-teal-900/40",
    dot: "bg-teal-500",
  },
  PHP: {
    light: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100/80",
    dark: "dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800/60 dark:hover:bg-indigo-900/40",
    dot: "bg-indigo-500",
  },
  MySQL: {
    light: "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100/80",
    dark: "dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60 dark:hover:bg-amber-900/40",
    dot: "bg-amber-500",
  },
  Git: {
    light: "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100/80",
    dark: "dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800/60 dark:hover:bg-orange-900/40",
    dot: "bg-orange-500",
  },
  MikroTik: {
    light: "bg-red-50 text-red-700 border-red-200 hover:bg-red-100/80",
    dark: "dark:bg-red-950/40 dark:text-red-300 dark:border-red-800/60 dark:hover:bg-red-900/40",
    dot: "bg-red-500",
  },
  Cisco: {
    light: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100/80",
    dark: "dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60 dark:hover:bg-emerald-900/40",
    dot: "bg-emerald-500",
  },
};

export default function Hero({ profile }: HeroProps) {
  return (
    <section className="w-full max-w-2xl sm:max-w-3xl space-y-6 sm:space-y-8">
      {/* Header Info */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 sm:gap-2">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 break-words">
            {profile.name}
          </h1>
          <span className="font-mono text-sm sm:text-base text-indigo-600 dark:text-indigo-400 font-semibold shrink-0">
            {profile.role}
          </span>
        </div>

        <div className="flex items-start sm:items-center gap-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-snug">
          <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5 sm:mt-0" />
          <span className="break-words">
            {profile.major} <span className="text-slate-400 dark:text-slate-600">/</span>{" "}
            <span className="font-semibold text-slate-800 dark:text-slate-200">{profile.university}</span>
          </span>
        </div>
      </div>

      {/* Narrative Bio */}
      <div className="space-y-3.5 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed break-words">
        <p>
          Mahasiswa Aktif Teknik Informatika yang berfokus pada rekayasa aplikasi web modern. Mengutamakan{" "}
          <span className="font-semibold text-slate-900 dark:text-white">clean code</span>, arsitektur yang{" "}
          <span className="font-semibold text-slate-900 dark:text-white">scalable</span>, serta performa aplikasi yang optimal.
        </p>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Memiliki pemahaman kuat pada perancangan sistem backend & frontend, serta didukung keahlian dalam infrastruktur jaringan komputer: konfigurasi Router MikroTik (Bandwidth Management/Queues, Firewall, Hotspot, Static Routing), Cisco Packet Tracer (VLAN, Inter-VLAN Routing, OSPF, NAT), IP Subnetting, dan troubleshooting LAN.
        </p>
      </div>

      {/* Tech & Capabilities */}
      <div className="space-y-4 sm:space-y-5 pt-4 border-t border-slate-200 dark:border-slate-800">
        {/* Core Development */}
        <div className="space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-300">
            <Code2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0" />
            <span>Web & Software Engineering</span>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {profile.skills.map((skill) => {
              const style = skillStyles[skill] || {
                light: "bg-slate-100 text-slate-800 border-slate-200",
                dark: "dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700",
                dot: "bg-slate-500",
              };
              return (
                <span
                  key={skill}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-mono font-medium px-3 sm:px-3.5 py-1.5 rounded-lg border transition-all duration-150 ${style.light} ${style.dark}`}
                >
                  <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${style.dot}`} />
                  {skill}
                </span>
              );
            })}
          </div>
        </div>

        {/* Networking & Systems */}
        {profile.otherSkills && profile.otherSkills.length > 0 && (
          <div className="space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-300">
              <Network className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
              <span>Networking & Infrastructure</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {profile.otherSkills.map((skill) => {
                const style = skillStyles[skill] || {
                  light: "bg-slate-100 text-slate-800 border-slate-200",
                  dark: "dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700",
                  dot: "bg-slate-500",
                };
                return (
                  <span
                    key={skill}
                    className={`inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-mono font-medium px-3 sm:px-3.5 py-1.5 rounded-lg border transition-all duration-150 ${style.light} ${style.dark}`}
                  >
                    <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${style.dot}`} />
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

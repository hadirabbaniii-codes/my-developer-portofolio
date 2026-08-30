import { UserProfile } from "@/types/profile";

interface HeroProps {
  profile: UserProfile;
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-xl">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
          <p className="text-blue-400 font-medium text-lg mt-1">
            {profile.role}
          </p>
          <p className="text-slate-400 text-sm mt-1">
            {profile.major} • {profile.university}
          </p>
        </div>

        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full border ${
            profile.isAvailableForHire
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
              : "bg-amber-500/10 text-amber-400 border-amber-500/20"
          }`}
        >
          {profile.isAvailableForHire ? "Open to Work" : "Busy"}
        </span>
      </div>

      <p className="mt-4 text-slate-300 text-justify leading-relaxed">
        {profile.bio}
      </p>

      <div className="mt-6">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700 hover:border-blue-500 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {profile.otherSkills && profile.otherSkills.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            Other Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {profile.otherSkills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-800 text-slate-200 text-xs px-3 py-1 rounded-md border border-slate-700 hover:border-blue-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

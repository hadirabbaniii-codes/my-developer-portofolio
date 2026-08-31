import { GithubUser } from "@/types/github";
import { FolderGit2, Users, UserPlus, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface GithubStatsProps {
  username: string;
}

async function getGithubData(username: string): Promise<GithubUser | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        "User-Agent": "my-developer-portofolio",
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;
    const data = await res.json();
    if (!data || typeof data.public_repos !== "number") return null;
    return data as GithubUser;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return null;
  }
}

export default async function GithubStats({ username }: GithubStatsProps) {
  const githubData = await getGithubData(username);

  if (!githubData) {
    return null;
  }

  return (
    <section className="w-full max-w-2xl sm:max-w-3xl">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-xs p-4 sm:p-6 transition-colors">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80 gap-2">
          <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            {githubData.avatar_url ? (
              <img
                src={githubData.avatar_url}
                alt={githubData.login}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 dark:border-slate-700 object-cover shadow-xs shrink-0"
              />
            ) : (
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                <GithubIcon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </div>
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 truncate">
                  GitHub Activity
                </span>
                <span className="text-[10px] sm:text-xs font-mono px-1.5 sm:px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 font-medium shrink-0">
                  Live
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 truncate">@{githubData.login}</p>
            </div>
          </div>

          <a
            href={githubData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs sm:text-sm font-mono font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group shrink-0"
          >
            <span className="hidden xs:inline sm:inline">view profile</span>
            <span className="xs:hidden sm:hidden">profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4">
          <div className="flex flex-col items-center sm:items-start p-2.5 sm:p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/40 min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-mono mb-1 truncate">
              <FolderGit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500 dark:text-indigo-400 shrink-0" />
              <span className="hidden sm:inline">Repositories</span>
              <span className="sm:hidden">Repos</span>
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
              {githubData.public_repos}
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start p-2.5 sm:p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/40 min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-mono mb-1 truncate">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
              <span>Followers</span>
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
              {githubData.followers}
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start p-2.5 sm:p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/40 min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-mono mb-1 truncate">
              <UserPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500 dark:text-purple-400 shrink-0" />
              <span>Following</span>
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-purple-600 dark:text-purple-400">
              {githubData.following}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Project } from "@/types/project";
import { FolderGit2, Star, ArrowUpRight } from "lucide-react";

interface ProjectListProps {
  username: string;
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-amber-500",
  PHP: "bg-indigo-500",
  HTML: "bg-orange-500",
  CSS: "bg-sky-500",
  Blade: "bg-rose-500",
  Python: "bg-emerald-500",
  Go: "bg-cyan-500",
  Astro: "bg-purple-500",
};

async function getGithubProjects(username: string): Promise<Project[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          "User-Agent": "my-developer-portofolio",
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return [];
    const repos = await res.json();
    if (!Array.isArray(repos)) return [];
    return repos.filter((repo: Project) => !repo.fork);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export default async function ProjectList({ username }: ProjectListProps) {
  const projects = await getGithubProjects(username);

  return (
    <section className="w-full max-w-2xl sm:max-w-3xl space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm sm:text-base font-mono uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
          <FolderGit2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
          <span>Selected Projects</span>
        </h2>
        <span className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
          {projects.length} repositories
        </span>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-6 text-center text-sm font-mono text-slate-500">
          Belum ada repositori publik yang ditemukan.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => {
            const langColor =
              project.language && languageColors[project.language]
                ? languageColors[project.language]
                : "bg-slate-400";

            return (
              <a
                key={project.id}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 p-5 shadow-xs transition-all duration-200 hover:border-indigo-400/60 dark:hover:border-indigo-500/50 hover:shadow-md hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors break-words min-w-0">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1" />
                  </div>
                  <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description || "Tidak ada deskripsi repositori."}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/70 pt-3.5 text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 font-medium">
                  <span className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${langColor}`} />
                    <span>{project.language || "Code"}</span>
                  </span>

                  {project.stargazers_count > 0 && (
                    <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-semibold">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span>{project.stargazers_count}</span>
                    </span>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
}

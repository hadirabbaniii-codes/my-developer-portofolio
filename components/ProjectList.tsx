import { Project } from "@/types/project";

interface ProjectListProps {
  username: string;
}

async function getGithubProjects(username: string): Promise<Project[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      { next: { revalidate: 60 } },
    );

    if (!res.ok) return [];
    const repos: Project[] = await res.json();
    return repos.filter((repo) => !repo.fork);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export default async function ProjectList({ username }: ProjectListProps) {
  const projects = await getGithubProjects(username);

  return (
    <div className="max-w-3xl w-full">
      <h2 className="text-xl font-bold text-white mb-4">Featured Projects</h2>

      {projects.length === 0 ? (
        <p className="text-slate-400 text-sm bg-slate-900 p-6 rounded-xl border border-slate-800">
          Belum ada repositori publik yang ditemukan.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-blue-500/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-xs mt-2 line-clamp-2">
                  {project.description || "Tidak ada deskripsi repositori."}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  {project.language || "Markdown"}
                </span>
                <span>★ {project.stargazers_count}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

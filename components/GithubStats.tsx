import { GithubUser } from "@/types/github";

interface GithubStatsProps {
  username: string;
}

async function getGithubData(username: string): Promise<GithubUser | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return null;
  }
}

export default async function GithubStats({ username }: GithubStatsProps) {
  const githubData = await getGithubData(username);

  if (!githubData) {
    return (
      <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-400 text-sm">
        Gagal memuat data GitHub untuk username:{" "}
        <span className="text-white font-mono">{username}</span>.
      </div>
    );
  }

  return (
    <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          GitHub Live Stats
        </h2>
        <a
          href={githubData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-400 hover:underline"
        >
          @{githubData.login} →
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-800">
          <p className="text-2xl font-bold text-blue-400">
            {githubData.public_repos}
          </p>
          <p className="text-xs text-slate-400 mt-1">Public Repos</p>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-800">
          <p className="text-2xl font-bold text-emerald-400">
            {githubData.followers}
          </p>
          <p className="text-xs text-slate-400 mt-1">Followers</p>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-800">
          <p className="text-2xl font-bold text-purple-400">
            {githubData.following}
          </p>
          <p className="text-xs text-slate-400 mt-1">Following</p>
        </div>
      </div>
    </div>
  );
}

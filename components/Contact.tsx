"use client";

import { useState } from "react";
import { SocialLinks } from "@/types/profile";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "@/components/Icons";

interface ContactProps {
  socials: SocialLinks;
}

export default function Contact({ socials }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full max-w-2xl sm:max-w-3xl pt-8 border-t border-slate-200 dark:border-slate-800 space-y-4">
      <div className="space-y-1.5">
        <h2 className="text-sm sm:text-base font-mono uppercase tracking-wider font-semibold text-slate-700 dark:text-slate-300">
          Get in Touch
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Terbuka untuk diskusi proyek rekayasa web, peluang magang, atau implementasi jaringan.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 pt-1">
        <button
          onClick={handleCopyEmail}
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-slate-700 shadow-xs transition-colors cursor-pointer max-w-full"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Email Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="truncate">{socials.email}</span>
            </>
          )}
        </button>

        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-slate-700 shadow-xs transition-colors group"
        >
          <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
        </a>

        <a
          href={socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-300 dark:hover:border-slate-700 shadow-xs transition-colors group"
        >
          <InstagramIcon className="w-4 h-4 text-pink-600 dark:text-pink-400 shrink-0" />
          <span>Instagram</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
        </a>
      </div>

      <footer className="pt-8 text-center sm:text-left text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Hadi Rabbani • Built with Next.js & Tailwind CSS
      </footer>
    </section>
  );
}

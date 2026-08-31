"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Mail, Check, Sun, Moon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface NavbarProps {
  isAvailableForHire: boolean;
  email: string;
}

export default function Navbar({ isAvailableForHire, email }: NavbarProps) {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="w-full max-w-2xl sm:max-w-3xl flex flex-row items-center justify-between py-4 border-b border-slate-200 dark:border-slate-800 mb-6 sm:mb-8 transition-colors gap-2">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0">
          {isAvailableForHire && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          )}
          <span
            className={`relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 ${
              isAvailableForHire ? "bg-emerald-500" : "bg-amber-500"
            }`}
          ></span>
        </span>
        <span className="text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300 font-medium truncate">
          {isAvailableForHire ? (
            <>
              <span className="hidden sm:inline">Available for opportunities</span>
              <span className="sm:hidden">Available</span>
            </>
          ) : (
            "Busy"
          )}
        </span>
      </div>

      <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
        <button
          onClick={handleCopyEmail}
          aria-label="Copy email address"
          title="Copy Email"
          className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline sm:inline">Email</span>
            </>
          )}
        </button>

        <a
          href="https://github.com/hadirabbaniii-codes"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-1.5 sm:p-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>

        <a
          href="https://linkedin.com/in/hadirabbani"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-1.5 sm:p-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs transition-colors"
        >
          <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </a>

        {/* Theme Toggle Button */}
        {mounted && (
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            title={resolvedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-1.5 sm:p-2 text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs transition-colors cursor-pointer"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" />
            )}
          </button>
        )}
      </div>
    </header>
  );
}

"use client";

import { useRef, useState } from "react";
import { createGuestbookEntry } from "@/app/actions/guestbook";

interface GuestbookMessage {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
}

export default function Guestbook({
  initialEntries,
}: {
  initialEntries: GuestbookMessage[];
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus(null);

    const result = await createGuestbookEntry(formData);
    setIsSubmitting(false);

    if (result?.error) {
      setStatus(result.error);
    } else {
      setStatus("Pesan berhasil dikirim!");
      formRef.current?.reset();
    }
  }

  return (
    <div className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
      <h2 className="text-xl font-bold text-white mb-2">Guestbook</h2>
      <p className="text-slate-400 text-xs mb-6">
        Tinggalkan pesan atau sapaan kamu di sini!
      </p>

      <form ref={formRef} action={handleSubmit} className="flex flex-col gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            name="name"
            placeholder="Nama Kamu"
            required
            className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email (tidak dipublikasikan)"
            required
            className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
          />
        </div>
        <textarea
          name="message"
          rows={3}
          placeholder="Tulis pesan kamu..."
          required
          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500 resize-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors self-end disabled:opacity-50"
        >
          {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
        </button>
      </form>

      {status && (
        <p className="text-xs mt-3 text-emerald-400 font-medium">{status}</p>
      )}

      <div className="mt-8 border-t border-slate-800 pt-6 flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-slate-300">Pesan Terbaru</h3>
        {initialEntries.length === 0 ? (
          <p className="text-xs text-slate-500">
            Belum ada pesan. Jadilah yang pertama!
          </p>
        ) : (
          initialEntries.map((entry) => (
            <div
              key={entry.id}
              className="bg-slate-800/40 border border-slate-800 p-4 rounded-lg"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-blue-400">
                  {entry.name}
                </span>
                <span className="text-[10px] text-slate-500">
                  {new Date(entry.createdAt).toLocaleDateString("id-ID")}
                </span>
              </div>
              <p className="text-xs text-slate-300">{entry.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

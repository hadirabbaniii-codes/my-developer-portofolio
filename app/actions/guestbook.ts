"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createGuestbookEntry(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Semua kolom wajib diisi!" };
  }

  try {
    await prisma.guestbook.create({
      data: {
        name,
        email,
        message,
      },
    });

    // Refresh data di halaman utama agar pesan baru langsung muncul
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Gagal menyimpan pesan:", error);
    return { error: "Terjadi kesalahan pada server." };
  }
}

export async function getGuestbookEntries() {
  try {
    return await prisma.guestbook.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5, // Ambil 5 pesan terbaru
    });
  } catch (error) {
    console.error("Gagal mengambil data guestbook:", error);
    return [];
  }
}

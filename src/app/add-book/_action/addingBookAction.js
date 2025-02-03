"use server";
import { redirect } from "next/navigation";
import { API_URL } from "@/constant/api-url";
import { revalidatePath } from "next/cache";

export async function addNewQuoteBook(_, formData) {
  const title = formData.get("title");
  const writer = formData.get("writer");
  const rilis = formData.get("releaseDate");
  const quote = formData.get("quote");
  const attachment = formData.get("attachment");

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{ attachment, quote, rilis, writer, title }]),
  });

  revalidatePath("/home");
  redirect("/home");
}

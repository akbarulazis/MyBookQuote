"use server";
import { redirect } from "next/navigation";
import { API_URL } from "@/constant/api-url";
import { revalidatePath } from "next/cache";

export async function UpdateQuoteBook(_, formData) {
  console.log(formData);
  const _id = formData.get("id");
  const title = formData.get("title");
  const writer = formData.get("writer");
  const rilis = formData.get("releaseDate");
  const quote = formData.get("quote");
  const attachment = formData.get("attachment");
  console.log(_id, title, writer, rilis, quote, attachment);

  await fetch(API_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id, attachment, quote, rilis, writer, title }),
  });

  revalidatePath("/home");
  redirect("/home");
}

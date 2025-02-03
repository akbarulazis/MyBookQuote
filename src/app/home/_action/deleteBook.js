"use server";
import { API_URL } from "@/constant/api-url";
import { revalidatePath } from "next/cache";

export async function deleteBook(_, formData) {
  const id = formData.get("id");
  console.log(id);
  await fetch(API_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([id]),
  });

  revalidatePath("./home");
}

"use client";
import { useRouter } from "next/navigation"; // For Redirect After Submission not using LINK because ActionState
import { UpdateQuoteBook } from "../_action/updateBook";
import { Card, CardBody, Button, Input, Form } from "@heroui/react";
import { useActionState } from "react";
import { useState, startTransition } from "react"; // UseState : Manage Error Submission, Transition : UI not error while managing submission

export const FormUpdateAction = ({
  id,
  title,
  writer,
  releaseDate,
  quote,
  oldAttachment,
}) => {
  const router = useRouter(); // declare variabel for routing
  const [state, formAction, pending] = useActionState(UpdateQuoteBook, null);
  const [error, setError] = useState(""); // declare error submissiion
  const randomNumber = Math.floor(Math.random() * 699); //random state to give attachment pic
  const NewAttachment = `https://picsum.photos/id/${randomNumber}/200/400`; //not enought capabilities appbackend for pushing attachment image

  const handleSubmit = (event) => {
    event.preventDefault(); //stoping submisson to refresh the page after submit

    const formData = new FormData(event.target); // extract all submitted form
    const id = formData.get("id")?.trim();
    const title = formData.get("title")?.trim(); //if true or not null apply trim
    const writer = formData.get("writer")?.trim();
    const releaseDate = formData.get("releaseDate")?.trim();
    const quote = formData.get("quote")?.trim();
    const attachment = formData.get("attachment")?.trim();

    if (!id || !title || !writer || !releaseDate || !quote || !attachment) {
      setError("All fields must be filled out before submitting.");
      return;
    } // if there is some filed missing show error

    setError(""); // Clear error message if all fields are valid

    // Use startTransition to ensure async execution inside action context
    startTransition(() => {
      formAction(formData).then(() => {
        router.push("/home"); // ✅ Redirect only after form submission
      });
    });

    // Redirect to /home after successful update
    // router.push("/home");
  };

  return (
    <Card className="m-5 p-8">
      <CardBody className="py-3 space-y-4">
        <p className="text-xl font-bold font-sans">
          Update Quote buku yang telah kamu isi
        </p>
        {error && <p className="text-red-500">{error}</p>}{" "}
        <Form className="py-3" action={formAction} onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={id} />
          <Input
            isRequired
            label="Writer"
            name="writer"
            placeholder={writer}
            type="text"
            defaultValue={writer}
          />
          <Input
            isRequired
            label="Book Title"
            name="title"
            placeholder={title}
            type="text"
            defaultValue={title}
          />
          <Input
            isRequired
            label="Release Date"
            name="releaseDate"
            placeholder="Enter Release Date"
            type="date"
            defaultValue={releaseDate}
          />
          <Input
            isRequired
            label="Quote"
            name="quote"
            placeholder="Update Quote"
            type="text"
          />
          <div className="mb-4">
            <p className="font-medium">Update the Picture?:</p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <Input
                  type="radio"
                  name="attachment"
                  value={NewAttachment}
                  isRequired
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <Input
                  type="radio"
                  name="attachment"
                  value={oldAttachment}
                  isRequired
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <Button type="submit" color="primary" isLoading={pending}>
            {pending ? "Loading ...." : "Update"}
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

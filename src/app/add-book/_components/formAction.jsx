"use client";
import { useRouter } from "next/navigation"; // For Redirect After Submission not using LINK because ActionState
import { addNewQuoteBook } from "../_action/addingBookAction";
import { Card, CardBody, Button, Input, Form } from "@heroui/react";
import { useActionState } from "react";
import { useState, startTransition } from "react"; // UseState : Manage Error Submission, Transition : UI not error while managing submission

export const FormAddAction = () => {
  const router = useRouter(); // declare variabel for routing
  const [state, formAction, pending] = useActionState(addNewQuoteBook, null);
  const [error, setError] = useState(""); // declare error submissiion
  const randomNumber = Math.floor(Math.random() * 699); //random state to give attachment pic
  const attachment = `https://picsum.photos/id/${randomNumber}/200/400`; //not enought capabilities appbackend for pushing attachment image

  const handleSubmit = (event) => {
    event.preventDefault(); //stoping submisson to refresh the page after submit

    const formData = new FormData(event.target); // extract all submitted form
    const title = formData.get("title")?.trim(); //if true or not null apply trim
    const writer = formData.get("writer")?.trim();
    const releaseDate = formData.get("releaseDate")?.trim();
    const quote = formData.get("quote")?.trim();

    if (!title || !writer || !releaseDate || !quote) {
      setError("All fields must be filled out before submitting.");
      return;
    } // if there is some filed missing show error

    setError(""); // Clear error message if all fields are valid

    // Use startTransition to ensure async execution inside action context
    startTransition(() => {
      formAction(formData);
    });

    // Redirect to /home after successful submission
    router.push("/home");
  };

  return (
    <Card className="m-5 p-8">
      <CardBody className="py-3 space-y-4">
        <p className="text-xl font-bold font-sans">
          Tambahkan Quote buku yang telah kamu temukan
        </p>
        {error && <p className="text-red-500">{error}</p>}{" "}
        <Form className="py-3" action={formAction} onSubmit={handleSubmit}>
          <Input
            isRequired
            label="Writer"
            name="writer"
            placeholder="Enter Writer Name"
            type="text"
          />
          <Input
            isRequired
            label="Book Title"
            name="title"
            placeholder="Enter Book Title"
            type="text"
          />
          <Input
            isRequired
            label="Release Date"
            name="releaseDate"
            placeholder="Enter Release Date"
            type="date"
          />
          <Input
            isRequired
            label="Quote"
            name="quote"
            placeholder="Enter Quote"
            type="text"
          />
          <input type="hidden" name="attachment" value={attachment} />

          <Button type="submit" color="primary" isLoading={pending}>
            {pending ? "Loading ...." : "Submit"}
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

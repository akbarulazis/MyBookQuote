"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Form,
} from "@heroui/react";
import { deleteBook } from "../_action/deleteBook";
import { useActionState } from "react";

export default function DeleteModal({ id }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [state, formAction, pending] = useActionState(deleteBook, null);

  return (
    <>
      <Button
        onPress={onOpen}
        className="text-tiny text-white "
        color="danger"
        radius="lg"
        size="sm"
      >
        Delete
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure want to delete this?
              </ModalHeader>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Form action={formAction}>
                  <input type="hidden" name="id" defaultValue={id} />
                  <Button
                    type="submit"
                    isLoading={pending}
                    color="primary"
                    onPress={onClose}
                  >
                    {pending ? "Loading ....." : "Delete"}
                  </Button>
                </Form>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

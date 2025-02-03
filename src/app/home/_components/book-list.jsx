import { API_URL } from "@/constant/api-url";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@heroui/react";
import Link from "next/link";
import DeleteModal from "./deleteModal";

export const BookList = async () => {
  "use server";
  const res = await fetch(API_URL);
  const { data } = await res.json();
  // console.log(data);
  return (
    <div className="flex justify-evenly flex-wrap gap-3">
      {data.map((item) => {
        return (
          <div key={item._id} className="w-[300px]">
            <Card className="py-4 flex flex-col h-full">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="font-bold text-large truncate">{item.writer}</p>
                <small className="text-default-500">{item.rilis}</small>
                <p className="font-bold text-large truncate" title={item.title}>
                  {item.title}
                </p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <div className="flex flex-col justify-center">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-full h-[400px] shadow-md"
                    src={item.attachment}
                    width={300}
                  />
                  <small className="text-default-500 py-4">{item.quote}</small>
                </div>
              </CardBody>
              <CardFooter className="flex flex-col space-y-4 items-center justify-center">
                <div className="space-x-3">
                  <DeleteModal id={item._id} />

                  <Link href={`/home/${item._id}`}>
                    <Button
                      className="text-tiny text-white "
                      color="secondary"
                      radius="lg"
                      size="sm"
                    >
                      Update
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

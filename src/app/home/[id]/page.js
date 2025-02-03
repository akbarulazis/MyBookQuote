import { API_URL } from "@/constant/api-url";
import Navbar from "../_components/navbar";
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  CardFooter,
  Button,
} from "@heroui/react";
import { FormUpdateAction } from "./_components/update-book";

export default async function Page({ params }) {
  const { id } = await params;
  //   console.log(id);
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();

  return (
    <div className="flex flex-col min-h-screen space-y-3">
      <Navbar />
      <div className="flex justify-center gap-3">
        <div key={data._id} className="w-[300px]">
          <Card className="py-4 flex flex-col h-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="font-bold text-large truncate">{data.writer}</p>
              <small className="text-default-500">{data.rilis}</small>
              <p className="font-bold text-large truncate" title={data.title}>
                {data.title}
              </p>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex-grow">
              <Image
                alt="Card background"
                className="object-cover rounded-xl w-full h-[400px] shadow-md"
                src={data.attachment}
                width={270}
              />
            </CardBody>
            <CardFooter className="flex flex-col">
              <div>
                <small className="text-default-500">{data.quote}</small>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div>
          <FormUpdateAction
            title={data.title}
            id={data._id}
            writer={data.writer}
            releaseDate={data.rilis}
            quote={data.quote}
            oldAttachment={data.attachment}
          />
        </div>
      </div>
    </div>
  );
}

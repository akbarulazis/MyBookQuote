import Link from "next/link";
import { Card, CardBody, Image, Button } from "@heroui/react";

export default async function Sidebar() {
  return (
    <Card className="border-none bg-background/60 flex" shadow="sm">
      <CardBody>
        <div className="flex flex-col gap-4">
          <div className="p-2">
            <Image src="/read-book.jpg" alt="read" fit="True" />
          </div>
          <div className="m-2">
            <p className="text-sm italic font-sans">
              "A book is a dream that you hold in your hands. Read every day,
              and you will live countless lives." — Neil Gaiman
            </p>
          </div>
          <div className="mb-4 ml-2">
            <Link href={"/add-book"}>
              <Button color="primary">Tambahkan Buku</Button>
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

import Link from "next/link";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
export default async function Navbar() {
  return (
    <nav className="bg-black shadow-lg p-4">
      <div className="flex container justify-between items-center">
        <div className="ml-4">
          <Link href={"/"}>
            <p className="text-xl text-white font-sans font-bold">
              MyBook Quote
            </p>
          </Link>
        </div>
        <div className="flex gap-10 mr-4">
          <Link href={"/home"}>
            <p className="text-lg text-white font-semibold font-sans">Home</p>
          </Link>
          <Popover>
            <PopoverTrigger>
              <p className="text-lg text-white font-sans">About</p>
            </PopoverTrigger>
            <PopoverContent>
              <div className="p-4">
                <p className="text-lg font-bold">
                  Simpan Quote Buku yang telah kamu baca disini
                </p>
                <p>Create: Menambahkan buku baru beserta review-nya. </p>
                <p>Update: Mengedit informasi tentang buku.</p>
                <p>Delete: Menghapus review buku dari daftar.</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
}

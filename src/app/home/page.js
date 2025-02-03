import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import { BookList } from "./_components/book-list";

export default async function Page() {
  return (
    <div className="flex flex-col min-h-screen space-y-3">
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        <div className="col-span-1 items-center">
          <Sidebar />
        </div>
        <div className="col-span-3">
          <div className="flex justify-center items-center gap-3">
            <BookList />
          </div>
        </div>
      </div>
    </div>
  );
}

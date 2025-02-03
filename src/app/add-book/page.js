import Navbar from "../home/_components/navbar";
import { FormAddAction } from "./_components/formAction";

export default async function Page() {
  return (
    <div className="flex flex-col min-h-screen space-y-3">
      <Navbar />
      <div className="flex justify-center">
        <FormAddAction />
      </div>
    </div>
  );
}

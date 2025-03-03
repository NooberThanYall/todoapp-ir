
import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/auth/jwt";
import { User } from "lucide-react";

 async function Navbar() {
  const session = cookies().get("session")?.value;
  const user = session ? await decrypt(session) : null;
  console.log(session);
  console.log(user);
  

  return (
    <nav
      className="py-4 px-12 shadow-md w-3/4 rounded-lg flex justify-between fixed top-5 left-1/2 transform -translate-x-1/2 bg-darkbgsidebar"
      
    >
      <ul className="text-white flex text-md items-center gap-x-4">
        {!user ? (
          <>
            <Link
              href={"/auth/register"}
              style={{ color: "#0E2338" }}
              className="bg-orange-400 px-3 py-2 rounded-md"
            >
              <li>ثبت نام</li>
            </Link>
            <Link
              href={"/auth/login"}
              className="hover:bg-slate-700 px-3 py-2 rounded-md"
            >
              <li>ورود</li>
            </Link>
          </>
        ) : (
          <Link
            href={"/app"}
            className="flex gap-1 hover:bg-orange-500 transition-all px-3 py-2 rounded-md bg-orange-400 text-darkblue"
          >
            <User />
            <li>{user.name}</li>
          </Link>
        )}
      </ul>

      <ul className="text-white flex text-md items-center gap-x-6">
        <Link
          href={"/articles"}
          className="hover:bg-slate-700 px-3 py-2 rounded-md"
        >
          <li>مقالات</li>
        </Link>
        <Link
          href={"/about"}
          className="hover:bg-slate-700 px-3 py-2 rounded-md"
        >
          <li>درباره ما</li>
        </Link>
        <Link
          href={"/tools"}
          className="hover:bg-slate-700 px-3 py-2 rounded-md"
        >
          <li>ابزار ها</li>
        </Link>
      </ul>

      <div className="flex items-center gap-3">
        <h1 className="text-orange-400 text-bold text-xl font-bold font-sans">
          Todo Iran
        </h1>
        <Image src={"/images/ToDo.png"} alt="Logo" height={40} width={40} />
      </div>
    </nav>
  );
}
export default Navbar
"use client"
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
    const [name, setName] = useState("");
    const [redirect, setredirect] = useState(false);

    useEffect(() => {
        if(name != "") {
            setredirect(true);
        }
        localStorage.setItem("name", name);

    }
    , [name]);

  return (
    <main className="flex min-h-screen flex-col align-center items-center text-start justify-center p-24 text-black bg-gray-100">
      <div>
        <Link href="/">
          <h1 className="text-slate-600 transition duration-300  hover:text-slate-400">Back</h1>
        </Link>
      </div>
      <div className="flex flex-col text-start items-center justify-center space-y-4">
        <h1 className="text-4xl font-extralight">
          <span className={"text-black"}>Log </span>
          <span className={"text-yellow-500"}>in</span>
        </h1>
        <div>
          <form className="flex flex-col space-y-4">
            <input
              className="border border-black rounded-sm p-2"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Link
              href={redirect ? "/upload" : "/login"}
              type="submit"
              className="bg-black text-center text-white rounded-md p-2"
            >
              Sign In
            </Link>
          </form>
        </div>
      </div>
    </main>
  );
}

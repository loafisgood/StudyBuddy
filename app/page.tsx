"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/studylogo.png';


export default function Home() {


  return (
    <main className="flex min-h-screen  bg-white flex-col items-center justify-between p-24">

      <Image src={logo} alt="Study Buddy AI Logo" width={500} height={500} className='m-40 sm-' draggable="false" />
      <Link href="/login" className="bg-yellow-500 text-white rounded-sm p-4 m-10 border-2 hover:bg-yellow-600 duration-300  transition">
        Log in 
      </Link>
      


      

    </main>
  );
}

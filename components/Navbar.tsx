// components/Navbar.tsx

"use client";

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from 'react';

// Import NextAuth functions
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession(); // This hook gets the session data
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      {/* DYNAMIC LOGIN/USER INFO */}
      <div className="lg:flexCenter hidden">
        {session?.user ? (
          // If the user is logged in, show their info and a logout button
          <div className="flexCenter gap-4">
            <Image 
              src={session.user.image!} 
              alt={session.user.name!}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="bold-16 text-gray-90">Hi, {session.user.name?.split(' ')[0]}</span>
            {/* FIX: Changed prop name from 'action' to 'onClick' */}
            <Button 
              type="button"
              title="Logout"
              variant="btn_dark_green"
              onClick={() => signOut()}
            />
          </div>
        ) : (
          // If the user is not logged in, show the login button
          // FIX: Changed prop name from 'action' to 'onClick'
          <Button 
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            onClick={() => signIn('google')}
          />
        )}
      </div>

      {/* Mobile Menu Icon */}
      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="inline-block cursor-pointer lg:hidden"
      />
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full right-0 w-full bg-white shadow-lg rounded-lg mt-2">
            <ul className="flex flex-col items-center gap-4 p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-16 text-gray-90 w-full text-center cursor-pointer py-2 transition-all hover:font-bold hover:bg-gray-100 rounded"
                  onClick={() => setIsMenuOpen(false)} 
                >
                  {link.label}
                </Link>
              ))}
            </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
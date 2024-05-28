"use client"

import React, { useState } from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { useSession } from 'next-auth/react';
// import {AcmeLogo} from "./AcmeLogo.jsx";


const Navbarr = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const session = useSession();

  const menuItems = [
    "How it Works",
    "FAQ's",
    "Blog",
  ];

  return (
     <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className='p-3'
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>


        <NavbarBrand className=' hidden sm:flex  ' >
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">




        <NavbarItem>
          <Link color="foreground" href="#">
            How it Works
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            FAQ's
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Blogs
          </Link>
        </NavbarItem>

      </NavbarContent>



      <NavbarContent justify="end">
        <NavbarItem>
          {/* <Button as={Link} color="warning" href="#" variant="flat">
            
          </Button> */}
          <button className=' px-4 py-3 rounded-xl border hover:shadow-sm hover:border-black '  onClick={ ""} >
            {session.data>0 ? "Dashboard" : "Sign Up"}
          </button>
        </NavbarItem>
      </NavbarContent>



      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Navbarr

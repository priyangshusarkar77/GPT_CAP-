import * as React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

interface NavbarButton {
  path: string;
  currPath: string;
  children: React.ReactNode;
}

const NavbarButton: React.FC<NavbarButton> = ({ path, currPath, children }) => {
  const active: boolean = path === currPath;

  return (
    <Link href={path}>
      <div
        className={`text-white h-auto p-4 pl-8 pr-8 rounded-md ${
          !active ? "bg-transparent" : "bg-white/10"
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div
      className="fixed w-full h-20 top-0 flex flex-row justify-center items-center bg-blue-950/70"
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="md:w-[60%] w-full h-full flex flex-row justify-between items-center md:p-0 p-4">
        <Link href={"/"}>
          <Image
            src={"/images/logo-no-background.svg"}
            alt="Logo"
            width={120}
            height={60}
          />
        </Link>
        <div className="flex flex-row gap-4">
          <NavbarButton path="/" currPath={router.pathname}>
            Home
          </NavbarButton>
          <NavbarButton path="/features" currPath={router.pathname}>
            Features
          </NavbarButton>
          :
          <Link href={"/login"} target="_blank">
            <div className="text-white bg-blue-500 p-4 pl-8 pr-8 rounded-md justify-center items-center inline-block h-auto">
              Get Started!
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

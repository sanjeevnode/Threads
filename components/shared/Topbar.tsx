import {
  OrganizationSwitcher,
  SignOutButton,
  SignedIn,
  SignInButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";
import { currentUser } from "@clerk/nextjs";
import { BiLogIn } from "react-icons/bi";

const TopBar = async () => {
  const user = await currentUser();
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>
      <div className="flex items-center gap-1 ">
        {!user && (
          <SignInButton>
            <button className="md:py-1 md:px-3 flex justify-center items-center md:shadow-[0_0_10px_theme('colors.primary-500')] text-light-1 md:rounded-md">
              <span className="hidden md:block">Login</span>
              <BiLogIn className="md:hidden text-light-1 shadow-[0_0_10px_blue] text-[28px]" />
            </button>
          </SignInButton>
        )}

        <div className="block md:hidden ">
          <SignedIn>
            <SignOutButton>
              <Link href="/" className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </Link>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default TopBar;

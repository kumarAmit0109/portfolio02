import { Link } from "react-router-dom";
import devicon from "../assets/devicon.png";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

function Header() {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleresize = () => {
      if (window.innerWidth >= 640) {
        setSheetOpen(false);
      }
    };
    window.addEventListener("resize", handleresize);
    return () => window.removeEventListener("resize", handleresize);
  }, []);
  const Links = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Projects", path: "/projects" },
    { text: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-30  bg-black/30 backdrop-blur-lg ">
      <div className="py-4 w-11/12 max-w-7xl mx-auto flex justify-between items-center gap-3">
        <Link
          to={"/"}
          className="flex items-center gap-x-2.5 font-medium tracking-wider"
        >
          <div className="w-14 aspect-square flex justify-center items-center">
            <img src={devicon} className="w-full" />
          </div>
          <div>
            <div>Amit Kumar</div>
            <div className="text-xs opacity-80">Full Stack Developer</div>
          </div>
        </Link>
        <div className="sm:flex items-center gap-x-8 hidden">
          {Links.map(
            (link, index) =>
              link.text !== "Home" && (
                <Link to={link.path} key={index}>
                  <Button className="text-base" variant="link">
                    {link.text}
                  </Button>
                </Link>
              )
          )}
          <ModeToggle />
        </div>

        <div className="flex items-center gap-x-3 sm:hidden">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger>
              <Button
                variant="secondary"
                size={"icon"}
                className="bg-transparent"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex-col flex items-center  font-medium tracking-wider">
                    <div className="w-14 aspect-square flex justify-center items-center">
                      <img src={devicon} className="w-full" />
                    </div>
                    <div>
                      <div>Amit Kumar</div>
                      <div className="text-xs opacity-80">
                        Full Stack Developer
                      </div>
                    </div>
                  </div>
                </SheetTitle>
                <SheetDescription>
                  I am a dedicated final-year B.Tech IT student with a strong
                  foundation in the Full Stack Development. Passionate about
                  building scalable web applications, I thrive on solving
                  complex problems and continuously learning new technologies.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-y-4  mt-4">
                {Links.map((link, index) => (
                  <Link to={link.path} key={index} className="">
                    <Button
                      className="text-base w-full"
                      variant="secondary"
                      onClick={() => setSheetOpen(false)}
                    >
                      {link.text}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  );
}

export default Header;

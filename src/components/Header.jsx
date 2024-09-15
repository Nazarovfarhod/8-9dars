import { LogOutIcon } from "lucide-react";
import { ModeToggle } from "./ToggleMode";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="base-container flex justify-between py-5">
      <h2 className="text-3xl font-bold">Gullar App</h2>
      <div className="flex items-center gap-1">
        <ModeToggle />
        <Button variant="outline" className="flex items-center gap-2">
          Chiqish
          <LogOutIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

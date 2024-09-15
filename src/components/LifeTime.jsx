import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { periods } from "../lib/my-utils";
import { Label } from "@/components/ui/label";

export default function LifeTime() {
  return (
    <div>
      <div className="mb-3">
        <Label className="mb-1 ml-2">Gulning gulash vaqti (max)*</Label>
        <div className="flex gap-3">
          <Input
            name="lifeTime"
            placeholder="Darvir kiriting"
            className="w-full"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

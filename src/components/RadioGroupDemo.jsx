import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupDemo({ setColor }) {
  return (
    <RadioGroup
      onValueChange={(value) => setColor(value)}
      className="mb-10 flex justify-between px-5"
      defaultValue="1"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="1" id="r1" />
        <Label className="cursor-pointer" htmlFor="r1">
          Ko'rinish 1
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="2" id="r2" />
        <Label className="cursor-pointer" htmlFor="r2">
          Ko'rinish 2
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="3" id="r3" />
        <Label className="cursor-pointer" htmlFor="r3">
          Ko'rinish 3
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="4" id="r4" />
        <Label className="cursor-pointer" htmlFor="r4">
          Ko'rinish 4
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="5" id="r5" />
        <Label className="cursor-pointer" htmlFor="r5">
          Ko'rinish 5
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="6" id="r6" />
        <Label className="cursor-pointer" htmlFor="r6">
          Ko'rinish 6
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="7" id="r7" />
        <Label className="cursor-pointer" htmlFor="r7">
          Ko'rinish 7
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="8" id="r8" />
        <Label className="cursor-pointer" htmlFor="r8">
          Ko'rinish 8
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="9" id="r9" />
        <Label className="cursor-pointer" htmlFor="r9">
          Ko'rinish 9
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="10" id="r10" />
        <Label className="cursor-pointer" htmlFor="r10">
          Ko'rinish 10
        </Label>
      </div>
    </RadioGroup>
  );
}

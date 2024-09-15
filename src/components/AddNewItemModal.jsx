import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getFormData, validation } from "../lib/my-utils/index";
import { useAppStore } from "../lib/zustand";
import SelectCategory from "./SelectCategory";
import SelectColor from "./SelectColor";
import { SelectCountry } from "./SelectCountry";
import LifeTime from "./LifeTime";
import UploadImage from "./UploadImage";
import { toast } from "sonner";
import Summaries from "./Summaries";

export default function AddNewItemModal() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = getFormData(e.target);
    console.log(result);
    const { checker, errorMessage } = validation(result);
    if (checker) {
      toast.warning(errorMessage);
    }
  };

  const addItemModal = useAppStore((state) => state.addItemModal);
  const setAddItemModal = useAppStore((state) => state.setAddItemModal);

  return (
    <Dialog open={addItemModal} onOpenChange={setAddItemModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ma'lumot qo'shish</DialogTitle>
          <DialogDescription>
            Inputlarga to'g'ri ma'lumot kiritish orqali yangi ma'lumot qo'shish
            mumkin
          </DialogDescription>
          <form className="" onSubmit={handleSubmit}>
            <div className="max-h-96 overflow-x-hidden overflow-y-scroll px-2">
              <div className="mb-3">
                <Label htmlFor="name" className="ml-2">
                  Gul nomi*
                </Label>
                <Input
                  id="name"
                  placeholder="Gul nomini kiriting"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="price" className="ml-2">
                  Narxi (so'mda)*
                </Label>
                <Input
                  id="price"
                  placeholder="Gul narxini kiriting"
                  name="price"
                  type="number"
                />
              </div>
              <div className="mb-3 flex items-center justify-between">
                <SelectCategory />
                <SelectColor />
              </div>

              <div className="mb-3">
                <SelectCountry />
              </div>
              <div>
                <Summaries />
              </div>
              <div className="mb-3">
                <Label className="ml-2" htmlFor="smell">
                  Hid*
                </Label>
                <Input
                  name="smell"
                  type="text"
                  id="smell"
                  placeholder="Gul hidini kiriting..."
                />
              </div>
              <div>
                <LifeTime />
              </div>
              <div className="w-full">
                <UploadImage />
              </div>
            </div>
            <div className="flex w-full justify-end gap-5 px-5">
              <Button onClick={setAddItemModal} variant="outline" type="button">
                Bekor qilish
              </Button>
              <Button type="submit">Qo'shish</Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

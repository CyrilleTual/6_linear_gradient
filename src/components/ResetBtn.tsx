import { Button } from "./ui/button";
import { resetLocalStorage } from "@/lib/utils";
import { useColorStore } from "@/store/ColorStore";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";



export default function ResetBtn() {

    const resetDefault = useColorStore((state) => state.resetDefault);

    const handleClick = () => {
        resetLocalStorage()
        resetDefault() 
    }
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="bg-red-600 hover:bg-red-700">Reset</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Êtes vous absolument certain ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
             
              <Button className="bg-blue-600 hover:bg-blue-700">Abandon</Button>
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => handleClick()} asChild>
              <Button className="bg-red-600 hover:bg-red-700">Reset</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

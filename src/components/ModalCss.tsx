"use client";
import { useColorStore } from "@/store/ColorStore";
import { useState, useEffect } from "react";
import { coppyToClipboard } from "@/lib/utils";
import { Button } from "./ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { Toaster } from "sonner";

export default function ModalCss() {

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const colors = useColorStore((state) => state.colors);
  const angle = useColorStore((state) => state.angle);
  const [cssCode, setCssCode] = useState("");

  useEffect(() => {
    setCssCode(
      `linear-gradient(${angle}deg, ${colors
        .map((color) => color.color + " " + color.position + "%")
        .join(", ")})`
    );
  }, [colors, angle]);

  const handleCopy = () => {
    coppyToClipboard(cssCode);
    toast.success(
      <span className="text-center w-[300px] ">
        ✅ copié dans le presse-papier
      </span>,
      {
        duration: 1500,
      }
    );
  };

  return (
    { isClient } && (
      <>
            <AlertDialog>
        <AlertDialogTrigger className="p-2 px-4 bg-gray-200 hover:bg-gray-300 hover:scale-110 rounded-md text-slate-800">
          Voir le CSS
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Voici le css de l&apos;effet </AlertDialogTitle>
            <AlertDialogDescription className="p-2 px-4 bg-gray-900 rounded-md text-slate-200 font-semibold">
              {cssCode}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              className="bg-blue-600 hover:bg-blue-700 "
              onClick={() => handleCopy()}
            >
              Copier dans le presse-papier
            </Button>
            <AlertDialogAction>Fermer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
       
      </AlertDialog>
      <span className="z-100">
        <Toaster richColors />
      </span>
       
      </>

    )
  );
}

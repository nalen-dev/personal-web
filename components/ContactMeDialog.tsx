"use client";

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

const ContactMeDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant={"outline"}> Contact Me </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Oops!!</DialogTitle>
            <DialogDescription>
              This feature is currently taking a little break. No need to worry,
              it will be back in action soon
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactMeDialog;

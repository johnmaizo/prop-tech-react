import {Button} from "@mui/material";
import React from "react";

interface SocialButtonFooterProps {
  props?: React.ComponentProps<typeof Button>;
  children: React.ReactNode;

  LinkComponent?: string;
  href: string;
  target: string;
  rel: string;
}

export default function SocialButtonFooter({
  props,
  children,
}: SocialButtonFooterProps) {
  return (
    <Button
      {...props}
      sx={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        p: 0.4,
        m: 0,
        border: "5px solid #243A83",
        borderRadius: "50%",
        backgroundColor: "white",
        color: "#243A83",
        "&:hover": {
          backgroundColor: "#243A83",
          color: "white",
        },
        "&:active": {
          backgroundColor: "#243A83",
          color: "white",
        },
        "&:focus": {
          backgroundColor: "#243A83",
          color: "white",
        },
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}>
      {children}
    </Button>
  );
}

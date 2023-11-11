"use client";

import { redirect } from "next/navigation";
import { useUserInfo } from "../customHook/useUserInfo";
import BasicCard from "../components/cards/basicCard";
import { Button } from "@mui/material";
import { signOut, signIn } from "next-auth/react";
import AppWrapper from "../wrapper";

export default function ProtectedRoute() {
  const userInfo = useUserInfo();

  if (!userInfo) {
    return (
      <div className="flex h-full w-full justify-center items-center mt-56">
        <Button
          color="inherit"
          onClick={() => {
            signIn();
          }}
        >
          Sign In
        </Button>
      </div>
    );
  }

  return (
    <AppWrapper>
      <div className="flex h-full w-full justify-center items-center mt-56">
        <BasicCard
          sx={{ marginBottom: 20 }}
          imgUrl={userInfo.image}
          imgAltText={userInfo.name}
          header={userInfo.name}
          subheader={""}
        >
          <Button
            color="inherit"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              redirect("/");
            }}
          >
            Home
          </Button>
        </BasicCard>
      </div>
    </AppWrapper>
  );
}

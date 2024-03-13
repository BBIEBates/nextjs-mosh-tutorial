"use client"; //NOTE: must have this at the top if you want to use onClick
//NOTE: cannot handle browser events in server components - must mark as a client component
import { useRouter } from "next/navigation"; 
//NOTE: make sure to import from 'next/navigation' not 'next/router'
import React from "react";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/users");
      }}
      className="btn btn-primary"
    >
      Create
    </button>
  );
};

export default NewUserPage;

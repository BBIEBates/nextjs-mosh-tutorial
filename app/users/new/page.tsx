'use client' //must have this at the top if you want to use onClick
import { useRouter } from "next/navigation";
//cannot handle browser events in server components - must mark as a client component
import React from "react";

const NewUserPage = () => {
  const router = useRouter();

  <button onClick={() => {router.push('/users')}} className="btn btn-primary">Create</button>
};

export default NewUserPage;

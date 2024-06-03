"use client";
import HelpDeskCard from "@/components/AdminCard/HelpDeskCard";
import {
  useDeleteHelpDeskMutation,
  useGetHelpDeskQuery,
} from "@/redux/api/baseApi";
import React from "react";
type THelpDesk = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  message: string;
};

const HelpDesk = () => {
  const { data, isLoading } = useGetHelpDeskQuery("");

  if (isLoading) {
    <h1>loading...</h1>;
  }

  return (
    <div>
      {data?.data?.map((helpDesk: THelpDesk) => (
        <HelpDeskCard helpDesk={helpDesk} key={helpDesk?._id} />
      ))}
    </div>
  );
};

export default HelpDesk;

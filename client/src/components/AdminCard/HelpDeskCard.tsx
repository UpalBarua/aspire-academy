import React from "react";
import { Button } from "../ui/button";
import { useDeleteHelpDeskMutation } from "@/redux/api/baseApi";
type THelpDesk = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  message: string;
};

const HelpDeskCard = ({ helpDesk }: { helpDesk: THelpDesk }) => {
  const { firstName, lastName, email, number, message, _id } = helpDesk;
  const [deleteHelpDesk] = useDeleteHelpDeskMutation();
  return (
    <div className="m-4 w-[600px] rounded-md bg-secondary p-4">
      <div className="flex items-center gap-4 text-[18px]">
        <h3>
          Name: {firstName}
          {lastName}
        </h3>
        <h3>Email: {email}</h3>
      </div>
      <h3 className="text-[18px]">Number: {number}</h3>
      <p className="pt-4">Message: {message}</p>
      <Button
        onClick={() => deleteHelpDesk(_id)}
        className="mt-4 rounded-md font-bold"
      >
        Delete
      </Button>
    </div>
  );
};

export default HelpDeskCard;

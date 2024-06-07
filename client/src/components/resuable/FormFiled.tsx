import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FolderPen, MailOpen, MessageCircleMore, PhoneOff } from "lucide-react";
import { Controller, Control } from "react-hook-form";

interface FormFieldProps {
  label: string;
  type: string;
  name: "firstName" | "lastName" | "email" | "number" | "message";
  control: Control<any>; // This is a simplified type; you may want to improve it.
  placeholder: string;
}

const icons: Record<FormFieldProps["name"], JSX.Element> = {
  firstName: <FolderPen size={20} />,
  lastName: <FolderPen size={20} />,
  email: <MailOpen size={20} />,
  number: <PhoneOff size={20} />,
  message: <MessageCircleMore size={22} />,
};

const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  name,
  control,
  placeholder,
}) => {
  return (
    <div
      className={`col-span-6 sm:col-span-3 ${name === "message" ? "col-span-full" : ""}`}
    >
      {/* <label className="mb-2 flex items-center gap-3 text-[15px] font-medium text-white">
        {icons[name]}
        {label}
      </label> */}
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) =>
          type === "textarea" ? (
            <Textarea
              {...field}
              className="block w-full rounded-lg border bg-secondary p-4"
              placeholder={placeholder}
            />
          ) : (
            <Input
              {...field}
              type={type}
              className="block w-full rounded-md border bg-secondary p-2.5 text-white"
              placeholder={placeholder}
            />
          )
        }
      />
    </div>
  );
};

export default FormField;

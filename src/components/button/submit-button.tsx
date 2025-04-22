"use client";

import { Button } from "@/components/ui/button";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { LoaderCircle } from "lucide-react";

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
};

export function SubmitButton({ children, pendingText = "", ...props }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} {...props} disabled={pending}>
      {pending ? (
        <div className="flex gap-2 items-center">
          {pendingText}
          <LoaderCircle className="animate-spin" size={15} />
        </div>
      ) : (
        <div className="flex items-center gap-1">{children}</div>
      )}
    </Button>
  );
}

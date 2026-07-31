"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  clinicId: number;
  currentCompleted: number;
  currentTarget: number;
};

export function SanitizationForm({
  clinicId,
  currentCompleted,
  currentTarget,
}: Props) {

  const [completed, setCompleted] = useState(
    currentCompleted
  );

  const [target, setTarget] = useState(
    currentTarget
  );


    async function updateSanitization() {

    const response = await fetch("/api/sanitization", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        clinicId,
        completed,
        target,
        }),
    });


    if (response.ok) {
        alert("Sanitization updated");
    } else {
        alert("Update failed");
    }
    }


  return (
    <div className="space-y-4 rounded-xl border p-6">

      <h2 className="text-xl font-semibold">
        Update Sanitization
      </h2>


      <div>
        <label>
          Completed Times
        </label>

        <Input
          type="number"
          value={completed}
          onChange={(e) =>
            setCompleted(Number(e.target.value))
          }
        />
      </div>


      <div>
        <label>
          Daily Target
        </label>

        <Input
          type="number"
          value={target}
          onChange={(e) =>
            setTarget(Number(e.target.value))
          }
        />
      </div>


      <Button
        onClick={updateSanitization}
      >
        Update
      </Button>

    </div>
  );
}
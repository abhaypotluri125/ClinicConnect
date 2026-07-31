import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


export async function POST(
  request: Request
) {

  const body = await request.json();

  const {
    clinicId,
    completed,
    target,
  } = body;


  const { error } = await supabase
    .from("sanitization_logs")
    .update({
      completed_count: completed,
      target_count: target,
    })
    .eq(
      "clinic_id",
      clinicId
    );


  if (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }


  return NextResponse.json({
    success: true,
  });
}
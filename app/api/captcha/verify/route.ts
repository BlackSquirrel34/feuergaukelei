import { ALTCHA_SECRET } from "@/lib/constants";
import { verifySolution } from "altcha-lib";
import { type Payload } from "altcha-lib/types";
import { NextResponse } from "next/server";

/*
type RequestDataType = {
  payload: Payload; // Define it as Payload to clarify expected type
};

export type VerifyCaptchaApiResponse = {
  ok: boolean;
};

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as RequestDataType;

    // Log to check data received
    console.log('Received data:', data);

    if (!data.payload) {
      console.error('Payload is missing or null');
      return NextResponse.json({ ok: false, error: 'Payload is missing or null' }, { status: 400 });
    }
    
    const ok = await verifySolution(data.payload, ALTCHA_SECRET);

    return NextResponse.json({ ok });
  } catch (error) {
    console.error('Error in verification process:', error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
  

import { ALTCHA_SECRET } from "@/lib/constants"; // Import from the lib folder
import { verifySolution } from "altcha-lib";
import { type Payload } from "altcha-lib/types";
import { NextResponse } from "next/server"; */

type RequestDataType = {
  payload: string | Payload;
};

export type VerifyCaptchaApiResponse = {
  ok: boolean;
};

export async function POST(req: Request) {
  const data = (await req.json()) as RequestDataType;

  const ok = await verifySolution(data.payload, ALTCHA_SECRET);
  console.log("###this is the okay", ok)

  return NextResponse.json({
    ok,
  });
} 
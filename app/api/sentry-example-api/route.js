import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// A faulty API route to test Sentry's error monitoring
export function GET() {
  throw new Error("Pocket Fund Example API Route Error");
  return NextResponse.json({ data: "Testing PF Error..." });
}

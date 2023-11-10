import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getServerSession();

  return NextResponse.json({
    name: session?.user?.name ?? "Not logged In",
  })
}
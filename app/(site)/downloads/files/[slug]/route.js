import { getArticle } from '@/lib/utils'
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function GET(req, {params}) {

  const a = await getArticle(params.slug)
  redirect(a.files[0])

}

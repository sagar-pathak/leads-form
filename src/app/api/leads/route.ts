import data from '@/api/leads/mock_data.json'
import { NextResponse } from "next/server";

// export async function POST(request: Request, context: any) {
//   const { params } = context;
//   //const user = data.filter(x => params.userId === x.id.toString())
//   return NextResponse.json({
//     data
//   });
// }

export async function GET() {
  return NextResponse.json(data);
}
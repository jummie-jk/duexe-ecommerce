import axios from "axios";

import { NextResponse } from "next/server";
export async function GET(req: Request, { params }: { params: { productId: string } }) {
  try {
    const response = await axios.get(
      `https://api.timbu.cloud/products/${params.productId}?organization_id=54c6e82eee284b6e9faef063c60f1eb7&Appid=Y2VMNM13AZ2T3MH&Apikey=9cc167307918447a9aae54ff3c8558e020240712134726855863`
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[PRODUCTID_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
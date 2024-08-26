import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const response = await fetch(
      "https://api.timbu.cloud/products?organization_id=54c6e82eee284b6e9faef063c60f1eb7&reverse_sort=false&page=1&size=30&Appid=Y2VMNM13AZ2T3MH&Apikey=9cc167307918447a9aae54ff3c8558e020240712134726855863&total=11"
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log("[PRODUCT_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

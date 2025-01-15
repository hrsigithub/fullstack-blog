import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const prisma = new PrismaClient();

export async function main() {
  try {
    await prisma.$connect();
  } catch (e) {
    console.error(e);
    return Error("DB 接続エラー");
  } finally {
  }
}

// ブログの全取得
export const GET = async () => {
  try {
    main();

    const posts = await prisma.post.findMany();

    return NextResponse.json({ message: "成功", posts }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// ブログ投稿
export const POST = async (req: Request) => {
  try {
    const { title, description } = await req.json();

    main();

    const post = await prisma.post.create({ data: { title, description } });

    return NextResponse.json({ message: "成功", post }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

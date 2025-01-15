import { NextResponse } from "next/server";
import { main, prisma } from "../route";

// ブログの詳細記事取得
export const GET = async (req: Request) => {
  try {
    const id: number = parseInt(req.url.split("/blog/")[1]);

    main();

    const post = await prisma.post.findFirst({ where: { id } });

    if (post === null) {
      return NextResponse.json(
        { message: "データなし", post },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "成功", post }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// ブログの編集用
export const PUT = async (req: Request) => {
  try {
    const id: number = parseInt(req.url.split("/blog/")[1]);
    const { title, description } = await req.json();

    main();

    const post = await prisma.post.update({
      data: {
        title,
        description,
      },
      where: { id },
    });

    return NextResponse.json({ message: "成功", post }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// ブログの削除用
export const DELETE = async (req: Request) => {
  try {
    const id: number = parseInt(req.url.split("/blog/")[1]);

    main();

    const post = await prisma.post.delete({ where: { id } });

    return NextResponse.json({ message: "成功", post }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error", e }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

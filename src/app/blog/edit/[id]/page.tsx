"use client";

import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
// import { useParams } from "next/navigation";

const editBlog = async (
  title: string | undefined,
  description: string | undefined,
  id: number
) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, id }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
};

const getBlogById = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    return data.post;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
};

const EditPost = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // リロードを防ぐ

    toast.loading("Editting....", { id: "1" });

    // console.log(titleRef.current?.value);
    // console.log(descriptionRef.current?.value);

    await editBlog(
      titleRef.current?.value,
      descriptionRef.current?.value,
      params.id
    );

    toast.success("Editting....success", { id: "1" });

    router.push("/"); // ホームへ戻る。
    router.refresh();
    toast.dismiss();
  };

  useEffect(() => {
    console.log("id", params.id);

    getBlogById(params.id)
      .then((data) => {
        if (titleRef.current && descriptionRef.current) {
          titleRef.current.value = data.title;
          descriptionRef.current.value = data.description;
        }
      })
      .catch(() => {
        toast.error("エラーが発生しました。", { id: "1" });
      });
  });

  //   const params2 = useParams();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       if (!params2 || !params2.id) return;

  //       try {
  //         const data = await getBlogById(params2.id);
  //         if (titleRef.current && descriptionRef.current) {
  //           titleRef.current.value = data.title;
  //           descriptionRef.current.value = data.description;
  //         }
  //       } catch (error) {
  //         console.error(error);
  //         toast.error("エラーが発生しました。", { id: "1" });
  //       }
  //     };

  //     fetchData();
  //   }, [params2]);

  return (
    <>
      <Toaster />
      <div className="w-full m-auto flex my-4">
        <div className="flex flex-col justify-center items-center m-auto">
          <p className="text-2xl text-slate-200 font-bold p-3">
            ブログの編集 🚀
          </p>
          <form onSubmit={handleSubmit}>
            <input
              ref={titleRef}
              placeholder="タイトルを入力"
              type="text"
              className="rounded-md px-4 w-full py-2 my-2"
            />
            <textarea
              ref={descriptionRef}
              placeholder="記事詳細を入力"
              className="rounded-md px-4 py-2 w-full my-2"
            ></textarea>
            <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">
              更新
            </button>
            <button className="ml-2 font-semibold px-4 py-2 shadow-xl bg-red-400 rounded-lg m-auto hover:bg-slate-100">
              削除
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPost;

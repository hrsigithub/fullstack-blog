This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
---------

参考
https://www.youtube.com/watch?v=wF3g76z14Gs&t=630s

https://github.com/Shin-sibainu/next.js13-fullstack-blog


Prisma
npm i prisma --save-dev
npx prisma init

---
host:
db.gpbajuiuwkiidknghjxv.supabase.co

port:
5432

database:
postgres

user:
postgres
--


.env
DATABASE_URL="postgresql://postgres:[pass]@db.gpbajuiuwkiidknghjxv.supabase.co:5432/postgres"

マイグレ 
npx prisma migrate dev --name init

クライアント、インスコ
npm i @prisma/client

--
タイムゾーン変更

alter database postgres
set timezone to 'Asia/Tokyo';
SHOW TIME ZONE;

データベース単位で変更できない？？
---
https://github.com/timolins/react-hot-toast

npm install react-hot-toast

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Getting Started With Dockerfile

```bash
sudo docker build -t nextjs-docker .
```

## Getting Started With docker-compose.yml

```bash
sudo docker compose build
# then
sudo docker compose create
# then
sudo docker compose start
# Anda bisa mengganti perintah create dan start dengan up -d untuk membuat dan memulai container dalam satu langkah serta menjalankannya di background (detached mode)
sudo docker compose up -d
# then
sudo docker compose down
```

# 🔗 BitLinks

BitLinks is a URL shortener built with Next.js, React, Tailwind CSS, and MongoDB. Create a short link with a custom alias, then share the alias instead of the original long URL. ✨

## ✨ Features

- 🪄 Create short links using a custom alias.
- 🚀 Redirect visitors from a short link to its original URL.
- 🏠 Browse the Home, About, and Contact pages.
- 🍃 Store link records in MongoDB.

## 🧰 Tech stack

- ▲ [Next.js](https://nextjs.org/) 16
- ⚛️ [React](https://react.dev/) 19
- 🍃 [MongoDB Node.js driver](https://www.mongodb.com/docs/drivers/node/current/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/) 4

## 🚀 Getting started

### 📋 Prerequisites

- 🟢 Node.js 20.9 or later
- 📦 npm
- 🍃 A MongoDB connection string, such as one from [MongoDB Atlas](https://www.mongodb.com/atlas)

### 📥 Install dependencies

```bash
npm install
```

### 🔐 Configure environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/?retryWrites=true&w=majority
NEXT_PUBLIC_HOST=http://localhost:3000
```

Replace the MongoDB URI placeholders with your database credentials. Keep `.env.local` private; do not commit credentials. 🔒

`MONGODB_URI` is required by the server-side MongoDB client. `NEXT_PUBLIC_HOST` is the base URL used to display generated links. For deployment, set it to the public origin of your app, for example `https://your-domain.example`.

### 💻 Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🪄 Using BitLinks

1. 🔗 Open `/shorten`.
2. 📋 Enter the destination URL.
3. ✏️ Choose a short URL alias.
4. 🎉 Select **Generate** and share the resulting link.

Aliases must be unique. Visiting `/<alias>` looks up the matching record and redirects to its destination URL.

## 🗺️ Pages and API

| Path | Description |
| --- | --- |
| `/` | Home page |
| `/about` | About BitLinks |
| `/contact` | Contact details |
| `/shorten` | Create a short URL |
| `/<alias>` | Redirect to the URL associated with an alias |
| `POST /api/generate` | Create a short URL record |

The generation endpoint accepts JSON in this shape:

```json
{
  "url": "https://example.com/some/long/path",
  "shorturl": "my-link"
}
```

Short URL records are stored in the `bitlinks` database in the `url` collection, with `url` and `shorturl` fields.

## 📜 Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## 🌐 Production

Set `MONGODB_URI` and `NEXT_PUBLIC_HOST` in your deployment environment, then build and start the app:

```bash
npm run build
npm run start
```

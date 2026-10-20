import Link from "next/link"

const values = [
    {
        number: "01",
        title: "Simple by design",
        description: "Paste a long link, choose a memorable alias, and create a shorter link in just a few steps."
    },
    {
        number: "02",
        title: "Made to be useful",
        description: "Keep links tidy and easy to share across messages, profiles, documents, and more."
    },
    {
        number: "03",
        title: "Your links, your choice",
        description: "Pick a custom short URL that makes sense to you and is easier for others to remember."
    }
]

export default function About() {
    return (
        <main className="flex-1 bg-purple-50">
            <section className="relative overflow-hidden bg-purple-100">
                <div aria-hidden="true" className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-purple-200/70 blur-3xl" />
                <div aria-hidden="true" className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-fuchsia-200/40 blur-3xl" />

                <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-4 py-2 text-sm font-semibold text-purple-800">
                            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-purple-500" />
                            About BitLinks
                        </span>
                        <h1 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight text-purple-950 sm:text-5xl lg:text-6xl">
                            Good links make sharing
                            <span className="text-purple-600"> feel effortless.</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-purple-950/70">
                            BitLinks is a straightforward way to turn long URLs into short, memorable links.
                            Less clutter, easier sharing, and a custom alias that feels like yours.
                        </p>
                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                href="/shorten"
                                className="rounded-xl bg-purple-600 px-6 py-3 font-bold text-white shadow-lg shadow-purple-900/15 transition hover:-translate-y-0.5 hover:bg-purple-700"
                            >
                                Create a short link
                            </Link>
                            <Link
                                href="/"
                                className="rounded-xl border border-purple-200 bg-white/70 px-6 py-3 font-bold text-purple-800 transition hover:bg-white"
                            >
                                Back to home
                            </Link>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-md">
                        <div className="rounded-3xl border border-white/80 bg-white/80 p-6 shadow-2xl shadow-purple-900/10 backdrop-blur sm:p-8">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-500">A link, simplified</p>
                            <div className="mt-6 rounded-2xl bg-purple-50 p-4 sm:p-5">
                                <p className="text-xs font-semibold uppercase tracking-wider text-purple-400">The long version</p>
                                <p className="mt-2 break-all text-sm leading-6 text-purple-950/60">
                                    example.com/articles/ideas-for-your-next-big-project
                                </p>
                            </div>
                            <div aria-hidden="true" className="flex justify-center py-3 text-2xl font-bold text-purple-400">↓</div>
                            <div className="flex items-center justify-between gap-3 rounded-2xl bg-purple-600 p-4 text-white sm:p-5">
                                <div className="min-w-0">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-purple-200">The BitLinks version</p>
                                    <p className="mt-1 truncate font-bold">bitlinks.com/project-ideas</p>
                                </div>
                                <span aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15 text-xl">↗</span>
                            </div>
                            <p className="mt-5 text-center text-sm text-purple-950/55">
                                Same destination. A much simpler link.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
                <div className="max-w-2xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-600">Why BitLinks</p>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-purple-950 sm:text-4xl">
                        Built around the little things that make sharing better.
                    </h2>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {values.map((value) => (
                        <article key={value.number} className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/5 sm:p-7">
                            <span className="grid h-11 w-11 place-items-center rounded-xl bg-purple-100 text-sm font-extrabold text-purple-700">
                                {value.number}
                            </span>
                            <h3 className="mt-5 text-xl font-bold text-purple-950">{value.title}</h3>
                            <p className="mt-3 leading-7 text-purple-950/65">{value.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mx-6 mb-16 rounded-3xl bg-purple-800 px-6 py-12 text-center text-white sm:mx-10 sm:px-10 sm:py-14 lg:mx-auto lg:max-w-6xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-200">Ready when you are</p>
                <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Make your next link a BitLink.
                </h2>
                <p className="mx-auto mt-4 max-w-xl leading-7 text-purple-100/80">
                    Create a short, custom link and share it wherever you need.
                </p>
                <Link
                    href="/shorten"
                    className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-purple-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-purple-50"
                >
                    Get started
                </Link>
            </section>
        </main>
    )
}
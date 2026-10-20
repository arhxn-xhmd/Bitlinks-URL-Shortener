import Link from "next/link"

const contactOptions = [
    {
        label: "Email",
        title: "Send me an email",
        description: "Have a question or an idea? Drop me a message and I'll get back to you.",
        value: "ahmedarhaan732@gmail.com",
        href: "mailto:ahmedarhaan732@gmail.com",
        icon: "@"
    },
    {
        label: "GitHub",
        title: "Find me on GitHub",
        description: "Explore my projects, see what I'm building, or get in touch there.",
        value: "github.com/arhxn-xhmd",
        href: "https://github.com/arhxn-xhmd",
        icon: "↗"
    }
]

export default function Contact() {
    return (
        <main className="flex-1 overflow-hidden bg-purple-50">
            <section className="relative isolate bg-purple-100">
                <div aria-hidden="true" className="absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full bg-purple-200/70 blur-3xl" />
                <div aria-hidden="true" className="absolute -bottom-40 -left-20 -z-10 h-80 w-80 rounded-full bg-fuchsia-200/40 blur-3xl" />

                <div className="mx-auto max-w-5xl px-6 pb-28 pt-16 text-center sm:px-10 sm:pb-36 sm:pt-24">
                    <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-4 py-2 text-sm font-semibold text-purple-800">
                        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-purple-500" />
                        Contact
                    </span>
                    <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-purple-950 sm:text-5xl lg:text-6xl">
                        Let&apos;s get
                        <span className="text-purple-600"> in touch.</span>
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-purple-950/70">
                        Questions about BitLinks, feedback, or just want to say hello?
                        Choose whichever way works best for you.
                    </p>
                </div>
            </section>

            <section className="mx-auto -mt-16 max-w-5xl px-6 pb-16 sm:px-10 sm:pb-24">
                <div className="grid gap-5 md:grid-cols-2">
                    {contactOptions.map((option) => (
                        <article
                            key={option.label}
                            className="flex flex-col rounded-3xl border border-purple-100 bg-white p-7 shadow-xl shadow-purple-900/5 sm:p-9"
                        >
                            <span aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-100 text-xl font-bold text-purple-700">
                                {option.icon}
                            </span>
                            <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-purple-500">
                                {option.label}
                            </p>
                            <h2 className="mt-2 text-2xl font-extrabold text-purple-950">
                                {option.title}
                            </h2>
                            <p className="mt-3 min-h-14 leading-7 text-purple-950/65">
                                {option.description}
                            </p>
                            <a
                                href={option.href}
                                target={option.label === "GitHub" ? "_blank" : undefined}
                                rel={option.label === "GitHub" ? "noreferrer" : undefined}
                                className="mt-7 inline-flex w-fit max-w-full items-center gap-2 break-all rounded-xl bg-purple-50 px-4 py-3 font-semibold text-purple-800 transition hover:bg-purple-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                            >
                                {option.value}
                                <span aria-hidden="true">→</span>
                            </a>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-purple-800 px-6 py-8 text-center text-white sm:flex-row sm:px-9 sm:text-left">
                    <div>
                        <p className="text-xl font-bold">Ready to make a shorter link?</p>
                        <p className="mt-1 text-purple-100/80">Create a custom BitLink in just a few steps.</p>
                    </div>
                    <Link
                        href="/shorten"
                        className="shrink-0 rounded-xl bg-white px-5 py-3 font-bold text-purple-800 transition hover:bg-purple-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Try BitLinks
                    </Link>
                </div>
            </section>
        </main>
    )
}
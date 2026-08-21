function About() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-700">
            {/* HERO / INTRO SECTION */}
            <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-0 lg:py-24">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_280px] lg:gap-16">

                    {/* LEFT CONTENT */}
                    <div>
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10">
                            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                            Available for opportunities
                        </div>

                        <h1 className="mb-6 text-[32px] font-light leading-[1.2] tracking-tight text-slate-800 sm:text-[38px] lg:text-[44px]">
                            <span className="font-bold text-slate-900">
                                Hi, I'm Gaurab,
                            </span>{" "}
                            a web developer focused on building practical applications, and
                            solving problems.
                        </h1>

                        <p className="mb-5 text-[15px] leading-7 text-slate-600">
                            My interest in software development started with curiosity about
                            how applications work and gradually grew into a passion for
                            building them myself. Since then, I've been learning different
                            technologies and building projects that have helped me understand
                            both frontend development and backend systems.
                        </p>

                        <p className="mb-5 text-[15px] leading-7 text-slate-600">
                            I enjoy working with{" "}
                            <span className="font-medium text-blue-600">React</span>,{" "}
                            <span className="font-medium text-blue-600">Java</span>,{" "}
                            <span className="font-medium text-blue-600">C#</span>,{" "}
                            <span className="font-medium text-blue-600">.NET</span>,{" "}
                            <span className="font-medium text-blue-600">MySQL</span>, and modern web
                            technologies. I particularly enjoy taking an idea, breaking it
                            into smaller problems, and turning those problems into a working
                            application.
                        </p>

                        <p className="text-[15px] leading-7 text-slate-600">
                            I'm currently focused on strengthening my foundations in{" "}
                            <span className="font-medium text-blue-600">
                                data structures and algorithms
                            </span>
                            , Java, React, and software engineering. I'm also building
                            projects to gain practical experience and develop a better
                            understanding of how real-world applications are designed.
                        </p>
                    </div>

                    {/* PROFILE IMAGE */}
                    <div className="relative mt-20">
                        <div className="absolute  rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />
                        <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200/50 shadow-xl">
                            <img
                                src="../../public/About Pic/Pic 2.jpeg"
                                alt="Gaurab — Software Developer"
                                className="w-full object-cover object-top"
                            />
                            {/* Subtle overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                        </div>
                        {/* Decorative dot pattern */}
                        <div className="absolute bottom-2 -right-6 hidden h-16 w-16 rounded-full border-2 border-blue-200/60 md:block" />
                        <div className="absolute -top-3 -left-3 hidden h-10 w-10 rounded-full border-2 border-purple-200/60 md:block" />
                    </div>
                </div>

                {/* ADDITIONAL CONTENT — refined with subtle dividers */}
                <div className="mt-14 space-y-5 border-t border-slate-200/80 pt-14">
                    <p className="text-[15px] leading-7 text-slate-600">
                        What I enjoy most about development is solving problems and seeing
                        an idea gradually become something useful. Every project gives me
                        an opportunity to learn something new, whether that means
                        understanding a programming concept, working with a new framework,
                        designing a database, or finding a better solution to a problem.
                    </p>

                    <p className="text-[15px] leading-7 text-slate-600">
                        I believe that becoming a good developer is not only about knowing
                        programming languages. It is also about understanding problems,
                        writing maintainable code, learning from mistakes, and continuously
                        improving. That is the approach I try to bring to every project I
                        work on.
                    </p>

                    <p className="text-[15px] leading-7 text-slate-600">
                        Outside of programming, I enjoy exploring new ideas, learning about
                        technology, working on personal projects, listening to music,
                        travelling, and spending time away from the screen. These interests
                        give me a chance to recharge and often help me return to technical
                        problems with a fresh perspective.
                    </p>

                    <p className="text-[15px] leading-7 text-slate-600">
                        My goal is to keep learning, keep building, and grow into a
                        software engineer who can create reliable, useful, and thoughtfully
                        designed software. I'm always looking for opportunities to learn,
                        contribute, and take on new challenges.
                    </p>
                </div>
            </section>

            {/* LIFE & WORK SECTION */}
            <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8 lg:px-0">

                {/* Section Header */}
                <div className="mb-14 max-w-2xl">
                    <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        Beyond the Code
                    </span>
                    <h2 className="text-3xl font-light tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
                        A little more about{" "}
                        <span className="font-bold text-slate-900">me.</span>
                    </h2>
                    <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <p className="mt-5 text-[15px] leading-7 text-slate-600 max-w-xl">
                        Beyond writing code, these are some of the things that are part of my
                        everyday life, learning journey, and the experiences that keep me
                        motivated.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {[
                        {
                            src: "/gallery/enjoy.jpg",
                            alt: "Something I enjoy",
                            title: "What I Enjoy",
                            desc: "I enjoy exploring new places, discovering new ideas, and spending time away from the screen.",
                        },
                        {
                            src: "/gallery/workspace.jpg",
                            alt: "My workspace",
                            title: "My Workspace",
                            desc: "This is where most of my ideas turn into code, projects, experiments, and occasionally a few bugs.",
                        },
                        {
                            src: "/gallery/projects.jpg",
                            alt: "Working on a software project",
                            title: "Building Projects",
                            desc: "I learn best by building. Personal projects give me a chance to experiment with technologies and turn concepts into working software.",
                        },
                        {
                            src: "/gallery/learning.jpg",
                            alt: "Learning and coding",
                            title: "Learning & Coding",
                            desc: "I spend a lot of time improving my programming fundamentals, learning new technologies, and practicing data structures and algorithms.",
                        },
                        {
                            src: "/gallery/college.jpg",
                            alt: "University and colleagues",
                            title: "University & People",
                            desc: "Some of the best learning experiences come from working with other people, sharing ideas, and learning from different perspectives.",
                        },
                        {
                            src: "/gallery/outside.jpg",
                            alt: "Life outside programming",
                            title: "Outside the Screen",
                            desc: "Taking a break from coding is important too. I enjoy spending time with friends, exploring, travelling, and doing things that keep me refreshed.",
                        },
                    ].map((item, index) => (
                        <article
                            key={index}
                            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:shadow-xl hover:ring-slate-300"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>

                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="text-lg font-semibold text-slate-900">
                                    {item.title}
                                </h3>
                                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                                    {item.desc}
                                </p>
                                {/* Decorative link indicator */}
                                <div className="mt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span>Learn more</span>
                                    <svg
                                        className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    ))}

                </div>
            </section>
        </main>
    );
}

export default About;
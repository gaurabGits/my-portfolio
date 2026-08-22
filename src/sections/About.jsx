function About() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-700">
      {/* =========================================================
          HERO / INTRO SECTION
      ========================================================= */}
      <section
        id="about"
        className="section-shell py-20 sm:py-24 lg:py-28"
      >
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[1fr_280px] lg:gap-16">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="mb-6 text-4xl font-light leading-[1.05] tracking-[-0.05em] text-slate-800 sm:text-5xl lg:text-[4rem]">
              <span className="block font-bold text-slate-900">
                Hi, I'm Gaurab,
              </span>

              <span className="block">
                a technology enthusiast
              </span>
            </h1>

            <p className="mb-5 text-[15px] leading-7 text-slate-600">
              I'm a BCA student who enjoys spending a little too much time
              figuring out how things work. I got into programming because I
              liked the idea of taking an idea, turning it into code, and
              eventually seeing something actually work on a screen.
            </p>

            <p className="mb-5 text-[15px] leading-7 text-slate-600">
              Most of my time currently goes into web development, especially
              with the{" "}
              <span className="font-medium text-blue-600">MERN stack</span>.
              Along the way, I've also been working with{" "}
              <span className="font-medium text-blue-600">JavaScript</span>,{" "}
              <span className="font-medium text-blue-600">TypeScript</span>,{" "}
              <span className="font-medium text-blue-600">Python</span>,{" "}
              <span className="font-medium text-blue-600">Java</span>,
              databases, APIs, and data structures. I'm also curious about the
              parts of software that aren't always visible, such as networking,
              real-time communication, system design, and how different
              services work together.
            </p>

            <p className="text-[15px] leading-7 text-slate-600">
              I learn mostly by making things. A project usually starts with
              an idea, followed by a lot of questions, debugging, and the
              occasional moment of wondering why something worked five minutes
              ago but doesn't anymore. That process has taught me more than
              simply following tutorials ever could.
            </p>
          </div>

          {/* PROFILE IMAGE */}
          <div className="relative mt-15">
            <div className="absolute rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200/50 shadow-xl">
              <img
                src="../../../About Pic/Pic 2.jpeg"
                alt="Gaurab — Technology Enthusiast"
                className="w-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 hidden h-16 w-16 rounded-full border-2 border-blue-200/60 md:block" />

            <div className="absolute -top-3 -left-3 hidden h-10 w-10 rounded-full border-2 border-purple-200/60 md:block" />
          </div>
        </div>

        {/* =========================================================
            ADDITIONAL CONTENT
        ========================================================= */}
        <div className="mt-14 space-y-5 border-t border-slate-200/80 pt-14">
          <p className="text-[15px] leading-7 text-slate-600">
            One thing I've learned about programming is that knowing a
            technology is only part of the job. Understanding why something
            should be built a certain way is just as important. That's why I'm
            gradually paying more attention to code structure, databases,
            APIs, performance, and the decisions that go into building
            maintainable software.
          </p>

          <p className="text-[15px] leading-7 text-slate-600">
            University has given me the fundamentals, but personal projects
            have given me the freedom to experiment. I've worked on projects
            where I've had to think about authentication, databases, file
            handling, APIs, real-time communication, and the overall user
            experience. Not everything has gone smoothly, but solving those
            problems is usually where the most useful lessons come from.
          </p>

          <p className="text-[15px] leading-7 text-slate-600">
            I'm still figuring out which part of software engineering I want
            to specialize in. For now, I'm deliberately exploring different
            areas instead of rushing to put myself into one box. I enjoy
            frontend development, but I'm equally interested in what happens
            behind the interface and how a complete application fits
            together.
          </p>

          <p className="text-[15px] leading-7 text-slate-600">
            My current goal is simple: become a better engineer than I was
            yesterday. That means writing better code, understanding concepts
            more deeply, building projects that solve actual problems, and
            learning from people who have more experience than I do.
          </p>

          <p className="text-[15px] leading-7 text-slate-600">
            I'm at an early stage of my career, so I don't have everything
            figured out yet. I think that's part of what makes this stage
            interesting. There is still a lot to learn, plenty of mistakes to
            make, and a lot of room to grow.
          </p>
        </div>
      </section>

      {/* =========================================================
          LIFE & WORK SECTION
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8 lg:px-0">
        {/* SECTION HEADER */}
        <div className="mb-14 max-w-2xl">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Beyond the Code
          </span>

          <h2 className="text-3xl font-light tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            A little more about{" "}
            <span className="font-bold text-slate-900">me.</span>
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600">
            There's more to me than the things I build. These are a few parts
            of my everyday life that shape how I spend my time and what keeps
            me interested outside of writing code.
          </p>
        </div>

        {/* =========================================================
            GALLERY GRID
        ========================================================= */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: "/gallery/enjoy.jpg",
              alt: "Something I enjoy",
              title: "Exploring & Discovering",
              desc:
                "I like getting out of my usual routine, visiting new places, and finding interesting things along the way. Sometimes a change of environment is all it takes to come back with a fresh perspective.",
            },
            {
              src: "/gallery/workspace.jpg",
              alt: "My workspace",
              title: "My Workspace",
              desc:
                "A lot of my time is spent here experimenting with ideas, working through assignments, building projects, and trying to convince myself that the bug is somewhere else.",
            },
            {
              src: "/gallery/projects.jpg",
              alt: "Working on a software project",
              title: "Building Projects",
              desc:
                "I prefer learning through real projects. They force me to make decisions, deal with unexpected problems, and turn something theoretical into something I can actually use.",
            },
            {
              src: "/gallery/learning.jpg",
              alt: "Learning and coding",
              title: "Learning & Experimenting",
              desc:
                "There is always something new that catches my attention. I enjoy going down those occasional rabbit holes and seeing where they lead, even when they have nothing to do with what I planned to study that day.",
            },
            {
              src: "/gallery/college.jpg",
              alt: "University and colleagues",
              title: "University Life",
              desc:
                "College has been more than classes and exams. Working with classmates, sharing ideas, and dealing with group projects has taught me a lot about communication and working with other people.",
            },
            {
              src: "/gallery/outside.jpg",
              alt: "Life outside programming",
              title: "Outside the Screen",
              desc:
                "When I'm not working on something technical, I enjoy spending time with friends and family, travelling, listening to music, and simply taking a break from a screen.",
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
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
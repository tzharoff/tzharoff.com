import { ArrowRight, BookOpenCheck, CheckCircle2, Circle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { courses } from "../lib/lessons";
import { useProgress } from "../lib/progress";

export function LessonsPage() {
  const { isComplete } = useProgress();

  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pb-8 pt-12 lg:px-8">
        <p className="tig-kicker mb-4">
          <BookOpenCheck size={14} aria-hidden="true" />
          Lesson Library
        </p>
        <h1 className="tig-title max-w-3xl text-4xl text-white md:text-6xl">Tony teaches the game</h1>
        <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-tigsky">
          Written lessons you can finish in one sitting. Progress is saved on this device — no account, no paywall,
          no homework police.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-6 lg:px-8">
        {courses.map((course) => {
          const done = course.lessons.filter((l) => isComplete(l.slug)).length;
          const total = course.lessons.length;
          const firstIncomplete = course.lessons.find((l) => !isComplete(l.slug));

          return (
            <div key={course.slug} className="mb-10">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                <h2 className="tig-title text-2xl text-white md:text-3xl">{course.title}</h2>
                <span className="tig-chip ghost">
                  {done} / {total} complete
                </span>
              </div>

              <div
                className="mb-5 h-4 overflow-hidden rounded-full border-2 border-[#060d2e] bg-[#0d194a]"
                role="progressbar"
                aria-valuenow={done}
                aria-valuemin={0}
                aria-valuemax={total}
                aria-label={`${course.title} progress`}
              >
                <div
                  className="h-full bg-tigred"
                  style={{ width: `${total === 0 ? 0 : Math.round((done / total) * 100)}%` }}
                />
              </div>

              <div className="grid gap-4">
                {course.lessons.map((lesson, i) => {
                  const complete = isComplete(lesson.slug);
                  return (
                    <Link
                      key={lesson.slug}
                      to={`/learn/lessons/${lesson.slug}`}
                      className="tig-panel group flex items-center gap-5 p-5 no-underline"
                    >
                      <span
                        className={`shrink-0 ${complete ? "text-green-700" : "text-tigink/30"}`}
                        aria-hidden="true"
                      >
                        {complete ? <CheckCircle2 size={28} /> : <Circle size={28} />}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-black uppercase tracking-widest text-tigred">
                          Lesson {String(i + 1).padStart(2, "0")}
                          {complete && <span className="ml-2 text-green-700">Cleared</span>}
                        </p>
                        <h3 className="truncate text-lg font-black text-tigink">{lesson.title}</h3>
                        <p className="truncate text-sm font-semibold text-tigink/70">{lesson.objective}</p>
                      </div>
                      <span className="tig-chip hidden shrink-0 sm:inline-flex">
                        <Clock size={12} aria-hidden="true" />
                        {lesson.minutes} min
                      </span>
                      <ArrowRight size={18} className="shrink-0 text-tigink/40 group-hover:text-tigred" aria-hidden="true" />
                    </Link>
                  );
                })}
              </div>

              {firstIncomplete && (
                <div className="mt-5">
                  <Link to={`/learn/lessons/${firstIncomplete.slug}`} className="tig-btn red">
                    {done === 0 ? "Start the course" : "Continue"}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}

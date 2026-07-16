import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock, Target } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getLesson, getNeighbors } from "../lib/lessons";
import { useProgress } from "../lib/progress";

export function LessonPage() {
  const { slug } = useParams<{ slug: string }>();
  const lesson = slug ? getLesson(slug) : undefined;
  const { isComplete, toggle } = useProgress();

  if (!lesson) {
    return <Navigate to="/learn/lessons" replace />;
  }

  const { prev, next } = getNeighbors(lesson);
  const complete = isComplete(lesson.slug);

  return (
    <>
      <section className="mx-auto max-w-3xl px-5 pb-6 pt-10 lg:px-8">
        <Link
          to="/learn/lessons"
          className="mb-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-tigsky hover:text-white"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Lesson Library
        </Link>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="tig-chip red">{lesson.courseTitle}</span>
          <span className="tig-chip ghost">
            <Clock size={12} aria-hidden="true" />
            {lesson.minutes} min
          </span>
          {complete && <span className="tig-chip">Cleared ✓</span>}
        </div>
        <h1 className="tig-title text-3xl text-white md:text-5xl">{lesson.title}</h1>
        <p className="mt-4 flex items-start gap-2.5 font-semibold leading-relaxed text-tigsky">
          <Target size={18} className="mt-1 shrink-0 text-[#ff8a8f]" aria-hidden="true" />
          {lesson.objective}
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-4 lg:px-8">
        <article className="tig-panel tig-prose p-7 md:p-10" dangerouslySetInnerHTML={{ __html: lesson.html }} />

        {lesson.vocabulary.length > 0 && (
          <div className="mt-6">
            <p className="tig-kicker mb-3">Vocabulary unlocked</p>
            <div className="flex flex-wrap gap-2">
              {lesson.vocabulary.map((term) => (
                <span key={term} className="tig-chip">
                  {term}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button type="button" className={`tig-btn ${complete ? "white" : "red"}`} onClick={() => toggle(lesson.slug)}>
            {complete ? (
              <>
                <CheckCircle2 size={18} aria-hidden="true" />
                Lesson cleared
              </>
            ) : (
              <>
                <Circle size={18} aria-hidden="true" />
                Mark complete
              </>
            )}
          </button>
          {complete && next && !isComplete(next.slug) && (
            <span className="text-sm font-bold text-tigsky">Next lesson unlocked ↓</span>
          )}
        </div>

        <nav className="mt-10 grid gap-4 border-t-2 border-white/15 pt-8 sm:grid-cols-2" aria-label="Lesson">
          {prev ? (
            <Link to={`/learn/lessons/${prev.slug}`} className="tig-panel-blue group p-5 no-underline">
              <p className="mb-1 flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-tigsky">
                <ArrowLeft size={13} aria-hidden="true" />
                Previous
              </p>
              <p className="font-black text-white">{prev.title}</p>
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}
          {next && (
            <Link to={`/learn/lessons/${next.slug}`} className="tig-panel-blue group p-5 text-right no-underline">
              <p className="mb-1 flex items-center justify-end gap-1.5 text-xs font-black uppercase tracking-widest text-tigsky">
                Next
                <ArrowRight size={13} aria-hidden="true" />
              </p>
              <p className="font-black text-white">{next.title}</p>
            </Link>
          )}
        </nav>
      </section>
    </>
  );
}

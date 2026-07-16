type DialogueBoxProps = {
  heading: string;
  lines: string[];
  showPortrait?: boolean;
  className?: string;
};

export function DialogueBox({ heading, lines, showPortrait = true, className = "" }: DialogueBoxProps) {
  return (
    <div className={`tig-dialogue ${className}`}>
      <span className="tig-nameplate">Tony</span>
      <div className="flex items-start gap-4 pt-1">
        {showPortrait && (
          <div className="tig-portrait hidden sm:grid" aria-hidden="true">
            <img src="/tony.png" alt="" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="tig-dialogue-heading">{heading}</p>
          <ul className="tig-dialogue-lines">
            {lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
      <span className="tig-advance" aria-hidden="true">
        ▼
      </span>
    </div>
  );
}

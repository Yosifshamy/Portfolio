const Resume = () => {
  const steps = [
    {
      num: "01",
      tag: "DEFINE",
      title: "Ask the right question",
      desc: "Every analysis starts with a clear business question — not just 'what's in the data' but 'what decision does this enable?'",
    },
    {
      num: "02",
      tag: "PREPARE",
      title: "Clean & validate",
      desc: "I document every cleaning decision. Nulls, duplicates, type mismatches — handled systematically with a cleaning log.",
    },
    {
      num: "03",
      tag: "ANALYZE",
      title: "Query & explore",
      desc: "SQL for structured queries, Python for deeper exploration. I look for patterns, outliers, and the story hiding in the numbers.",
    },
    {
      num: "04",
      tag: "VISUALIZE",
      title: "Build the dashboard",
      desc: "Tableau for interactive dashboards. Every chart earns its place — if it doesn't answer a question, it doesn't make the cut.",
    },
    {
      num: "05",
      tag: "COMMUNICATE",
      title: "Tell the story",
      desc: "Findings without recommendations are just numbers. I always close with clear, actionable insights tied to business impact.",
    },
  ];

  return (
    <section id="resume" className="resume section">
      <div className="section-title-block reveal">
        <span className="section-num">03</span>
        <h2>How I work</h2>
      </div>

      <div className="process-steps reveal">
        {steps.map((s) => (
          <div className="process-step" key={s.num}>
            <div className="process-step-num">{s.num}</div>
            <span className="process-step-tag">{s.tag}</span>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resume;
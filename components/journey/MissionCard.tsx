interface MissionCardProps {
  mission: any;
}

export default function MissionCard({
  mission,
}: MissionCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-orange-400/15 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:border-orange-400/35 hover:bg-white/[0.06]">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-orange-200">
          {mission.category}
        </span>

        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
          {mission.duration}
        </span>
      </div>

      <h4 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white">
        {mission.title}
      </h4>

      <p className="mt-5 text-base leading-7 text-slate-300">
        {mission.objective}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {mission.skills.slice(0, 4).map((skill: string) => (
          <span
            key={skill}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-7">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
          Student Deliverables
        </p>

        <ul className="mt-4 space-y-2">
          {mission.deliverables.slice(0, 4).map((item: string) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-slate-300"
            >
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
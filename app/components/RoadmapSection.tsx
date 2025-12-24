interface RoadmapItemProps {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
}

function RoadmapItem({ title, description, status }: RoadmapItemProps) {
  const statusStyles = {
    completed: "bg-green-500/10 text-green-600 dark:text-green-400",
    "in-progress": "bg-product/10 text-product",
    planned: "bg-muted text-muted-foreground",
  };

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    planned: "Planned",
  };

  return (
    <div className="bg-card border-border flex flex-col gap-3 rounded-xl border p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-card-foreground font-semibold">{title}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}
        >
          {statusLabels[status]}
        </span>
      </div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

const roadmapItems: RoadmapItemProps[] = [
  {
    title: "Post-Capture Automation",
    description:
      "Automatically translate captured text, ask AI questions, or trigger custom workflows after text extraction.",
    status: "planned",
  },
  {
    title: "Windows & Linux Support",
    description:
      "Bring Snappit to Windows and Linux platforms with full feature parity.",
    status: "planned",
  },
];

export function RoadmapSection() {
  return (
    <section className="px-4 py-16 md:py-24" id="roadmap">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Roadmap</h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-lg">
            What&apos;s next for Snappit. We&apos;re constantly working to make it better.
          </p>
        </div>

        {/* Roadmap Items */}
        <div className="flex flex-col gap-4">
          {roadmapItems.map((item) => (
            <RoadmapItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

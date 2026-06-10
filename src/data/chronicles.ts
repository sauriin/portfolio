export type ChronicleId = "blinkit" | "flowy";

export type Chronicle = {
  id: ChronicleId;
  title: string;
  discoverySummary: string;
  problem: string;
  solution: string;
  keyFindings: string[];
  technologyStack: string[];
  repositoryLink: string;
  visualEvidence: string[];
};

export const chronicles: Chronicle[] = [
  {
    id: "blinkit",
    title: "BlinkIT Analytics",
    discoverySummary:
      "A retail analytics chronicle studying order patterns, category behavior, revenue movement, and operational signals.",
    problem:
      "Grocery sales datasets contain revenue, outlet, product, and category signals that are difficult to interpret without cleaning, modeling, and visual reporting.",
    solution:
      "Analyzed grocery sales data using Python, SQL, and Power BI. Built cleaned datasets, exploratory analysis, KPI tracking, and interactive dashboards for sales, revenue, outlet performance, and product category trends.",
    keyFindings: [
      "Identified revenue trends, product performance patterns, and outlet-level insights.",
      "Improved reporting accuracy through data cleaning, transformation, and EDA.",
      "Highlighted top-performing products and growth opportunities across outlet types.",
    ],
    technologyStack: ["Python", "SQL", "Power BI", "Excel", "EDA", "Dashboard Development"],
    repositoryLink: "https://github.com/sauriin/blinkIT_analysis",
    visualEvidence: ["Sales KPI dashboard", "Outlet performance analysis", "Product category trends"],
  },
  {
    id: "flowy",
    title: "Flowy",
    discoverySummary:
      "A productivity interface chronicle exploring smooth task capture, lightweight organization, and calm daily execution.",
    problem:
      "Workflow automation platforms need a clear way to create, execute, monitor, and understand intelligent workflows without losing visibility into execution status.",
    solution:
      "Developed an AI-powered workflow automation platform with workflow configuration storage, execution logging, monitoring visibility, and intelligent automation features.",
    keyFindings: [
      "Real-time monitoring improves visibility into workflow execution and system performance.",
      "Prisma-managed PostgreSQL models provide a reliable foundation for workflow configurations and logs.",
      "AI-assisted workflow creation can reduce manual setup for repeated processes.",
    ],
    technologyStack: ["Next.js", "TypeScript", "React", "Prisma", "PostgreSQL", "tRPC", "OpenAI", "Inngest"],
    repositoryLink: "https://github.com/sauriin/flowy-main",
    visualEvidence: ["Workflow execution logs", "Monitoring interface", "AI workflow configuration"],
  },
];

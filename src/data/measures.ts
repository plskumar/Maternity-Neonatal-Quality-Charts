export type DashboardMetricId =
  | "smm"
  | "maternalMortality"
  | "ntsvCsection"
  | "pph"
  | "obInfection"
  | "preterm"
  | "nicu"
  | "neonatalMortality"
  | "breastfeeding"
  | "lowApgar";

export type MetricCategory = "Safety" | "Outcome" | "Experience" | "Utilization";

export type MeasureDef = {
  id: DashboardMetricId;
  title: string;
  definition: string;
  unitLabel: string;
  category: MetricCategory;
  accentVar: string; // CSS variable name, e.g. '--danger'
  kpiFormat: (v: number) => string;
  target?: string;
};

export const MEASURES: MeasureDef[] = [
  {
    id: "smm",
    title: "Severe Maternal Morbidity (SMM) Rate",
    definition: "Deliveries with ≥1 SMM indicator per 1,000 deliveries.",
    unitLabel: "per 1,000 deliveries",
    category: "Safety",
    accentVar: "--danger",
    kpiFormat: (v) => v.toFixed(1),
    target: "< 12.0",
  },
  {
    id: "maternalMortality",
    title: "Maternal Mortality (In-hospital)",
    definition: "In-hospital maternal deaths per 100,000 deliveries.",
    unitLabel: "per 100,000 deliveries",
    category: "Outcome",
    accentVar: "--violet",
    kpiFormat: (v) => v.toFixed(1),
    target: "0",
  },
  {
    id: "ntsvCsection",
    title: "NTSV C-Section Rate",
    definition:
      "Primary C-section among Nulliparous, Term, Singleton, Vertex births.",
    unitLabel: "% of NTSV deliveries",
    category: "Utilization",
    accentVar: "--primary",
    kpiFormat: (v) => v.toFixed(1) + "%",
    target: "< 23%",
  },
  {
    id: "pph",
    title: "Postpartum Hemorrhage (PPH) Rate",
    definition: "PPH cases per 100 deliveries.",
    unitLabel: "% of deliveries",
    category: "Safety",
    accentVar: "--warn",
    kpiFormat: (v) => v.toFixed(1) + "%",
    target: "< 3%",
  },
  {
    id: "obInfection",
    title: "Obstetric Infection Rate",
    definition: "Maternal infection cases per 100 deliveries.",
    unitLabel: "% of deliveries",
    category: "Safety",
    accentVar: "--danger",
    kpiFormat: (v) => v.toFixed(1) + "%",
    target: "< 2%",
  },
  {
    id: "preterm",
    title: "Preterm Birth Rate",
    definition: "Live births <37 weeks gestation per 100 live births.",
    unitLabel: "% of live births",
    category: "Outcome",
    accentVar: "--primary",
    kpiFormat: (v) => v.toFixed(1) + "%",
    target: "< 9%",
  },
  {
    id: "nicu",
    title: "NICU Admission Rate",
    definition: "NICU admissions per 100 live births.",
    unitLabel: "% of live births",
    category: "Utilization",
    accentVar: "--teal",
    kpiFormat: (v) => v.toFixed(1) + "%",
    target: "< 10%",
  },
  {
    id: "neonatalMortality",
    title: "Neonatal Mortality Rate",
    definition: "Deaths within 28 days per 1,000 live births.",
    unitLabel: "per 1,000 live births",
    category: "Outcome",
    accentVar: "--violet",
    kpiFormat: (v) => v.toFixed(2),
    target: "< 2.0",
  },
  {
    id: "breastfeeding",
    title: "Exclusive Breastfeeding at Discharge",
    definition: "Percent of newborns exclusively breastfed during stay.",
    unitLabel: "% of live births",
    category: "Experience",
    accentVar: "--success",
    kpiFormat: (v) => v.toFixed(1) + "%",
    target: "> 75%",
  },
  {
    id: "lowApgar",
    title: "Low 5-min Apgar (<7)",
    definition: "Percent of newborns with 5-min Apgar score <7.",
    unitLabel: "% of live births",
    category: "Safety",
    accentVar: "--warn",
    kpiFormat: (v) => v.toFixed(2) + "%",
    target: "< 1.0%",
  },
];

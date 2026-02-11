import MetricCard from "../components/MetricCard";
import MetricSection from "../components/MetricSection";
import { MEASURES } from "../data/measures";
import {
  makeTrend,
  makeByFacility,
  makeEquityStack,
  latestKpiFromTrend,
} from "../data/mockData";
import { useMemo, useState } from "react";

const NEONATAL_IDS = [
  "preterm",
  "nicu",
  "neonatalMortality",
  "breastfeeding",
  "lowApgar",
] as const;

export default function NeonatalDashboard() {
  const [scenario, setScenario] = useState(10);

  const measures = useMemo(
    () => MEASURES.filter((m) => NEONATAL_IDS.includes(m.id as any)),
    []
  );

  return (
    <div>
      <div className="card p-16">
        <div
          className="row"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <div>
            <div className="h1">Neonatal Quality & Safety</div>
            <div className="muted mt-12">
              Key newborn outcomes + discharge quality indicators
            </div>
            <div className="row mt-12" style={{ alignItems: "center" }}>
              <span className="badge">Safety</span>
              <span className="badge">Outcome</span>
              <span className="badge">Utilization</span>
              <span className="badge">Experience</span>
            </div>
          </div>

          <div className="row" style={{ alignItems: "center" }}>
            <span className="muted">Test data:</span>
            <select
              className="select"
              value={scenario}
              onChange={(e) => setScenario(Number(e.target.value))}
            >
              <option value={10}>Scenario A</option>
              <option value={25}>Scenario B</option>
              <option value={40}>Scenario C</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid-3 mt-18">
        {measures.slice(0, 3).map((m, idx) => {
          const trend = makeTrend(m.id, scenario + idx);
          const kpi = latestKpiFromTrend(trend);
          return (
            <MetricCard
              key={m.id}
              title={m.title}
              value={m.kpiFormat(kpi)}
              subtitle={`Latest month (${
                trend[trend.length - 1].month
              }) • Unit: ${m.unitLabel}`}
              target={m.target}
              accentVar={m.accentVar}
            />
          );
        })}
      </div>

      {measures.map((m, idx) => {
        const trend = makeTrend(m.id, scenario + idx);
        const byFacility = makeByFacility(m.id, scenario + 100 + idx);
        const equity = makeEquityStack(m.id, scenario + 200 + idx);

        return (
          <MetricSection
            key={m.id}
            title={m.title}
            definition={`${m.category} • ${m.definition}`}
            yLabel={m.unitLabel}
            accentVar={m.accentVar}
            trend={trend}
            byFacility={byFacility}
            equity={equity.rows}
            equityKeys={equity.keys}
          />
        );
      })}
    </div>
  );
}

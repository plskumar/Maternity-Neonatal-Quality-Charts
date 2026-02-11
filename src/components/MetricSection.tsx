import TrendLine from "./charts/TrendLine";
import BreakdownBar from "./charts/BreakdownBar";
import BreakdownStacked from "./charts/BreakdownStacked";

type Props = {
  title: string;
  definition: string;
  yLabel: string;
  accentVar?: string;
  trend: { month: string; value: number }[];
  byFacility: { name: string; value: number }[];
  equity: { name: string; [k: string]: any }[];
  equityKeys: string[];
};

export default function MetricSection(props: Props) {
  const accentVar = props.accentVar ?? "--primary";

  return (
    <div className="card p-18 mt-18" style={{ borderTop: `4px solid var(${accentVar})` }}>
      <div
        className="row"
        style={{ justifyContent: "space-between", alignItems: "baseline" }}
      >
        <div>
          <div className="h2">{props.title}</div>
          <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>
            {props.definition}
          </div>
        </div>
        <span className="badge">3 charts</span>
      </div>

      <div className="grid-3 mt-18">
        <TrendLine data={props.trend} yLabel={props.yLabel} colorVar={accentVar} />
        <BreakdownBar
          data={props.byFacility}
          title="By Facility/Unit"
          yLabel={props.yLabel}
          colorVar={accentVar}
        />
        <BreakdownStacked
          data={props.equity}
          title="Equity / Risk Breakdown"
          keys={props.equityKeys}
          yLabel={props.yLabel}
          colorVars={[accentVar, "--teal", "--success"]}
        />
      </div>
    </div>
  );
}

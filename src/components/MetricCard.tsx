type Props = {
  title: string;
  value: string;
  subtitle: string;
  target?: string;
  accentVar?: string; // CSS var name, e.g. '--danger'
};

export default function MetricCard({
  title,
  value,
  subtitle,
  target,
  accentVar = "--primary",
}: Props) {
  return (
    <div className="card p-16" style={{ borderLeft: `6px solid var(${accentVar})` }}>
      <div className="h2">{title}</div>
      <div className="kpi mt-12">{value}</div>
      <div className="kpi-sub mt-12">{subtitle}</div>
      {target && (
        <div className="badge mt-12">
          Target: <b>{target}</b>
        </div>
      )}
    </div>
  );
}

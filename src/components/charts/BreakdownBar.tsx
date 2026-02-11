import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function BreakdownBar({
  data,
  title,
  yLabel,
  colorVar = "--primary",
}: {
  data: { name: string; value: number }[];
  title: string;
  yLabel: string;
  colorVar?: string;
}) {
  return (
    <div className="card p-14">
      <div className="h2 mb-6">{title}</div>
      <div className="muted" style={{ fontSize: 12, marginBottom: 10 }}>
        {yLabel}
      </div>
      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="value" fill={`var(${colorVar})`} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

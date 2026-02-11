import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function TrendLine({
  data,
  yLabel,
  colorVar = "--primary",
}: {
  data: { month: string; value: number }[];
  yLabel: string;
  colorVar?: string;
}) {
  return (
    <div className="card p-14">
      <div className="h2 mb-6">Trend</div>
      <div className="muted" style={{ fontSize: 12, marginBottom: 10 }}>
        {yLabel}
      </div>
      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              dot={false}
              stroke={`var(${colorVar})`}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

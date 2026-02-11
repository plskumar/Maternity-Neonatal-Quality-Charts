import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

export default function BreakdownStacked({
  data,
  title,
  keys,
  yLabel,
  colorVars = ["--primary", "--teal", "--success"],
}: {
  data: Record<string, any>[];
  title: string;
  keys: string[];
  yLabel: string;
  colorVars?: string[];
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
            <Legend />
            {keys.map((k, i) => (
              <Bar
                key={k}
                dataKey={k}
                stackId="a"
                fill={`var(${colorVars[i % colorVars.length]})`}
                radius={i === keys.length - 1 ? [8, 8, 0, 0] : [0, 0, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

import { PropsWithChildren, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const { pathname } = useLocation();

  const title = useMemo(() => {
    if (pathname.startsWith("/neonatal")) return "Neonatal Dashboard";
    return "Maternity Dashboard";
  }, [pathname]);

  return (
    <div className="container">
      <div className="card p-16">
        <div className="nav">
          <div>
            <div className="h1">Maternity Metrics</div>
            <div className="muted" style={{ marginTop: 4 }}>
              Quality & safety KPIs with trends and breakdowns (test data)
            </div>
          </div>

          <div className="row" style={{ alignItems: "center" }}>
            <span className="badge">
              View: <b>{title}</b>
            </span>

            <div className="tabs">
              <NavLink
                className={({ isActive }) => "tab" + (isActive ? " active" : "")}
                to="/maternity"
              >
                Maternity
              </NavLink>
              <NavLink
                className={({ isActive }) => "tab" + (isActive ? " active" : "")}
                to="/neonatal"
              >
                Neonatal
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-18">{children}</div>
    </div>
  );
}

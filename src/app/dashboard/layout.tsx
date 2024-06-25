// src/app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>Share navigation from dashboard/Layout</nav>
      <main>{children}</main>
    </div>
  );
}

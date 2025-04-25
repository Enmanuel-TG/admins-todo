import { Sidebar, Header } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />
      <div className="pl-72">
        <Header />
        <main className="w-full pl-2"> {children}</main>
      </div>
    </div>
  );
}

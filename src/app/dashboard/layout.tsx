import { Sidebar, Header } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />
      <div className="pl-75">
        <Header />
        <main className="bg-gray-500 w-full"> {children}</main>
      </div>
    </div>
  );
}

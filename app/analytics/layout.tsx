import AdminLayout from '@/components/layout/AdminLayout';

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}

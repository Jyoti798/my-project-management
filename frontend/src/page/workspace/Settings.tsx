
import { Separator } from '@/components/ui/separator';
import WorkspaceHeader from '@/components/workspace/common/workspace-header';
import EditWorkspaceForm from '@/components/workspace/edit-workspace-form';
import DeleteWorkspaceCard from '@/components/workspace/settings/delete-workspace-card';
import { Permissions } from '@/constant';
import withPermission from '@/hoc/with-permission';

const Settings = () => {
  return (
    <div className="relative w-full h-auto py-2 min-h-screen bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-blue-100/50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-60 w-60 rounded-full bg-blue-200/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-60 w-60 rounded-full bg-indigo-200/10 blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 h-32 w-32 rounded-full bg-blue-300/10 blur-2xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10">
        <div className="rounded-xl bg-white/80 backdrop-blur-sm shadow-lg ring-1 ring-blue-100/50 mx-2 p-1">
          <WorkspaceHeader />
        </div>
      </div>

      <Separator className="my-6 bg-blue-200/50" />

      <main className="relative z-10">
        <div className="w-full max-w-3xl mx-auto py-3 px-4">
          {/* Main Content Card */}
          <div className="rounded-xl bg-white/90 backdrop-blur-sm shadow-xl ring-1 ring-blue-100/50 p-8">
            {/* Title Section */}
            <div className="mb-8">
              <h2 className="text-2xl leading-[36px] font-bold mb-3 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Workspace settings
              </h2>
            </div>

            {/* Settings Forms Container */}
            <div className="flex flex-col pt-0.5 px-0 space-y-6">
              {/* Edit Workspace Form Section */}
              <div className="pt-2">
                <div className="rounded-lg bg-gradient-to-br from-blue-50/40 to-indigo-50/30 p-6 border border-blue-100/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <EditWorkspaceForm />
                </div>
              </div>

              {/* Delete Workspace Card Section */}
              <div className="pt-2">
                <div className="rounded-lg bg-gradient-to-br from-red-50/40 to-orange-50/30 p-6 border border-red-100/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <DeleteWorkspaceCard />
                </div>
              </div>
            </div>

            {/* Bottom Decorative Element */}
            <div className="mt-8 pt-6 border-t border-blue-200/40">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                  <div className="h-2 w-2 rounded-full bg-blue-300"></div>
                  <span>Manage workspace configuration</span>
                  <div className="h-2 w-2 rounded-full bg-indigo-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-300/40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const SettingWoithPermission = withPermission(
  Settings,
  Permissions.MANAGE_WORKSPACE_SETTINGS
);

export default SettingWoithPermission;
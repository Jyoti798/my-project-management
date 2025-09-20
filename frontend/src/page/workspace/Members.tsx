
import { Separator } from "@/components/ui/separator";
import InviteMember from "@/components/workspace/member/invite-member";
import AllMembers from "@/components/workspace/member/all-members";
import WorkspaceHeader from "@/components/workspace/common/workspace-header";

export default function Members() {
  return (
    <div className="relative w-full h-auto pt-2 min-h-screen bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-blue-100/50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-60 w-60 rounded-full bg-blue-200/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-60 w-60 rounded-full bg-indigo-200/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-blue-300/10 blur-2xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10">
        <div className="rounded-xl bg-white/80 backdrop-blur-sm shadow-lg ring-1 ring-blue-100/50 mx-2 p-1">
          <WorkspaceHeader />
        </div>
      </div>

      <Separator className="my-6 bg-blue-200/50" />

      <main className="relative z-10">
        <div className="w-full max-w-3xl mx-auto pt-3 px-4">
          {/* Main Content Card */}
          <div className="rounded-xl bg-white/90 backdrop-blur-sm shadow-xl ring-1 ring-blue-100/50 p-8">
            {/* Title Section */}
            <div className="mb-6">
              <h2 className="text-2xl leading-[36px] font-bold mb-3 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Workspace members
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Workspace members can view and join all Workspace project, tasks
                and create new task in the Workspace.
              </p>
            </div>

            <Separator className="my-6 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 h-[1px]" />

            {/* Invite Member Section */}
            <div className="mb-6">
              <div className="rounded-lg bg-blue-50/40 p-4 border border-blue-100/60 shadow-sm">
                <InviteMember />
              </div>
            </div>

            <Separator className="my-6 bg-blue-200/40 h-[0.5px]" />

            {/* All Members Section */}
            <div>
              <div className="rounded-lg bg-gradient-to-br from-blue-50/30 to-indigo-50/30 p-4 border border-blue-100/50">
                <AllMembers />
              </div>
            </div>
          </div>

          {/* Additional Visual Elements */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500">
              <div className="h-2 w-2 rounded-full bg-blue-300"></div>
              <span>Manage your workspace team</span>
              <div className="h-2 w-2 rounded-full bg-indigo-300"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-300/40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import useCreateProjectDialog from "@/hooks/use-create-project-dialog";
import WorkspaceAnalytics from "@/components/workspace/workspace-analytics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecentProjects from "@/components/workspace/project/recent-projects";
import RecentTasks from "@/components/workspace/task/recent-tasks";
import RecentMembers from "@/components/workspace/member/recent-members";

const WorkspaceDashboard = () => {
  const { onOpen } = useCreateProjectDialog();
  return (
    <main className="relative flex flex-1 flex-col py-4 md:pt-3 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-blue-100/50 min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-60 w-60 rounded-full bg-blue-200/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-60 w-60 rounded-full bg-indigo-200/10 blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 flex items-center justify-between space-y-2 mb-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
            Workspace Overview
          </h2>
          <p className="text-gray-600 text-lg">
            Here&apos;s an overview for this workspace!
          </p>
        </div>
        <Button 
          onClick={onOpen}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-6 py-3 h-12"
        >
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Analytics Section */}
      <div className="relative z-10 mb-8">
        <div className="rounded-xl bg-white/80 backdrop-blur-sm shadow-lg ring-1 ring-blue-100/50 p-1">
          <WorkspaceAnalytics />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="relative z-10 mt-4">
        <Tabs defaultValue="projects" className="w-full">
          {/* Enhanced Tabs Container */}
          <div className="rounded-xl bg-white/90 backdrop-blur-sm shadow-xl ring-1 ring-blue-100/50 p-3">
            {/* Tab List */}
            <TabsList className="w-full justify-start border-0 bg-gradient-to-r from-blue-50 to-indigo-50 px-2 h-14 rounded-lg shadow-inner">
              <TabsTrigger 
                className="py-3 px-6 rounded-md font-semibold text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-blue-100/50 transition-all duration-300" 
                value="projects"
              >
                Recent Projects
              </TabsTrigger>
              <TabsTrigger 
                className="py-3 px-6 rounded-md font-semibold text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-blue-100/50 transition-all duration-300" 
                value="tasks"
              >
                Recent Tasks
              </TabsTrigger>
              <TabsTrigger 
                className="py-3 px-6 rounded-md font-semibold text-gray-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-blue-100/50 transition-all duration-300" 
                value="members"
              >
                Recent Members
              </TabsTrigger>
            </TabsList>

            {/* Tab Content */}
            <div className="mt-6">
              <TabsContent value="projects" className="mt-0">
                <div className="rounded-lg bg-blue-50/30 p-4 border border-blue-100">
                  <RecentProjects />
                </div>
              </TabsContent>
              <TabsContent value="tasks" className="mt-0">
                <div className="rounded-lg bg-blue-50/30 p-4 border border-blue-100">
                  <RecentTasks />
                </div>
              </TabsContent>
              <TabsContent value="members" className="mt-0">
                <div className="rounded-lg bg-blue-50/30 p-4 border border-blue-100">
                  <RecentMembers />
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-300/30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </main>
  );
};

//thencid
export default WorkspaceDashboard;

import CreateTaskDialog from "@/components/workspace/task/create-task-dialog";
import TaskTable from "@/components/workspace/task/task-table";

const Tasks = () => {
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
            All Tasks
          </h2>
          <p className="text-gray-600 text-lg">
            Here&apos;s the list of tasks for this workspace!
          </p>
        </div>
        <CreateTaskDialog />
      </div>

      {/* Task Table Section */}
      <div className="relative z-10">
        <div className="rounded-xl bg-white/90 backdrop-blur-sm shadow-xl ring-1 ring-blue-100/50 p-3">
          <TaskTable />
        </div>
      </div>
    </main>
  );
};

export default Tasks;
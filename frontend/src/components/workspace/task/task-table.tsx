

import { getColumns } from './table/columns';
import { DataTable } from './table/table';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useWorkspaceId from '@/hooks/use-workspace-id';
import { getAllTasksQueryFn } from '@/lib/api';
import { TaskType } from '@/types/api.type';

const TaskTable = () => {
  const param = useParams();
  const projectId = param.projectId as string;
  const workspaceId = useWorkspaceId();
  const columns = getColumns(projectId);

  const { data, isLoading } = useQuery({
    queryKey: ['all-tasks', workspaceId, projectId],
    queryFn: () => getAllTasksQueryFn({ workspaceId }),
    staleTime: 0,
  });

  const tasks: TaskType[] = data?.tasks || [];

  return (
    <div className="w-full relative">
      <DataTable
        isLoading={isLoading}
        data={tasks}
        columns={columns}
      />
    </div>
  );
};

export default TaskTable;
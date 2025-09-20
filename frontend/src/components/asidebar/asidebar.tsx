
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EllipsisIcon, Loader, LogOut } from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroupContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Logo from '@/components/logo';
import LogoutDialog from './logout-dialog';
import { WorkspaceSwitcher } from './workspace-switcher';
import { NavMain } from './nav-main';
import { NavProjects } from './nav-projects';
import { Separator } from '../ui/separator';
import useWorkspaceId from '@/hooks/use-workspace-id';
import { useAuthContext } from '@/context/auth-provider';
import { AvatarImage } from '@radix-ui/react-avatar';

const Asidebar = () => {
  const { isLoading, user } = useAuthContext();
  const { open } = useSidebar();
  const workspaceId = useWorkspaceId();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Sidebar 
        collapsible="icon" 
        className="bg-gradient-to-b from-blue-50 via-indigo-50 to-blue-100 border-r border-blue-200/50 shadow-xl"
      >
        {/* Header Section */}
        <SidebarHeader className="!py-0 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 backdrop-blur-sm border-b border-blue-200/40">
          <div className="flex h-[50px] items-center justify-start w-full px-1 relative">
            {/* Logo Background */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
              <div className="h-6 w-6 flex items-center justify-center text-white">
                <Logo url={`/workspace/${workspaceId}`} />
              </div>
            </div>
            {open && (
              <Link
                to={`/workspace/${workspaceId}`}
                className="hidden md:flex ml-3 items-center gap-2 self-center font-bold text-lg bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent hover:from-blue-800 hover:to-indigo-800 transition-all duration-300"
              >
                Technolution
              </Link>
            )}
            {/* Decorative element */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-blue-300/60"></div>
          </div>
        </SidebarHeader>

        {/* Content Section */}
        <SidebarContent className="!mt-0 bg-gradient-to-b from-blue-50/80 to-indigo-50/80">
          <SidebarGroup className="!py-0">
            <SidebarGroupContent className="space-y-2">
              {/* Workspace Switcher */}
              <div className="px-2 py-2">
                <div className="rounded-lg bg-white/60 backdrop-blur-sm shadow-sm border border-blue-200/50 p-2">
                  <WorkspaceSwitcher />
                </div>
              </div>

              <Separator className="mx-3 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

              {/* Navigation */}
              <div className="px-2 py-1">
                <div className="rounded-lg bg-white/40 backdrop-blur-sm shadow-sm border border-blue-200/40 p-2">
                  <NavMain />
                </div>
              </div>

              <Separator className="mx-3 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

              {/* Projects */}
              <div className="px-2 py-1">
                <div className="rounded-lg bg-white/40 backdrop-blur-sm shadow-sm border border-blue-200/40 p-2">
                  <NavProjects />
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer Section */}
        <SidebarFooter className="bg-gradient-to-r from-blue-100/70 to-indigo-100/70 backdrop-blur-sm border-t border-blue-200/50">
          <SidebarMenu>
            <SidebarMenuItem>
              {isLoading ? (
                <div className="flex items-center justify-center py-4">
                  <Loader
                    size="24px"
                    className="animate-spin text-blue-600"
                  />
                </div>
              ) : (
                <div className="p-2">
                  <div className="rounded-lg bg-white/80 backdrop-blur-sm shadow-md border border-blue-200/60 p-1">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                          size="lg"
                          className="data-[state=open]:bg-blue-100/80 data-[state=open]:text-blue-800 hover:bg-blue-50/80 transition-all duration-300"
                        >
                          <Avatar className="h-8 w-8 rounded-full ring-2 ring-blue-300/50 shadow-sm">
                            <AvatarImage src={user?.profilePicture || ''} />
                            <AvatarFallback className="rounded-full border border-blue-400/60 bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-800 font-semibold">
                              {user?.name?.split(' ')?.[0]?.charAt(0)}
                              {user?.name?.split(' ')?.[1]?.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold text-gray-800">{user?.name}</span>
                            <span className="truncate text-xs text-gray-600">{user?.email}</span>
                          </div>
                          <EllipsisIcon className="ml-auto size-4 text-blue-600" />
                        </SidebarMenuButton>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-white/95 backdrop-blur-sm border-blue-200/50 shadow-xl"
                        side={'bottom'}
                        align="start"
                        sideOffset={4}
                      >
                        <DropdownMenuGroup></DropdownMenuGroup>
                        <DropdownMenuSeparator className="bg-blue-200/50" />
                        <DropdownMenuItem 
                          onClick={() => setIsOpen(true)}
                          className="hover:bg-red-50 hover:text-red-700 transition-colors duration-200"
                        >
                          <LogOut className="text-red-500" />
                          Log out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              )}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

        {/* Rail with blue theme */}
        <SidebarRail className="bg-blue-300/30" />
      </Sidebar>

      <LogoutDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Asidebar;
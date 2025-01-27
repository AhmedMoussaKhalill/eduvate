import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Input } from "../ui/input";
import { Search, Send } from "lucide-react";
import { Button } from "../ui/button";

export default function EduChat() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-5">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>EduChat</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="relative">
          <div className="fixed bottom-0 left-96 right-36 flex justify-center p-2">
            <Input
              placeholder="Type your message here ..."
              className="h-14 w-[750px] rounded-b-none rounded-t-xl border-b-0 px-5"
            />
            <Button size="icon" className="absolute right-24 top-1/2 -translate-y-1/2 transform text-muted-foreground rounded-full">
              <Send className="size-[18px] text-white " />
            </Button>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

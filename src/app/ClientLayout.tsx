'use client';

import Image from 'next/image';
import { CheckSquare, Square } from 'lucide-react';
import {
  Sidebar,
  SidebarContent as SidebarContentComponent,
  SidebarGroup,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { assessmentData } from '@/data/assessment';
import { AssessmentProvider, useAssessment } from '@/store/AssessmentContext';
import { usePathname, useRouter } from 'next/navigation';

function NavigationContent() {
  const { state } = useAssessment();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(path);
  };
  
  return (
    <SidebarGroup>
      <SidebarMenu className="gap-2">
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <button
              onClick={handleNavigate('/question/welcome')}
              className={`text-sm text-gray-600 dark:text-gray-400 uppercase ${pathname === '/question/welcome' ? 'font-bold' : ''}`}
            >
              Início
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>

        {assessmentData.map((section, sectionIndex) => (
          <SidebarMenuItem key={section.title}>
            <SidebarMenuButton asChild>
              <button
                onClick={handleNavigate(`/question/S${sectionIndex + 1}Q1`)}
                className={`text-sm text-gray-600 dark:text-gray-400 uppercase ${pathname === `/question/S${sectionIndex + 1}Q1` ? 'font-bold' : ''}`}
              >
                {section.title}
              </button>
            </SidebarMenuButton>
            {section.questions?.length ? (
              <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                {section.questions.map((question, questionIndex) => (
                  <SidebarMenuSubItem key={`q${question.id}`}>
                    <div className="relative">
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === `/question/S${sectionIndex + 1}Q${questionIndex + 1}`}
                      >
                        <button
                          onClick={handleNavigate(`/question/S${sectionIndex + 1}Q${questionIndex + 1}`)}
                          className={`flex items-center gap-2 ${
                            pathname === `/question/S${sectionIndex + 1}Q${questionIndex + 1}` ?
                            'font-bold' : ''
                          }`}
                        >
                          {state.answers[question.id] ? (
                            <CheckSquare className="h-4 w-4" />
                          ) : (
                            <Square className="h-4 w-4" />
                          )}
                          {question.title}
                        </button>
                      </SidebarMenuSubButton>
                    </div>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            ) : null}
          </SidebarMenuItem>
        ))}

        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <button
              onClick={handleNavigate('/question/thankyou')}
              className={`text-sm text-gray-600 dark:text-gray-400 uppercase ${pathname === '/question/thankyou' ? 'font-bold' : ''}`}
            >
              Finalizar
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AssessmentProvider>
      <SidebarProvider>
        <Sidebar variant="floating">
          <SidebarContentComponent>
            <NavigationContent />
          </SidebarContentComponent>
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            {/* <Image
              src="/your-logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="dark:invert ml-auto"
            /> */}
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </AssessmentProvider>
  );
} 
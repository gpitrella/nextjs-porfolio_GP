import { Suspense } from "react";
import ChatPanel from "@/components/agent/ChatPanel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabriel Pitrella | Senior Software Engineer",
  description:
    "Chateá con el asistente de Gabriel Pitrella sobre su experiencia, tecnologías y proyectos.",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ChatPanel />
    </Suspense>
  );
}


"use client";

import { useCallback } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";

export default function App() {
  // Forçar sempre dark mode
  const scheme: "dark" = "dark";

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  // Ignorar solicitações de mudança de tema
  const handleThemeRequest = useCallback(() => {
    // Não fazer nada - sempre dark
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-end bg-black dark:bg-black">
      <div className="mx-auto w-full max-w-5xl">
        <ChatKitPanel
          theme={scheme}
          onWidgetAction={handleWidgetAction}
          onResponseEnd={handleResponseEnd}
          onThemeRequest={handleThemeRequest}
        />
      </div>
    </main>
  );
}

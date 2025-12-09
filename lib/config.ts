import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "O que você pode fazer?",
    prompt: "O que você pode fazer?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Pergunte qualquer coisa...";

export const GREETING = "Olá, como posso ajudar você hoje?";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 0, // Remover matiz de cor, usar apenas tons neutros
      tint: 0, // Sem tint
      shade: -1, // Tons escuros (preto e cinza)
    },
    accent: {
      primary: "#e5e7eb", // Cinza claro para contraste
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});

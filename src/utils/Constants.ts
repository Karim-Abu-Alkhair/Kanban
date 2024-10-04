export const TITLE = {
  Mr: "Mr.",
  Mrs: "Mrs.",
  Miss: "Miss.",
} as const;

export type TitleType = keyof typeof TITLE;

export const STORAGE_KEY = "kanban_board_data";

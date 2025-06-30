import { type ReactNode } from "react";

export interface SectionWrapperProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export type EducationCardProps = {
  institution: string;
  course: string;
  description: string;
  year_start: string;
  year_end?: string;
  progress: "completed" | "progress";
  certificate_link?: string;
};

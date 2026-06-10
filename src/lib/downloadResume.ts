import { resume } from "../data/resume";

export function downloadResume() {
  const link = document.createElement("a");
  link.href = resume.documentUrl;
  link.download = resume.fileName;
  link.click();
}

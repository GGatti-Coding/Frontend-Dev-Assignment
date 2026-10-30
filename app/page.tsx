/*
 * File: page.tsx
 * Author: Guilherme Gatti
 * Date: 2026-10-29
 * Description: The single page of the app. It takes no props. It draws
 * StudentPortal inside a centered container with padding, so the content
 * lines up with the navbar and footer and does not touch the screen edge
 * on a phone. The output is the whole student portal.
 */
import StudentPortal from "@/components/StudentPortal";

export default function Home() {
  return (
    <div className="px-5">
      <StudentPortal />
    </div>
  );
}

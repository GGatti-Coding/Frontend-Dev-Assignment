/*
 * File: Navbar.tsx
 * Author: Guilherme Gatti
 * Date: 2026-10-28
 * Description: Navigation bar shown at the top of every page through
 * app/layout.tsx. It takes no props. It renders the school's name and
 * three anchor links (Overview, Students, Add a student) from a small
 * array using .map(). Each link's href matches the id of a section in
 * StudentPortal, so clicking it jumps to that section.
 */

const navLinks  = [
    { label: "Overview", href: "#overview" },
    { label: "Students", href: "#students" },
    { label: "Add a Student", href: "#add-student" },
];

const Navbar = () => {
    return (
        <header className="sticky top-0 z-10 bg-white border-b border-slate-200">
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {/* School Name */}
                <h1 className="text-lg font-bold text-slate-900">
                    New Generation High School
                </h1>

                {/* Links that jump to sections */}
                <nav className="flex flex-wrap gap-2">
                    {navLinks.map((link) => (
                        <a 
                            key={link.href}
                            href={link.href}
                            className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full hover:bg-blue-200"
                            >
                                {link.label}
                            </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
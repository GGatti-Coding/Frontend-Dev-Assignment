/*
 * File: Footer.tsx
 * Author: Guilherme Gatti
 * Date: 2026-10-28
 * Description: Footer shown at the bottom of every page through
 * app/layout.tsx. It takes no props. It renders the school's contact
 * details (name, address, phone number and email) from a single object,
 * so they are easy to change in one place. The output is small grey
 * centered text below the page content.
 */

const schoolInfo = {
    name: "New Generation High School",
    address: "123 Learning Avenue, Calgary, AB T2P 0A1",
    phone: "(403) 555-0142",
    email: "info@newgenerationhs.ca",
};

const Footer = () => {
    return (
        <footer className="max-w-5xl mx-auto px-6 py-8 text-center text-xs text-slate-500">
            {/* School name */}
            <p className="font-semibold">{schoolInfo.name}</p>

            {/* Contact details */}
            <p>{schoolInfo.address}</p>
            <p>
                {schoolInfo.phone} · {schoolInfo.email}
            </p>
        </footer>
    );
};

export default Footer;
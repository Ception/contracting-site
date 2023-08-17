import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-rose-700 text-white text-center shadow-xl">
      <div className="container mx-auto flex flex-col items-center space-y-2">
        <p className="text-xl font-semibold">© {new Date().getFullYear()} ¡Viva la Tortilla! Take-Out Restaurant</p>
        <div className="flex space-x-4">
          <Link href="/TermAndAonditions" className="hover:text-yellow-200 transition-colors duration-300">Terms & Conditions</Link>
          <Link href="/PrivacyPolicy" className="hover:text-yellow-200 transition-colors duration-300">Privacy Policy</Link>
          <Link href="ContactUs" className="hover:text-yellow-200 transition-colors duration-300">Contact Us</Link>
        </div>
        <p className="text-sm italic">All rights reserved.</p>
      </div>
    </footer>
  );
}
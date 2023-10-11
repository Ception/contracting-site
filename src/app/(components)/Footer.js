import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 md:p-6 bg-black text-slate-200 text-center shadow-xl">
      <div className="container mx-auto flex flex-col items-center space-y-2">
        <p className="text-lg md:text-xl font-semibold">
          © {new Date().getFullYear()} Searle Quality Contracting
        </p>
      </div>
    </footer>
  );
}

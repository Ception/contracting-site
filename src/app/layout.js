import "@/styles/global.css";

export const metadata = {
  title: "Searle Quality Contracting",
  description:
    "SQC has proudly been serving Halton region and surrounding areas for over 5 yrs, providing quality craftsmanship and a high attention to detail. From inital quote , to planning , and then execution of the project; SQC ensures transparent communication and professionalism . Thus making your renovation process as easy as possible for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

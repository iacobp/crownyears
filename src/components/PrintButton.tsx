"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-block mb-10 text-sm text-gold border border-gold px-4 py-2 rounded-full hover:bg-gold hover:text-white transition-colors duration-300 print:hidden cursor-pointer"
    >
      Print this page
    </button>
  );
}

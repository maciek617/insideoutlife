import { jsPDF } from "jspdf";
import { interFont } from "./fontInter";

export function generatePdf(blocks, title = "dokument") {
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  // ---  FONT (wymagane do polskich znaków!) ---
  doc.addFileToVFS("Inter-Regular.ttf", interFont);
  doc.addFont("Inter-Regular.ttf", "Inter", "normal");
  doc.setFont("Inter", "normal");

  let y = 50;
  const margin = 40;
  const pageHeight = doc.internal.pageSize.getHeight();
  const pageWidth = doc.internal.pageSize.getWidth();

  const newPageIfNeeded = (space = 20) => {
    if (y + space > pageHeight - margin) {
      doc.addPage();
      doc.setFont("Inter", "normal");
      y = margin;
    }
  };

  const addHeading = (text) => {
    y += 30;
    newPageIfNeeded(40);
    doc.setFontSize(18);
    doc.setFont("Inter", "normal");
    doc.text(text, margin, y);
    y += 30;
  };

  const addText = (text) => {
    y += 16;
    doc.setFontSize(12);
    const lines = doc.splitTextToSize(text, pageWidth - margin * 2);
    lines.forEach((line) => {
      newPageIfNeeded(18);
      doc.text(line, margin, y);
      y += 16;
    });
  };

  addText("InsideOutLife");

  // --- RENDEROWANIE BLOKÓW ---
  blocks.forEach((block) => {
    if (block.type === "image") return; // pomijamy zdjęcia

    if (block.type === "heading") addHeading(block.data);
    if (block.type === "text") addText(block.data);
    if (block.type === "quote") addText(`"${block.data}"`);
    if (block.type === "list") block.data.forEach((i) => addText("• " + i));
  });

  addText("InsideOutLife");
  // --- NUMERACJA STRON ---
  const total = doc.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.text(
      `Strona ${i} z ${total}`,
      pageWidth - margin - 60,
      pageHeight - 20
    );
  }

  doc.setProperties({
    title: title,
    author: "InsideOutLife",
    subject: "Zdrowie psychiczne mężczyzn",
  });

  const pdfBlob = doc.output("blob");

  const url = URL.createObjectURL(pdfBlob);
  const pdfWindow = window.open(url, "_blank");

  pdfWindow.onbeforeunload = () => URL.revokeObjectURL(url);
}

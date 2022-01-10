import pdf from "../docs/cv.pdf";

export default function PdfView() {
  return (
    <>
      <iframe src={pdf}></iframe>
    </>
  );
}

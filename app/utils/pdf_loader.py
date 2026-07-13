from pypdf import PdfReader


class PDFLoader:

    @staticmethod
    def extract_text(filepath: str) -> str:

        reader = PdfReader(filepath)

        text = ""

        for page in reader.pages:

            page_text = page.extract_text()

            if page_text:
                text += page_text + "\n"

        return text
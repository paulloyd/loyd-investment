import sys
try:
    from pypdf import PdfReader
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    from pypdf import PdfReader

reader = PdfReader(sys.argv[1])
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"
print(text)

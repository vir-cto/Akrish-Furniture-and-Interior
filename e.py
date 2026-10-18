from pathlib import Path

# ============================================================
# SRESHTA LOGISTICS + FOOD
# Complete Project Code Extractor
# ============================================================

# Root folder = folder where this Python script is located
ROOT = Path(__file__).resolve().parent

# Output file
OUTPUT_FILE = ROOT / "plain.txt"


# ------------------------------------------------------------
# Folders that should NEVER be scanned
# ------------------------------------------------------------
EXCLUDED_DIRECTORIES = {
    "node_modules",
    ".git",
    ".github",
    ".next",
    "dist",
    "build",
    "out",
    "coverage",
    ".cache",
    ".turbo",
    ".vercel",
    "__pycache__",
    ".pytest_cache",
    ".idea",
    ".vscode",
}


# ------------------------------------------------------------
# Files that should NEVER be extracted
# ------------------------------------------------------------
# EXCLUDED_FILES = {
#     "plain.txt",
#     "extract_code.py",

#     # Environment / secrets
#     ".env",
#     ".env.local",
#     ".env.development",
#     ".env.development.local",
#     ".env.production",
#     ".env.production.local",
#     ".env.test",
#     ".env.test.local",

#     # OS files
#     ".DS_Store",
#     "Thumbs.db",

#     # Lock files can be excluded if you don't want them
#     # "package-lock.json",
#     # "yarn.lock",
#     # "pnpm-lock.yaml",
# }
EXCLUDED_FILES = {
    "plain.txt",

    # Python extractor scripts
    "e.py",
    "extract_code.py",

    # Dependency lock files
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml",

    # Environment / secrets
    ".env",
    ".env.local",
    ".env.development",
    ".env.development.local",
    ".env.production",
    ".env.production.local",
    ".env.test",
    ".env.test.local",

    # OS files
    ".DS_Store",
    "Thumbs.db"
}


# ------------------------------------------------------------
# File extensions that contain source/config/documentation
# ------------------------------------------------------------
ALLOWED_EXTENSIONS = {
    # JavaScript / TypeScript
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".mjs",
    ".cjs",

    # Styling
    ".css",
    ".scss",
    ".sass",
    ".less",

    # Markup
    ".html",
    ".htm",
    ".xml",

    # Data / configuration
    ".json",
    ".jsonc",
    ".yaml",
    ".yml",
    ".toml",

    # Documentation
    ".md",
    ".mdx",
    ".txt",

    # Java
    ".java",

    # C / C++
    ".c",
    ".h",
    ".cpp",
    ".hpp",

    # C#
    ".cs",

    # PHP
    ".php",

    # Go
    ".go",

    # Rust
    ".rs",

    # SQL
    ".sql",

    # Shell
    ".sh",
    ".bash",
    ".zsh",
    ".bat",
    ".cmd",
    ".ps1",

    # Firebase / security rules
    ".rules",

    # GraphQL
    ".graphql",
    ".gql",

    # Prisma
    ".prisma",

    # Docker
    ".dockerfile",
}


# ------------------------------------------------------------
# Special files WITHOUT normal extensions
# ------------------------------------------------------------
ALLOWED_FILENAMES = {
    "Dockerfile",
    "Makefile",
    "Procfile",
    ".gitignore",
    ".gitattributes",
    ".npmrc",
    ".prettierrc",
    ".prettierignore",
    ".eslintrc",
    ".eslintignore",
}


# ------------------------------------------------------------
# Binary file extensions to explicitly ignore
# ------------------------------------------------------------
BINARY_EXTENSIONS = {
    # Images
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".svg",
    ".ico",
    ".bmp",
    ".tiff",
    ".avif",

    # Video
    ".mp4",
    ".webm",
    ".mov",
    ".avi",
    ".mkv",

    # Audio
    ".mp3",
    ".wav",
    ".ogg",
    ".m4a",
    ".aac",

    # Fonts
    ".woff",
    ".woff2",
    ".ttf",
    ".otf",
    ".eot",

    # Archives
    ".zip",
    ".rar",
    ".7z",
    ".tar",
    ".gz",

    # Executables / binaries
    ".exe",
    ".dll",
    ".so",
    ".dylib",
    ".bin",

    # Documents that are not source code
    ".pdf",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
}


def should_skip_directory(directory: Path) -> bool:
    """
    Returns True if this directory should not be scanned.
    """

    return directory.name in EXCLUDED_DIRECTORIES


def should_extract_file(file_path: Path) -> bool:
    """
    Returns True if this file should be included.
    """

    filename = file_path.name
    extension = file_path.suffix.lower()

    # Explicitly excluded files
    if filename in EXCLUDED_FILES:
        return False

    # Never extract environment files
    if filename.startswith(".env"):
        return False

    # Binary files
    if extension in BINARY_EXTENSIONS:
        return False

    # Files explicitly allowed by name
    if filename in ALLOWED_FILENAMES:
        return True

    # Files with allowed source/config extensions
    if extension in ALLOWED_EXTENSIONS:
        return True

    return False


def is_binary_file(file_path: Path) -> bool:
    """
    Additional safety check to prevent binary data
    from being dumped into plain.txt.
    """

    try:
        with open(file_path, "rb") as file:
            chunk = file.read(4096)

        # NULL byte usually indicates binary data
        if b"\x00" in chunk:
            return True

        return False

    except Exception:
        return True


def read_file(file_path: Path) -> str:
    """
    Reads a source file safely.
    """

    encodings = [
        "utf-8",
        "utf-8-sig",
        "utf-16",
        "latin-1",
    ]

    for encoding in encodings:
        try:
            return file_path.read_text(
                encoding=encoding,
                errors="strict"
            )
        except (UnicodeDecodeError, UnicodeError):
            continue
        except Exception:
            break

    return ""


def get_relative_path(file_path: Path) -> str:
    """
    Returns project-relative path using / instead of \.
    """

    return file_path.relative_to(ROOT).as_posix()


def collect_files():
    """
    Recursively collect all relevant source files.
    """

    collected = []

    for current_path in ROOT.rglob("*"):

        # Ignore directories
        if current_path.is_dir():
            continue

        # Check if any parent directory is excluded
        relative_parts = current_path.relative_to(ROOT).parts

        if any(
            part in EXCLUDED_DIRECTORIES
            for part in relative_parts[:-1]
        ):
            continue

        # Check file eligibility
        if not should_extract_file(current_path):
            continue

        # Extra binary protection
        if is_binary_file(current_path):
            continue

        collected.append(current_path)

    # Sort alphabetically by relative project path
    collected.sort(
        key=lambda path: get_relative_path(path).lower()
    )

    return collected


def create_plain_file():
    """
    Creates plain.txt containing all project source code.
    """

    files = collect_files()

    print("=" * 70)
    print("SRESHTA PROJECT CODE EXTRACTOR")
    print("=" * 70)

    print(f"\nProject root:")
    print(ROOT)

    print(f"\nFiles found: {len(files)}")

    extracted_count = 0
    skipped_count = 0

    with open(
        OUTPUT_FILE,
        "w",
        encoding="utf-8",
        newline="\n"
    ) as output:

        # ----------------------------------------------------
        # Header
        # ----------------------------------------------------

        output.write(
            "============================================================\n"
        )
        output.write(
            "SRESHTA LOGISTICS + FOOD - COMPLETE SOURCE CODE\n"
        )
        output.write(
            "============================================================\n"
        )
        output.write(
            "Generated automatically from the project root.\n"
        )
        output.write(
            "Environment files and binary/dependency folders are excluded.\n"
        )
        output.write(
            "============================================================\n\n"
        )

        # ----------------------------------------------------
        # Each source file
        # ----------------------------------------------------

        for file_path in files:

            relative_path = get_relative_path(file_path)

            try:
                content = read_file(file_path)

                if content == "":
                    skipped_count += 1
                    continue

                output.write(
                    "\n\n"
                    + "=" * 80
                    + "\n"
                )

                output.write(
                    f"FILE PATH: {relative_path}\n"
                )

                output.write(
                    "=" * 80
                    + "\n\n"
                )

                output.write(content)

                # Make sure next file starts on a new line
                if not content.endswith("\n"):
                    output.write("\n")

                output.write(
                    "\n"
                    + "-" * 80
                    + "\n"
                )

                extracted_count += 1

                print(f"[EXTRACTED] {relative_path}")

            except Exception as error:
                skipped_count += 1

                print(
                    f"[SKIPPED] {relative_path} "
                    f"-> {error}"
                )

    # --------------------------------------------------------
    # Final summary
    # --------------------------------------------------------

    print("\n" + "=" * 70)
    print("EXTRACTION COMPLETE")
    print("=" * 70)

    print(f"Extracted files : {extracted_count}")
    print(f"Skipped files   : {skipped_count}")
    print(f"Output file     : {OUTPUT_FILE}")

    print("\nDone.")
    print("Open plain.txt to see the complete project source code.")


if __name__ == "__main__":
    create_plain_file()
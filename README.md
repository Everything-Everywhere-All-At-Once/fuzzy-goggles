# EEAAO — Everything Everywhere All At Once

**Every tool you need. One place. Nothing leaves your browser.**

Live → [eeaao-bay.vercel.app](https://eeaao-bay.vercel.app)

---

## What is this?

EEAAO is a free, open-source browser toolbox. Every tool runs entirely client-side — no uploads, no servers, no accounts. Your files never leave your machine.

---

## Tools

### 🎵 Audio & Music
| Tool | Path |
|------|------|
| Format Converter | `/tools/audio/convert` |
| Bitrate Analyzer | `/tools/audio/bitrate` |
| Key & BPM Detector | `/tools/audio/key-bpm` |
| Audio Trimmer | `/tools/audio/trim` |
| Metadata Editor | `/tools/audio/metadata` |
| Audio Normalizer | `/tools/audio/normalize` |

### 🎛 DJ Tools
| Tool | Path |
|------|------|
| USB Compatibility Checker | `/tools/dj/usb-check` |
| Auto-Fix & Convert | `/tools/dj/fix` |
| BPM & Key Tagger | `/tools/dj/tag` |

### 🖼 Image & Art
| Tool | Path |
|------|------|
| Format Converter | `/tools/image/convert` |
| Background Remover | `/tools/image/bg-remove` |
| Image Compressor | `/tools/image/compress` |
| AI Upscaler | `/tools/image/upscale` |
| Color Palette Extractor | `/tools/image/palette` |
| EXIF Viewer / Remover | `/tools/image/exif` |
| Image to ASCII | `/tools/image/ascii` |

### 🎬 Video
| Tool | Path |
|------|------|
| Format Converter | `/tools/video/convert` |
| Video Trimmer | `/tools/video/trim` |
| GIF Maker | `/tools/video/gif` |
| Video Compressor | `/tools/video/compress` |
| Thumbnail Extractor | `/tools/video/thumbnail` |

### 📄 Documents & PDF
| Tool | Path |
|------|------|
| Image → PDF | `/tools/docs/image-to-pdf` |
| PDF → Image | `/tools/docs/pdf-to-image` |
| PDF Merger | `/tools/docs/merge` |
| PDF Splitter | `/tools/docs/split` |
| OCR | `/tools/docs/ocr` |
| Markdown → PDF | `/tools/docs/md-to-pdf` |
| DOCX → PDF | `/tools/docs/docx-to-pdf` |
| DOCX → HTML | `/tools/docs/docx-to-html` |
| TXT / CSV → PDF | `/tools/docs/txt-to-pdf` |

### 🔐 Cybersecurity
| Tool | Path |
|------|------|
| Text Encryptor | `/tools/cyber/encrypt` |
| Hash Generator | `/tools/cyber/hash` |
| Password Generator | `/tools/cyber/password` |
| Base64 Encoder | `/tools/cyber/base64` |
| JWT Decoder | `/tools/cyber/jwt` |
| QR Generator | `/tools/cyber/qr` |
| Steganography | `/tools/cyber/stego` |

### 🤖 AI Tools
| Tool | Path |
|------|------|
| Text Summarizer | `/tools/ai/summarize` |
| Grammar Fixer | `/tools/ai/grammar` |
| Prompt Builder | `/tools/ai/prompt` |
| Code Explainer | `/tools/ai/code` |
| Image Captioner | `/tools/ai/caption` |

### 🎨 Creative
| Tool | Path |
|------|------|
| Color Palette Generator | `/tools/creative/color` |
| Font Pairer | `/tools/creative/fonts` |
| Moodboard Maker | `/tools/creative/moodboard` |
| Pattern Generator | `/tools/creative/pattern` |
| Pixel Art Editor | `/tools/creative/pixel` |

### 🌐 Web Design
| Tool | Path |
|------|------|
| CSS Gradient Generator | `/tools/web/gradient` |
| Box Shadow Generator | `/tools/web/shadow` |
| SVG Editor | `/tools/web/svg` |
| Meta Tag Generator | `/tools/web/meta` |
| Favicon Generator | `/tools/web/favicon` |
| Typography Scale | `/tools/web/typography` |
| Color System | `/tools/web/colors` |

### ⚡ Quality of Life
| Tool | Path |
|------|------|
| JSON Formatter | `/tools/qol/json` |
| Markdown Editor | `/tools/qol/markdown` |
| Regex Tester | `/tools/qol/regex` |
| UUID Generator | `/tools/qol/uuid` |
| Unit Converter | `/tools/qol/units` |
| Timezone Converter | `/tools/qol/timezone` |
| Text Diff | `/tools/qol/diff` |
| Pomodoro Timer | `/tools/qol/pomodoro` |

---

## Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Vercel
- **Runtime**: 100% client-side — no backend, no data collection

---

## Running locally

```bash
git clone https://github.com/Everything-Everywhere-All-At-Once/fuzzy-goggles
cd fuzzy-goggles
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Contributing

PRs welcome. Each tool lives in `app/tools/<category>/<tool>/page.tsx`.

To add a new tool:
1. Add an entry to `lib/tools.ts`
2. Create `app/tools/<category>/<tool>/page.tsx`
3. Use `ToolShell` for the nav/header wrapper
4. Keep it browser-only — no server calls, no external APIs

---

## License

MIT — see [LICENSE](./LICENSE)

---

## Free Library

The `/library` page links are sourced in part from [FMHY.net](https://fmhy.net) — a community-maintained wiki of free resources. All credit to their contributors.

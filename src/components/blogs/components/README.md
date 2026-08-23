# Blog components

Building blocks for blog posts. Import them from the barrel file:

```tsx
import { BlogTitle, BlogParagraph, BlogTip, BlogTerminal } from '../../components/blogs/components';
```

| Component | Purpose |
|-----------|---------|
| `BlogTitle` / `BlogHeader` | `<h1>` / `<h2>` wrappers |
| `BlogDesc` / `BlogParagraph` | Lede and body paragraphs |
| `WhiteBoldHighlight` / `NormalHighlight` / `CustomColorHighlight` | Inline highlights |
| `BlogTip` / `BlogWarn` / `BlogDontDo` | Callout boxes |
| `BlogOrderedList` / `BlogUnorderedList` | Lists, take an `items` array |
| `BlogImage` / `BlogImages` / `BlogEmoji` | Figures, side-by-side images, inline emoji |
| `BlogTerminal` | Terminal block with copy button |
| `BlogCodeBlock` | Code block with filename, language, copy button |
| `BlogTextLine` | Icon + text line |
| `BlogLink` / `BlogButton` / `BlogButtonsContainer` | Links and button groups |
| `BlogAuthor` | Author card with reply text |

Full prop tables live in `COMPONENTS.md` at the repo root.

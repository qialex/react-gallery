# Interactive Image Gallery with Editor

A high-performance image gallery and editor built with React and TypeScript. Features advanced performance optimizations, smooth image editing, and professional UX.

**[🚀 Live Demo](https://qialex.github.io/react-gallery/)**

[//]: # (![Gallery View]&#40;docs/screenshot-gallery.png&#41;)
[//]: # (![Editor View]&#40;docs/screenshot-editor.png&#41;)

## Key Features

### Performance Optimizations
- **Virtual Scrolling** — Images outside viewport are unloaded from memory, enabling infinite scroll without memory leaks
- **Smooth Progressive Loading** — Canvas-based image loading with smooth fade-in transitions
- **Intersection Observer** — Lazy loading with automatic cleanup of offscreen images

### Image Editor
- **Non-destructive Editing** — Apply filters and transformations without modifying originals
- **Complete History** — Undo/redo functionality with rollback to any edit step
- **Image Transforms**:
    - Resize with aspect ratio control
    - Grayscale filter
    - Blur effect
    - Download processed images

### User Experience
- Responsive grid layout with pagination (100 images/page)
- Keyboard navigation support
- Clean, professional UI
- Direct links to original sources (Unsplash integration)

## Tech Stack

- **React 18** with TypeScript
- **Canvas API** for image manipulation
- **Intersection Observer API** for performance
- **Custom hooks** for reusable logic (`onScreen`, `useHistory`)
- **GitHub Actions** for CI/CD deployment

## Code Highlights

### Virtual Scrolling Implementation
```typescript
// src/hooks/onSecreen.tsx
// Automatically unloads images when they leave viewport
```

### Canvas-based Image Loading
```typescript
// src/components/image/ImageCanvas.tsx
// Smooth progressive loading with fade-in effect
```

## Installation
```bash
npm install
npm start
```

Opens at `http://localhost:3000`

## Production Use

This component was developed as a technical assessment and later adopted for production use at Layer Finance (Vienna-based fintech).

---

**Built by [Alex Ishenko](https://linkedin.com/in/aishenko) | Senior Frontend Engineer**

Demonstrates: Performance optimization · State management · Canvas manipulation · TypeScript architecture
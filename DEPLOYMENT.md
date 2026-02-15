# การปรับใช้งาน (Deployment)

## ตัวเลือกการปรับใช้งาน

### 1. Vercel (แนะนำ — ฟรี)
```bash
npm install -g vercel
vercel
```
ปฏิบัติตามคำแนะนำบนหน้าจอและเลือก `Next.js` / `React` framework.

### 2. Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages
บันทึกลงใน GitHub, เปิด Settings > Pages, เลือก `gh-pages` branch แล้วสร้าง Actions workflow.

## พร้อมใช้งานผลิตภัณฑ์

```bash
npm run build
npm run preview
```

## ข้อมูลอื่น
- องค์ประกอบสร้าง: Vite + React + TypeScript
- ไบนารี่เอาต์พุต: `dist/`
- เวลาสร้าง: ~1 นาที

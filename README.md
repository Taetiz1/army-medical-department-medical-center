# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # สถานพยาบาลกรมแพทย์ทหารบก — เว็บไซต์ข้อมูล

    โปรเจกต์ตัวอย่างเว็บไซต์ให้ข้อมูลสถานพยาบาล (React + Vite + Tailwind)

    ## สถานะ
    - Scaffold: pages & components ✅
    - Home, ServiceSteps (responsive), Clinics, Rights, AfterTreatment, Contact ✅
    - Theme: Tailwind with `army-green` and `med-blue` ✅

    ## เริ่มต้น (ท้องถิ่น)

    ```bash
    npm install
    npm run dev
    ```

    ## โครงสร้างสำคัญ
    - `src/pages` — หน้าเพจหลัก (Home, ServiceSteps, Clinics, Rights, AfterTreatment, News, Contact)
    - `src/components` — ส่วนประกอบ UI (Navbar, Footer, ClinicCard, StepFlow, Accordion)
    - `public/logo.png` — โลโก้ที่ใช้ใน Navbar
    - `src/assets/flowchart.svg` — ภาพ flowchart ตัวอย่าง

    ## ต่อไปที่ควรทำ
    - เพิ่มเนื้อหาไทยฉบับสมบูรณ์และเอกสารทางการ
    - ทดสอบการเข้าถึง (accessibility) และเพิ่ม SEO/meta
    - เรียกใช้ Google Maps API key จริงสำหรับ embed

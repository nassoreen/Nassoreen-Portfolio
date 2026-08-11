import type { Project } from "@/types";
import { tr } from "framer-motion/client";

/**
 * Screenshot images are glob-imported at runtime (they depend on Vite's
 * import.meta.glob which can only run inside a module/component).
 * Call buildProjects(screenshotsByProject) from within a component or hook
 * to get the fully-resolved Project array.
 */
export const buildProjects = (
  screenshotsByProject: Record<string, string[]>,
  getMainImage: (key: string) => string
): Project[] => [
    {
      name: "FloraScan ai app",
      description:
        "แนวคิดในการพัฒนาแอพพลิเคชันที่สามารถช่วยให้ผู้ใช้ระบุและเรียนรู้เกี่ยวกับดอกไม้ผ่านการใช้เทคโนโลยีการประมวลผลภาพและปัญญาประดิษฐ์ (AI) ซึ่งมีจุดมุ่งหมายหลักในการสนับสนุนผู้ใช้ในการรู้จักดอกไม้ต่างๆ โดยสามารถสแกนหรือถ่ายภาพดอกไม้แล้วได้รับข้อมูลที่เกี่ยวข้อง เช่น ชื่อพันธุ์, ลักษณะ, วิธีการดูแล และข้อมูลสำคัญอื่นๆ ของดอกไม้ การพัฒนาแอพพลิเคชันนี้จะเน้นการใช้เครื่องมือที่มีความแม่นยำในการระบุพันธุ์ดอกไม้ รวมถึงการใช้ AI ในการตรวจจับลักษณะเฉพาะของดอกไม้ เช่น สี, รูปร่าง และขนาด เพื่อให้สามารถให้ข้อมูลได้อย่างถูกต้องและรวดเร็ว",
      image: getMainImage("project1"),
      tech: ["TypeScript", "React.js","Python", "Tensorflow"],
      screenshots: screenshotsByProject["project1"] ?? [],
      links: [
        {
          type: "GitHub",
          url: "https://github.com/nassoreen/ai-flower-recognition-app",
        },
      ],
      featured: false,
    },

    {
      name: "CMS CHATBOT : AI Chatbot",
      description:
        " AI Chatbot ของศูนย์บริการตรวจสอบและรับรองมาตรฐาน มีวัตถุประสงค์เพื่อพัฒนาระบบแชตบอทอัจฉริยะสำหรับให้บริการข้อมูลแก่ผู้ใช้งานเว็บไซต์ของศูนย์บริการตรวจสอบรับรองมาตรฐาน โดยมุ่งเน้นการเพิ่มความรวดเร็วในการเข้าถึงข้อมูล ลดภาระงานของเจ้าหน้าที่ และยกระดับประสิทธิภาพการให้บริการ ระบบถูกออกแบบให้สามารถโต้ตอบกับผู้ใช้แบบอัตโนมัติผ่านข้อความสนทนา พร้อมรองรับคำถามทั่วไปเกี่ยวกับบริการ เอกสารที่เกี่ยวข้อง และข้อมูลสำคัญอื่น ๆ ขั้นตอนการดำเนินงาน ",
      image: getMainImage("project5"),
      tech: ["JavaScript", "Django", "PostgreSQL", "Ollama"],
      screenshots: screenshotsByProject["project5"] ?? [],
      links: [{ type: "Website", url: "https://lifelineconnect.online" }],
      featured: true,
    },

    {
      name: "TMWeave",
      description:
        "แพลตฟอร์มการทำงานร่วมกันแบบเรียลไทม์สำหรับทีม รองรับกระดานคันบัน (Kanban Board) เอกสารที่แก้ไขร่วมกัน แชตภายในทีม และระบบ AI สำหรับสร้างงาน โดยซิงก์ข้อมูลผ่าน WebSocket",
      image: getMainImage("project2"),
      tech: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Groq AI",
      ],
      screenshots: screenshotsByProject["project2"] ?? [],
      links: [
        {
          type: "GitHub",
          url: "https://github.com/nassoreen/Nassoreen-Portfolio",
        },
      ],
      featured: false,
    },
        
        {
      name: "",
      description:
        "",
      image: getMainImage(""),
      tech: [""],
      screenshots: screenshotsByProject[""] ?? [],
      links: [
        { type: "Website", url: "" },
        {
          type: "GitHub",
          url: "",
        },
      ],
      featured: false,
    },
        
        {
      name: "",
      description:
        "",
      image: getMainImage(""),
      tech: [""],
      screenshots: screenshotsByProject[""] ?? [],
      links: [
        { type: "Website", url: "" },
        {
          type: "GitHub",
          url: "",
        },
      ],
      featured: false,
    },

  ];
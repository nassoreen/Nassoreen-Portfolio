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
      name: "Cosmic Explorer",
      description:
        "Cosmic Explorer is a multi-platform app that lets users dive into NASA's incredible media library. From stunning images and videos to fascinating audio clips, it brings space missions, scientific discoveries, and astronomical phenomena right to your fingertips—whether on mobile, web, or desktop.",
      image: getMainImage("project2"),
      tech: ["Flutter", "Dart", "Firebase", "Supabase"],
      screenshots: screenshotsByProject["project2"] ?? [],
      links: [
        { type: "Website", url: "https://cosmic-explorer-f4ca2.web.app/" },
        {
          type: "GitHub",
          url: "https://github.com/cheesyGarlicBread15/cosmic-explorer.git",
        },
      ],
      featured: false,
    },
    {
      name: "SafeAssist",
      description:
        "SafeAssist is a safety app made for delivery drivers. It gives quick access to police, hospitals, and auto repair services, while also letting drivers send emergency alerts to authorities and their company. Designed for peace of mind on the road, SafeAssist helps drivers stay safe, respond quickly to incidents, and navigate their routes with confidence.",
      image: getMainImage("project3"),
      tech: ["Figma", "Canva"],
      screenshots: screenshotsByProject["project3"] ?? [],
      links: [
        {
          type: "Figma",
          url: "https://www.figma.com/proto/lo51BxeeCm9c9yUQP9fUGF/SafeAssist?node-id=48-261&p=f&t=wEA5nZRI0vdUqQy3-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=208%3A274",
        },
      ],
      featured: false,
    },
    {
      name: "CSCo",
      description:
        "CSCo is the student council organization of the College of Information Sciences and Computing at Central Mindanao University. csco.space is the first ever website in the history of the organization designed to showcase updates, events, and initiatives from the council, the site serves as a hub for students to stay connected and informed. The website provides a modern, user-friendly space for the college community to engage with their student leaders and access important information.",
      image: getMainImage("project4"),
      tech: ["React.js", "Vercel", "Shadcn/ui"],
      screenshots: screenshotsByProject["project4"] ?? [],
      links: [{ type: "Website", url: "https://csco.space" }],
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
      name: "New Wing Renewables",
      description:
        "New Wing Renewables is a corporate website developed to present streamlined financing solutions for renewable energy investments. The platform highlights the company's end-to-end investment approach, industry expertise, and commitment to delivering reliable, high-quality outcomes.",
      image: getMainImage("project6"),
      tech: ["Laravel", "React.js", "Vercel", "Shadcn/ui", "Railway", "PostgreSQL"],
      screenshots: screenshotsByProject["project6"] ?? [],
      links: [{ type: "Website", url: "https://newwingrenewables.com" }],
      featured: false,
    },
  ];
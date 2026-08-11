import psuLogo from "@/assets/logos/tech_stack/PSU-logo.png";

export interface ExperienceItem {
  company: string;
  role: string;
  workType: string;
  period: string;
  description: string;
  logo?: string;
  documents?: { label: string; url: string }[];
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company:
      "ศูนย์บริการตรวจสอบและรับรองมาตรฐาน คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์",
    role: "FULL STACK DEVELOPER  (INTERN)",
    workType: "คณะวิทยาศาสตร์ มหาลัยสงขลานครินทร",
    period: "10 พ.ย. 2568 - 27 ก.พ. 2569",
    description:
      "วิเคราะห์ความต้องการของระบบและออกแบบขั้นตอนการทำงาน พัฒนาแชตบอต AI ด้วย Django, PostgreSQL, pgvector, RAG และ Ollama เพื่อให้ข้อมูลและตอบคำถามแก่ผู้ใช้งาน รวมถึงทดสอบ แก้ไขข้อผิดพลาด ปรับปรุงประสิทธิภาพของระบบ จัดทำเอกสารทางเทคนิค และนำเสนอผลการดำเนินงาน",
    logo: psuLogo,
    documents: [
      {
        label: "หนังสือรับรองการฝึกงาน",
        url: "/documents/internship-certificate.pdf",
      },
    ],
  },
];
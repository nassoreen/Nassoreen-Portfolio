export interface EducationItem {
  title: string;
  school: string;
  period: string;
  description: string;
  achievements: string[];
}

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    title: "มัธยมศึกษาตอนปลาย",
    school: "ดารุลอูลูม",
    period: "2562 - 2564",
    description: "สำเร็จการศึกษาสายวิทยาศาสตร์-คณิตศาสตร์",
    achievements: [
      "เป็นตัวแทนโรงเรียนในการแข่งขันกีฬาระดับเขต และเข้าร่วมการแข่งขันฟุตบอลระหว่างโรงเรียน แสดงให้เห็นถึงความสมดุลทั้งด้านวิชาการและกีฬา",
      "ได้คะแนนรวม 85% และติดอันดับ 5 คนแรกในชั้นเรียนอย่างสม่ำเสมอ",
    ],
  },
  {
    title: "ปริญญาตรี",
    school:
      "มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตปัตตานี",
    period: "2565 - 2569",
    description:
      "สาขาวิชาคอมพิวเตอร์และวิทยาการสารสนเทศเพื่อการจัดการ",
    achievements: [
      "พัฒนา CMSA Chatbot ระบบแชตบอต AI ด้วย Django, PostgreSQL, pgvector, RAG และ Ollama",
      "พัฒนาแอปพลิเคชันจำแนกชนิดดอกไม้ด้วย AI โดยใช้ React Native, FastAPI และ MobileNetV2",
      "ฝึกงานในตำแหน่งนักพัฒนาเว็บไซต์ ณ ศูนย์บริการตรวจสอบและรับรองมาตรฐาน คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์",
    ],
  },
];
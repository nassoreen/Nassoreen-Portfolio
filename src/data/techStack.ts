import HtmlLogo from "@/assets/logos/tech_stack/html.svg";
import CsslLogo from "@/assets/logos/tech_stack/css.svg";
import TypescriptLogo from "@/assets/logos/tech_stack/typescript.svg";
import JavacriptlLogo from "@/assets/logos/tech_stack/javascript.svg";
import ReactLogo from "@/assets/logos/tech_stack/react.svg";
import VueLogo from "@/assets/logos/tech_stack/vue.svg";
import CanvaLogo from "@/assets/logos/tech_stack/canva.svg";
import FigmaLogo from "@/assets/logos/tech_stack/figma.svg";
import GithubWhiteLogo from "@/assets/logos/tech_stack/github-white.svg";
import GithubDarkLogo from "@/assets/logos/tech_stack/github-dark.svg";
import PostgresqlLogo from "@/assets/logos/tech_stack/postgresql.svg";
import SupabaseLogo from "@/assets/logos/tech_stack/supabase.svg";
import FirebaseLogo from "@/assets/logos/tech_stack/firebase.svg";
import FlutterLogo from "@/assets/logos/tech_stack/flutter.svg";
import GitLogo from "@/assets/logos/tech_stack/git.svg";
import MysqlLogo from "@/assets/logos/tech_stack/mysql.svg";
import PhpLogo from "@/assets/logos/tech_stack/php.svg";
import PythonLogo from "@/assets/logos/tech_stack/python.svg";
import JavaLogo from "@/assets/logos/tech_stack/java.svg";
import AndroidstudioLogo from "@/assets/logos/tech_stack/androidstudio.svg";
import VscodeLogo from "@/assets/logos/tech_stack/vscode.svg";
import TailwindcssLogo from "@/assets/logos/tech_stack/tailwindcss.svg";
import VercelDarkLogo from "@/assets/logos/tech_stack/vercel-dark.svg";
import VercelWhiteLogo from "@/assets/logos/tech_stack/vercel-white.svg";
import DockerLogo from "@/assets/logos/tech_stack/docker.svg";
import PostmanLogo from "@/assets/logos/tech_stack/postman.svg";
import OllamaLogo from "@/assets/logos/tech_stack/ollama.svg";
import DjangoLogo from "@/assets/logos/tech_stack/django.svg";
import TensorflowLogo from "@/assets/logos/tech_stack/tensorflow.svg";
import NodeLogo from "@/assets/logos/tech_stack/node-js.svg";
import ViteLogo from "@/assets/logos/tech_stack/vite.svg";
import MongdbLogo from "@/assets/logos/tech_stack/mongodb.svg";
import SocketLogo from "@/assets/logos/tech_stack/socket-dot-iosvg.svg";

import type { TechCategory, TechItem } from "@/types";

export const getTechCategories = (darkMode: boolean): TechCategory[] => [
    {
        label: "Languages & Frameworks",
        items: [
            { name: "HTML", icon: HtmlLogo },
            { name: "CSS", icon: CsslLogo },
            { name: "Java", icon: JavaLogo },
            { name: "JavaScript", icon: JavacriptlLogo },
            { name: "TypeScript", icon: TypescriptLogo },
            { name: "React.js", icon: ReactLogo },
            { name: "Vue.js", icon: VueLogo },
            { name: "TailwindCSS", icon: TailwindcssLogo },
            { name: "Flutter", icon: FlutterLogo },
            { name: "Python", icon: PythonLogo },
            { name: "PHP", icon: PhpLogo },
            { name: "Django", icon: DjangoLogo },
            { name: "Node.js", icon: NodeLogo },
            { name: "Vite", icon: ViteLogo },
        ],
    },
    {
        label: "Databases, Tools & Platforms",
        items: [
            { name: "MySQL", icon: MysqlLogo },
            { name: "PostgreSQL", icon: PostgresqlLogo },
            { name: "Firebase", icon: FirebaseLogo },
            { name: "Supabase", icon: SupabaseLogo },
            { name: "Git", icon: GitLogo },
            { name: "GitHub", icon: darkMode ? GithubWhiteLogo : GithubDarkLogo },
            { name: "Vercel", icon: darkMode ? VercelWhiteLogo : VercelDarkLogo },
            { name: "Figma", icon: FigmaLogo },
            { name: "Canva", icon: CanvaLogo },
            { name: "VS Code", icon: VscodeLogo },
            { name: "Android Studio", icon: AndroidstudioLogo },
            { name: "Docker", icon: DockerLogo },
            { name: "Postman", icon: PostmanLogo },
            { name: "Ollama", icon: OllamaLogo },
            { name: "Tensorflow", icon: TensorflowLogo },
            { name: "MongoDB", icon: MongdbLogo },
            { name: "Socket.IO", icon: SocketLogo },
        ],
    },
];

/** Flat list derived from categories — useful for tech badge lookups */
export const getFlatTechStack = (darkMode: boolean): TechItem[] =>
    getTechCategories(darkMode).flatMap((c) => c.items);

/** Theme-independent flat list (icons may be wrong for theme-switching logos).
 *  Use getFlatTechStack(darkMode) wherever you need correct icons. */
export const techStackNames: string[] = [
    "Laravel", "React.js", "Vue.js", "TailwindCSS", "Flutter", "Python",
    "PHP", "Java", "Dart", "MySQL", "PostgreSQL", "Firebase", "Supabase",
    "Git", "GitHub", "Vercel", "Hostinger", "Shadcn/ui", "Figma", "Canva",
    "VS Code", "Android Studio",
];
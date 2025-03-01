import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                darkbg: "#222222", // پس‌زمینه اصلی
                darkbgsecondary: "#1a1a1a", // پس‌زمینه فرعی
                darkbgsidebar: "#181818", // پس‌زمینه سایدبار
                darkbgcard: "#2a2a2a", // پس‌زمینه کارت‌ها

                textprimary: "#e0e0e0", // متن اصلی
                textsecondary: "#b0b0b0", // متن فرعی

                icon: "#ff8800", // رنگ آیکون‌ها و لوگو
                primarybtn: "#00aaff", // رنگ دکمه‌های اصلی
                deletebtn: "#ff3b3b", // رنگ دکمه‌های حذف

                sidebaractive: "#ff8800", // رنگ آیتم انتخاب شده در سایدبار
                sidebaractivebg: "#333333", // پس‌زمینه آیتم انتخاب شده در سایدبار

                completedtask: "#999999", // رنگ تسک‌های کامل شده
                checkbox: "#00ff88", // رنگ چک‌باکس‌ها
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // darkblue: "#0E2338",
                // lightblue: "#25384B",
                darkblue: "#222222",
                lightblue: "#DDDDDD",
                darkorange: "#7A3B1A", // Equivalent to darkblue
                lightorange: "#B15938",
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;

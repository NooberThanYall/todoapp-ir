import localFont from "next/font/local";
import "../globals.css";
import { Navbar } from "../components/navbar";
import Footer from "../components/footer";
import { Metadata } from "next";

const estedadMed = localFont({
    src: "../fonts/Estedad-Medium.ttf",
});
const estedadBold = localFont({
    src: "../fonts/Estedad-Bold.ttf",
});
export const bold = estedadBold.className;
export const metadata: Metadata = {
    title: "hello",
    description: "Fuck Your Ass",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" className="dark">
            <body
                className={`${estedadMed.className} antialiased overflow-x-hidden`}
            >
                <Navbar />
                <main className=" w-3/4 mx-auto h-screen">{children}</main>
                <Footer />
            </body>
        </html>
    );
}

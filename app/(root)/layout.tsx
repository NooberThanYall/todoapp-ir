import "../globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Metadata } from "next";// ✅ Imported from a Server file
import { estedadMed } from "./fonts";


export const metadata: Metadata = {
    title: "hello",
    description: "Your description here",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa" dir="rtl" className="dark">
            <body className={`${estedadMed.className} antialiased overflow-x-hidden`}>
                <Navbar />
                <main className="w-3/4 mx-auto h-screen">{children}</main>
                <Footer />
            </body>
        </html>
    );
}

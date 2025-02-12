import localFont from "next/font/local";

export const estedadMed = localFont({
    src: "../fonts/Estedad-Medium.ttf",
});
export const estedadBold = localFont({
    src: "../fonts/Estedad-Bold.ttf",
});

export const bold = estedadBold.className;
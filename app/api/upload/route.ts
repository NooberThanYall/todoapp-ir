import { supabase } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.formData();
    const file = data.get("image");
    const userId = data.get("userId");

    if (!(file instanceof File)) {
        return NextResponse.json(
            { success: false, message: "Invalid file format" },
            { status: 400 }
        );
    }

    const fileName = `${userId}-${Date.now()}.${file.name.split(".").pop()}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
        .from("avatar")
        .upload(fileName, file, {
            contentType: file.type,
            cacheControl: "3600",
        });

    if (uploadError){

                 return NextResponse.json(
            { success: false, message: "ارور آپلود" },
            { status: 400 }
        );
    }

  

    const { data: uploadUrl } = await supabase.storage
        .from("avatar")
        .getPublicUrl(fileName);

    const {publicUrl: url} = uploadUrl;


    return NextResponse.json(
            { success: true, url },
            { status: 200 }
        );
    
}

import { z } from "zod";

export const formShema = z.object({
    title: z.string().min(3, "Minimum of 3 characters").max(100, "Maximum of 100 characters"),
    description: z.string().min(20, "Minimum of 20 characters").max(500, "Maximum of 500 characters"),
    category: z.string().min(3, "Minimum of 3 characters").max(50, "Maximum of 50 characters"),
    link: z.string().url().refine(async (url) => {
        try {
            const res = await fetch(url, { method: "HEAD" });
            const contentType = res.headers.get("content-type");

            return contentType?.startsWith("image/");
        } catch {
            return false;
        }
    }),
    pitch: z.string().min(100, "Minimum of 100 characters"),
})
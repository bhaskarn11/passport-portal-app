import { MetadataRoute } from "next";

export default function sitemap() {
    return [
        {
            url: "/index",
            lastModified: new Date()
        }
    ]
}
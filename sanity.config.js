import { defineConfig, isDev } from "sanity";

import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { LegalDoc, HelpArticle, Topic, GenDocFiles, Forms, NoticesAndUpdates } from "@/app/(admin)/cms/schemas";

const config = defineConfig({
    projectId: '6ticjj8p',
    dataset: "production",
    title: 'Passport Seva CMS',
    basePath: "/cms",
    plugins: isDev? [deskTool(), visionTool()]: [deskTool()],
    schema: {
        types: [LegalDoc, HelpArticle, Topic, GenDocFiles, Forms, NoticesAndUpdates]
    }
})

export default config
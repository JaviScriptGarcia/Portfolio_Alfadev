import type { LinkButton, PageType } from "@/content/page.types";
import { SectionSchema, TestimonialSchema } from "@/content/schemas";
import { defineCollection, z } from "astro:content";

const zodPageConfig = z.custom<PageType>();

// Pages collection schema
const pagesCollection = defineCollection({
  type: "content",
  schema: zodPageConfig,
});

const indexSchema = z.intersection(
  z.object({
    banner: SectionSchema,
    sections: z.array(SectionSchema).optional(),
    company_logos: z.any().optional(),
    section_separator: z.any().optional(),
    section_separator_after_logos: z.any().optional(),
    projects: z.array(SectionSchema).optional(),
    features: z.object({
      title: z.string(),
      description: z.string(),
      feature_list: z.array(
        z.object({
          title: z.string(),
          content: z.string(),
          icon: z.string(),
        }),
      ),
    }).optional(),
    testimonial: TestimonialSchema.optional(),
    call_to_action: z.object({
      title: z.string(),
      description: z.string(),
      button: z.custom<LinkButton>(),
    }).optional(),
  }),
  zodPageConfig,
);

const indexPage = defineCollection({
  type: "content",
  schema: indexSchema,
});

// Export collections
export const collections = {
  about: pagesCollection,
  changelog: pagesCollection,
  contact: pagesCollection,
  features: pagesCollection,
  homepage: indexPage,
  pages: pagesCollection,
  services: pagesCollection,
  projects: pagesCollection,
};



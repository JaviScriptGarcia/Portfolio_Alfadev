import type { LinkButton } from "@/content/page.types";
import { z } from "astro:content";

export const SectionSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  image: z.string().optional(),
  buttons: z.array(z.custom<LinkButton>()).optional(),
});

export const TestimonialSchema = z.object({
  title: z.string(),
  description: z.string(),
  testimonials: z.array(
    z.object({
      name: z.string(),
      title: z.string(),
      avatar: z.string(),
      content: z.string(),
    }),
  ),
});

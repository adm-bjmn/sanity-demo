import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {

    const client = createClient({

        projectId: 'vcna9kkd',
        dataset: 'production',
        apiVersion: '2023-07-28',
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.alt,
            url,
            content

        }`
    )

}

export async function getProject(slug: string): Promise<Project> {

    const client = createClient({

        projectId: 'vcna9kkd',
        dataset: 'production',
        apiVersion: '2023-07-28',
    });

    return client.fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.alt,
            url,
            content

        }`,
        { slug }
    );
}
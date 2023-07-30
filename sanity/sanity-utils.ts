import { Project } from "@/types/project";
import { Page } from "@/types/page";
import { createClient, groq } from "next-sanity";


const clientConfig = {
    projectId: 'vcna9kkd',
    dataset: 'production',
    apiVersion: '2023-07-28',
};

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

export async function getPages(): Promise<Page[]> {


    return createClient(clientConfig).fetch(

        groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
    }`

    )
}

export async function getPage(slug: string): Promise<Page> {

    return createClient(clientConfig).fetch(

        groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content
    }`,
        { slug },

    )

}
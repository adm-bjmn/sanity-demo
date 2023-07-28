
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from '@/sanity/schemas';

const config = defineConfig({
    projectId: 'vcna9kkd',
    dataset: 'production',
    title: 'my_website',
    apiVersion: '2023-07-28',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config
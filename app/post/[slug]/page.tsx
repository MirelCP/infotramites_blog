import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from '@portabletext/react';


async function getData(slug: string) {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

    const data = await client.fetch(query);

    return data;

}


export default async function SlugPage({ params, }: { params: { slug: string } }) {
    const data = await getData(params.slug) as Post;

const PortableTextComponents = {

    types: {
        image: ({value}: {value: any}) => (
            <img src={urlFor(value).url()} alt="Image" className="rounded-lg" width={800} height={800} />
        )
    }

}


    return (
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <header className="pt-6 xl:pb-6">
                <div className="space-y-1 text-center">
                    <div className="space-y-10">

                        <p className="text-base leading-6 font-medium text-teal-500">
                            {new Date(data._createdAt).toISOString().slice(0, 10)}
                        </p>
                    </div>
                </div>

                <div className="mt-4 xl:mt-10">
                    <h1 className="text-3xl leading-9 font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                        {data.title}
                    </h1>
                </div>
            </header>

            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:divide-y-0 ">
                <div className="divide-y divide-gray-200 dark:divide-gray-700 xl-col-spn-3 xl:row-span-2 xl:pb-0">

                    <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
                        <PortableText value={data.content} components={PortableTextComponents}/> 
                    </div>

                </div>
            </div>



        </div>
    )
}
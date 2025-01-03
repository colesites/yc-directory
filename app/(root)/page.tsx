import SearchForm from "@/components/SearchForm";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import {STARTUPS_QUERY} from "@/sanity/lib/queries";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";
import { auth } from "@/auth";

// export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function Home({searchParams}: {
    searchParams: Promise<{ query?: string }>
}) {
    const query = (await searchParams).query;
    const params = { search: query || null };
    const session = await auth();
    console.log(session?.id);
    const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

    return (
        <>
            <section className="purple_container">
                <div className="bg-secondary font-work-sans text-primary font-bold px-6 py-2 rounded-sm">
                    <span>Pitch, Vote and Grow</span>
                </div>
                <h1 className="heading">
                    <span className="block">Pitch Your Startup,</span>
                    <span className="block"> Connect With Entrepreneurs</span>
                </h1>
                <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
                    Competitions</p>
                <SearchForm query={query}/>
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search Results for "${query}"` : "All Startups"}
                </p>

                <ul className="mt-10 card_grid">
                    {posts?.length > 0 ? (
                        posts.map((post: StartupTypeCard) => (
                            <StartupCard key={post?._id} post={post}/>
                        ))
                    ) : (
                        <p className="no-results">No Startups Found</p>
                    )}
                </ul>
            </section>

            <SanityLive />
        </>
    );
}
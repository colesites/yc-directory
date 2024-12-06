import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {
    searchParams: Promise<{ query?: string }>
}) {
    const query = (await searchParams).query;

    const posts = [{
        _createdAt: new Date(),
        views: 55,
        author: {
            _id: 1,
            name: 'Cole',
        },
        _id: 1,
        description: 'This is a description',
        image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        category: 'Social Media App',
        title: 'Bubble',
    }]

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

                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? (
                        posts.map((post: StartupTypeCard) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p className="no-results">No Startups Found</p>
                    )}
                </ul>
            </section>
        </>
    );
}
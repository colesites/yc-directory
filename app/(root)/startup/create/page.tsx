import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";

const CreatePage = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="purple_container !min-h-[234px]">
        <h1 className="heading">Submit Your Startup Pitch</h1>
        <p className="sub-heading !max-w-3xl">
          Submit your startup idea and connect with potential investors and
          mentors.
        </p>
      </section>

      <section>
        <StartupForm />
      </section>
    </>
  );
};

export default CreatePage;

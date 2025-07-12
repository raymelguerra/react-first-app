import { Form, useActionData, useFetcher } from "react-router";
import type { Route } from "./+types/post";

const Post = () => {
  // const actionData = useActionData();

  const fetcher = useFetcher();

  const actionData = fetcher.data;
  const state = fetcher.state;

  return (
    <div>
      <h1 className="text-center my-4">Posts Page</h1>
      <fetcher.Form className="space-y-2" method="post">
        <input
          type="text"
          placeholder="Enter your post title"
          className="w-full p-2 border border-gray-300 rounded"
          name="title"
        />
        <input
          type="text"
          placeholder="Enter your post email"
          className="w-full p-2 border border-gray-300 rounded"
          name="email"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {
            state === "submitting" ? (
                <span>Submitting...</span>
            ) : (
                <span>Submit</span>
            )
          }
        </button>
      </fetcher.Form>
      {actionData && actionData.error && (
        <div className="text-red-500 mt-2">{actionData.error}</div>
      )}
      {actionData && actionData.success && (
        <div className="text-green-500 mt-2">
          Post submitted successfully! Title: {actionData.title}, Email:{" "}
          {actionData.email}
        </div>
      )}
    </div>
  );
};

//export async function clientAction({ request }: Route.ClientActionArgs) { // client side rendering
export async function action({ request }: Route.ActionArgs) { // Server side rendering
  const formData = await request.formData();
  const title = String(formData.get("title"));
  const email = String(formData.get("email"));

  if (!title.trim() || !email.trim()) {
    return { error: "Title and email are required." };
  }

  console.log("Post submitted with title:", title, "and email:", email);

  return { error: false, success: true, title, email };
}

// export async function clientAction({ request }: Route.ClientActionArgs) { // client side rendering (Este tiene prioridad sobre el anterior)

export default Post;

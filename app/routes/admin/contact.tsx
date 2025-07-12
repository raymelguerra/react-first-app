import { useLoaderData, useParams } from "react-router";
import type { Route } from "../+types/contact";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const { contactId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${contactId}`
  );
  if (!response.ok) {
    throw new Response("Contact not found", { status: 404 });
  }
  const post = await response.json();
  return { ...post };
} // Client Side Rendering

// export async function loader({params}: Route.LoaderArgs) {
//     const { contactId } = params;
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${contactId}`);
//     if (!response.ok) {
//         throw new Response("Contact not found", { status: 404 });
//     }
//     const post = await response.json();
//     return { ...post };
// } Server Side Rendering


export function HydrateFallback() {
  return (
    <div className="text-center">
      <h1 className="text-2xl text-amber-600">Loading Contact Details...</h1>
      <p>Please wait while we fetch the contact details.</p>
    </div>
  );
}

//const Posts = ({params}: Route.ComponentProps) => {
const Contact = () => {
  // const {contactId} = useParams();
  const { title, body, id } = useLoaderData();
  console.log("Contact component rendered with title:", title);
  return (
    <div>
      <h1 className="text-2xl text-amber-600">Contact Details</h1>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <p>ID: {id}</p>
      <p>This page displays details for contact with ID: {id}</p>
    </div>
  );
};

export default Contact;

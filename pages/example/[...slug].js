import { useRouter } from "next/router";

const Example = () => {
  const router = useRouter();
  let decodedSlug;
  try {
    decodedSlug = process.browser && atob(router.query.slug);
  } catch (e) {
    decodedSlug = "invalid base64 slug";
  }
  return (
    <div>
      <h1>Example</h1>
      <div>query: {JSON.stringify(router.query)}</div>
      <div>decoded slug: {decodedSlug}</div>
    </div>
  );
};

export default Example;

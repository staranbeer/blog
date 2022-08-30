import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

export default function Home() {
  const router = useRouter();
  useLayoutEffect(() => {
    router.push("/blog");
  }, []);
  return <div>hey</div>;
}

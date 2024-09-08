import { useEffect } from "react";
import { useAppStore } from "../lib/zustand";
import { getFlowers } from "../request";

export default function Home() {
  const flowers = useAppStore((state) => state.flowers);
  const admin = useAppStore((state) => state.admin);
  console.log(admin.access_token);

  useEffect(() => {
    getFlowers(admin.token);
  }, []);

  return (
    <>
      {flowers &&
        flowers.map((flower) => {
          return (
            <div key={flower.price}>
              <h1>{flower.price}</h1>
            </div>
          );
        })}
    </>
  );
}

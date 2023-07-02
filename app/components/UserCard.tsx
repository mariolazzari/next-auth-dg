import Image from "next/image";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};

export default function Card({ user, pagetype }: Props) {
  //console.log(user)

  const greeting = user?.name ? (
    <div className="flex flex-col items-center p-6 text-5xl font-bold text-black bg-white rounded-lg">
      Hello {user?.name}!
    </div>
  ) : null;

  // const emailDisplay = user?.email ? (
  //     <div className="flex flex-col items-center p-6 text-5xl font-bold text-black bg-white rounded-lg">
  //         {user?.email}
  //     </div>
  // ) : null

  const userImage = user?.image ? (
    <Image
      className="mx-auto mt-8 border-4 border-black rounded-full dark:border-slate-500 drop-shadow-xl shadow-black"
      src={user?.image}
      width={200}
      height={200}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
    />
  ) : null;

  return (
    <section className="flex flex-col gap-4">
      {greeting}
      {/* {emailDisplay} */}
      {userImage}
      <p className="text-2xl text-center">{pagetype} Page!</p>
    </section>
  );
}

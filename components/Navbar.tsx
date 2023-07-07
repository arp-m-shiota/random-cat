import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-amber-100 flex h-10 items-center">
      <div className="px-5">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="px-5">
        <Link href="/cat/cat-image">Cat</Link>
      </div>
      <div className="px-5">
        <Link href="/task/task-list">Task</Link>
      </div>
    </div>
  );
};
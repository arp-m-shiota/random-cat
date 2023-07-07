import { GetStaticProps, NextPage } from "next";

type Props = {
  tasks: Array<Data>;
};

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const TaskList: NextPage<Props> = ({ tasks }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>TaskListを表示する</h1>
      {tasks.map((task) => (
        <div key={task.id} className="border-solid border p-3 mt-4">
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("http://localhost:3000/api/task");
  const tasks = await res.json();

  return {
    props: {
      tasks,
    },
  };
};

export default TaskList;
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchApi = async (): Promise<Array<Data>> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const tasks = await res.json();
  // console.log(images);
  return tasks;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Array<Data>>
) => {
  const tasks = await fetchApi();
  res.status(200).json(tasks);
};

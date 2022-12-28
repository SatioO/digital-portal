export type BlogListProps = {
  data: Blog[];
};

export type Blog = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

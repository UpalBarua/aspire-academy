export type TCourse = {
  name: string;
  description: string;
  category: string;
  coverPicture: string;
  duration: number;
  alumni: number;
  batch: number;
  instructor: {
    picture: string;
    name: string;
    title: string;
  };
  price: {
    regular: number;
    discounted: number;
  };
  enrollment: {
    start: string;
    end: string;
  };
};

export type TCourse = {
  _id?: string;
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

export type Testimonial = {
  _id?: string;
  name: string;
  batch: number;
  image: string;
  review: string;
};

export type Event = {
  date: string;
  details: string;
  image: string;
  title: string;
};

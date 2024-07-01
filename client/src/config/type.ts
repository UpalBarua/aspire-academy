export type TBlog = {
  _id: string;
  title: string;
  date: string;
  image: string;
  details: string;
  writer: string;
};
export type THelpDesk = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  message: string;
};
export type TEvent = {
  _id: string;
  title: string;
  date: string;
  image: string;
  details: string;
};
export type TTestimonial = {
  _id: string;
  name: string;
  batch: string;
  image: string;
  review: string;
};
export type TAlumni = {
  _id: string;
  name: string;
  course: string;
  batchNo: string;
  image: string;
};
export type TManagement = {
  _id: string;
  name: string;
  position: string;
  image: string;
};

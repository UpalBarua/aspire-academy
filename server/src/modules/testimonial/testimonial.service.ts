import { testimonialModel } from "./testimonial.model";
import { TTestimonial } from "./testimonial.type";

const createTestimonial = async (latestEvent: TTestimonial) => {
  const result = await testimonialModel.create(latestEvent);
  return result;
};

const getTestimonialDb = async () => {
  const result = await testimonialModel.find();
  return result;
};
const deleteTestimonialDb = async (id: any) => {
  const result = await testimonialModel.deleteOne({ _id: id });
  return result;
};

export const testimonialService = {
  createTestimonial,
  getTestimonialDb,
  deleteTestimonialDb,
};

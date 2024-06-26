export const uploadImg = async (imageData: File) => {
  console.log("fired");
  try {
    if (!imageData) {
      throw new Error("No imageData provided to the uploadImage() function.");
    }

    const formData = new FormData();
    formData.append("image", imageData);

    console.log(formData);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );

    console.log(response);

    throw new Error("Failed to upload image: No display URL returned.");
  } catch (error) {
    throw new Error(`Failed to upload image: ${error.message}`);
  }
};

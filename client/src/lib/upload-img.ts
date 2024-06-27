export const uploadImg = async (imgFile: File) => {
  try {
    if (!imgFile) {
      throw new Error("No imgFile provided to the uploadImage() function.");
    }

    const formData = new FormData();
    formData.append("image", imgFile);

    const data = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    ).then((res) => res.json());

    if (!data.success) {
      throw new Error(`Failed to upload image.`);
    }

    return data.data.display_url;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to upload image: ${error.message}`);
    }

    throw new Error("Failed to upload image.");
  }
};

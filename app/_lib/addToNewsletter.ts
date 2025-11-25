export const addToNewsletter = async (email: string) => {
  const response = await fetch(
    "https://connect.mailerlite.com/api/subscribers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add to newsletter list");
  }
};

export default addToNewsletter;

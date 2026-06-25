export async function getCourse() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");

    if (!response.ok) {
      throw new Error("Error: ", response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error.message);
  }
}

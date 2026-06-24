export async function getCourse() {
  try {
    const response = await fetch(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json",
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data[0].rate);
    return data[0].rate;
  } catch (error) {
    console.log("Error: ", error.message);
    throw error;
  }
}

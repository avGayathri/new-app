
export default async function fetchdata() {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    console.log(data);
    return data;
}


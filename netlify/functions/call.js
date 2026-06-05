exports.handler = async (event) => {
  const selected = event.queryStringParameters.selected;

  const BASEURL = `https://newsapi.org/v2/top-headlines?category=${selected}`;

  const res = await fetch(`${BASEURL}`, {
    method: "GET",
    headers: {
      "X-Api-Key": "056440289f67420182b718787d67a819",
    },
  });
  const data = await res.json();
  console.log("selected", selected);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

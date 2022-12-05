class Api {
  url = "";

  constructor(url) {
    this.url = url;
  }

  create(data) {
    const JSONData = JSON.stringify(data);
    console.log(`Skickar ${JSONData} to this ${this.url}`);

    const request = new Request(this.url, {
      method: "POST",
      body: JSONData,
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(request);
    console.log("Hallå");
    return fetch(request)
      .then((result) => result.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  getAll() {}

  remove() {}
}

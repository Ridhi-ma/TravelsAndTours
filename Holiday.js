const request = new XMLHttpRequest();
const container = document.querySelector(".packagecontainer");
request.open("GET", "holiday.json");
request.send();

request.addEventListener("load", () => {
  const data = JSON.parse(request.responseText);
  console.log(data);
  for (const dat of data) {
    console.log(dat.place);

    const html = `
    <div class="main">
      <div class="hot">
      <img src="/${dat.id}.jpeg" alt="" sizes="" class="hotelimage">
      
      </div>
      <div class="hotels">
        <div class="hotelCity"><h3>${dat.place}</h3></div>
        <div class="hotelcontent">
          <h4>${dat.rating}</h4>
          <p>${dat.days} days</p>
          <p>${dat.price} per night</p>
          <p>${dat.flights} flight</p>
          <p>${dat.cases} cases</p>
        </div>
        </div>
      </div>`;
    container.insertAdjacentHTML("beforebegin", html);
  }
});

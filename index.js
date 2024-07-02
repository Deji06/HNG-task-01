
const date = document.getElementById('day');
const time = document.getElementById('time');


const getDay = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const getDay = new Date().getDay();
    const presentDay = daysOfWeek[getDay];
    day.textContent = presentDay
}

const updateTime = () => {
    const currentTimeUTC = new Date().getTime();
    const date = new Date(currentTimeUTC)

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    time.textContent = formattedTime;
}

updateTime();
getDay();
setInterval(updateTime,1000);

const imageSize = document.querySelector("p");
const image = document.querySelector("img");

image.addEventListener("load", (event) => {
  const { naturalWidth, naturalHeight, width, height } = image;
  imageSize.textContent = `Natural size: ${naturalWidth} x ${naturalHeight} pixelsDisplayed size: ${width} x ${height} pixels`;
});


const dict = {
  "Satyam": "15 Mar 2023",
  "Rupam": "17 Sept 2023",
  "Madhurima": "5 Sept 2023",
  "Digvijay Singh" : "3 Dec 2023"
};

function convertToKeyValuePairs(dictionary) {
  var items = [];
  for (var key in dictionary) {
    if (dictionary.hasOwnProperty(key)) {
      items.push([key, dictionary[key]]);
    }
  }
  return items;
}

function sortByDate(pairArray) {
  pairArray.sort(function(a, b) {
    const dateA = new Date(a[1]);
    const dateB = new Date(b[1]);
    return dateA - dateB;
  });
}

var pairs = convertToKeyValuePairs(dict);
sortByDate(pairs);

let endDate = new Date(pairs[0][1]); // Initialize with the earliest event date

function datas() {
  for (let n = 0; n < pairs.length; n++) {
    const eventDate = new Date(pairs[n][1]);
    if (new Date() < eventDate) {
      endDate = eventDate;
      document.getElementById("bdayboy").innerHTML = "Happy B'day " + pairs[n][0];
      document.getElementById("end-date").innerHTML = endDate.toLocaleString([], {month: 'short', day: 'numeric', year: 'numeric'});
      break;
    }
  }
}

datas();

const inputs = document.querySelectorAll("input");

function clock() {
  const now = new Date();
  const diff = (endDate - now) / 1000; // seconds
  if (diff < 0) return;

  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff % 60);
}

// Init call
clock();

function clockInterval() {
  clock();
  datas();
}

setInterval(clockInterval, 1000);

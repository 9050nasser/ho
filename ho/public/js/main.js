// Contact Section
let contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let send = document.getElementById("send-btn");
// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let formData = {
//     name: name.value,
//     email: email.value,
//     subject: subject.value,
//     message: message.value,
//   };
//   send.value = "Sending Message...";

//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "/");
//   xhr.setRequestHeader("content-type", "application/json");
//   xhr.onload = () => {
//     console.log(xhr.responseText);
//     if (xhr.responseText == "success") {
//       name.value = "";
//       email.value = "";
//       subject.value = "";
//       message.value = "";
//       send.value = "Message Sent Successfully!";
//     } else {
//       send.value = "Something Went Wrong!";
//     }
//   };
//   xhr.send(JSON.stringify(formData));
// });

// Start Scrolling To Top
const scrolling = document.querySelector(".arrow");
const apperArrow = document.querySelector(".appear");
function scrollToTop(ar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= document.body.offsetTop + 300) {
      ar.classList.add("appear");
    } else {
      ar.classList.remove("appear");
    }
  });

  ar.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
scrollToTop(scrolling);
// End Scrolling To Top

// Start Video
function playVideo() {
  var video = document.getElementById("myVideo"); // Get the video element by its ID
  video.play(); // Play the video
}
// End Video

// Start Fetch On Data footer


// End Fetch On Data footer

// Start Fetch On Latest Events
function fetchOnLatestEvents() {
  const rowTwo = document.getElementById("row-two");
  fetch(
    "https://us-central1-happinessorganization-62858.cloudfunctions.net/expressApi/latest"
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((info) => {
        // Col
        const col = document.createElement("div");
        col.className = `col-lg-4 mb-3`;
        rowTwo.appendChild(col);

        // Box
        const box = document.createElement("div");
        box.className = `box`;
        col.appendChild(box);

        // photo
        const photo = document.createElement("div");
        photo.className = `photo`;
        box.appendChild(photo);

        // img
        const img = document.createElement("img");
        img.className = `mw-100`;
        img.src = `${info.box_img}`;
        photo.appendChild(img);

        // Desc
        const desc = document.createElement("div");
        desc.className = `description py-4 px-3 d-flex flex-column gap-3`;
        box.appendChild(desc);

        // Calender
        const calender = document.createElement("div");
        calender.className = `calender-loc d-flex align-items-center gap-2`;
        desc.appendChild(calender);

        // Icon
        const icon = document.createElement("i");
        icon.className = `fa-solid fa-calendar-days`;
        icon.style.color = `var(--third-color)`;
        icon.style.paddingRight = `2px`;
        icon.style.paddingBottom = `3px`;
        calender.appendChild(icon);

        const spanDate = document.createElement("div");
        spanDate.appendChild(document.createTextNode(info.date));
        spanDate.className = `text-secondary`;
        calender.appendChild(spanDate);

        // // head
        const head = document.createElement("h3");
        head.appendChild(document.createTextNode(info.title));
        desc.appendChild(head);

        // // time
        const time = document.createElement("div");
        time.className = `time-loc d-flex align-items-center gap-2`;
        desc.appendChild(time);

        // // icon time
        const iconTime = document.createElement("i");
        iconTime.className = `fa-regular fa-clock`;
        iconTime.style.color = `var(--third-color)`;
        iconTime.style.paddingRight = `2px`;
        iconTime.style.paddingBottom = `2px`;
        time.appendChild(iconTime);

        // spanTime
        const spanTime = document.createElement("span");
        spanTime.appendChild(document.createTextNode(`${info.time}`));
        spanTime.className = `text-secondary`;
        time.appendChild(spanTime);

        // // content
        const content = document.createElement("p");
        content.appendChild(document.createTextNode(info.small_content));
        content.className = `text-secondary`;
        desc.appendChild(content);
      });
    });
}
fetchOnLatestEvents();
// End Fetch On Latest Events

// Start Fetch On Up Coming
function fetchOnUpComing() {
  const rowOne = document.getElementById("row-one");
  fetch(
    "https://us-central1-happinessorganization-62858.cloudfunctions.net/expressApi/upcoming"
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((info) => {
        // Col
        const col = document.createElement("div");
        col.className = `col-lg-4 mb-3 coming`;
        rowOne.appendChild(col);

        // Box
        const box = document.createElement("div");
        box.className = `box`;
        col.appendChild(box);

        // photo
        const photo = document.createElement("div");
        photo.className = `photo d-flex justify-content-center pt-2`;
        box.appendChild(photo);

        // img
        const img = document.createElement("img");
        img.className = `mw-100`;
        img.src = `${info.image1}`;
        img.style.width = `181.5px`;
        photo.appendChild(img);

        // Desc
        const desc = document.createElement("div");
        desc.className = `descriptions py-4 px-3 d-flex flex-column gap-3`;
        box.appendChild(desc);

        // Calender
        const calender = document.createElement("div");
        calender.className = `calender-loc d-flex align-items-center gap-2`;
        desc.appendChild(calender);

        // Icon
        const icon = document.createElement("i");
        icon.className = `fa-solid fa-calendar-days`;
        icon.style.color = `var(--third-color)`;
        icon.style.paddingRight = `2px`;
        icon.style.paddingBottom = `3px`;
        calender.appendChild(icon);

        const spanDate = document.createElement("div");
        spanDate.appendChild(document.createTextNode(info.date));
        spanDate.className = `text-secondary`;
        calender.appendChild(spanDate);

        // // head
        const head = document.createElement("h3");
        head.appendChild(document.createTextNode(info.title));
        desc.appendChild(head);

        // // time
        const time = document.createElement("div");
        time.className = `time-loc d-flex align-items-center gap-2`;
        desc.appendChild(time);

        // // icon time
        const iconTime = document.createElement("i");
        iconTime.className = `fa-regular fa-clock`;
        iconTime.style.color = `var(--third-color)`;
        iconTime.style.paddingRight = `2px`;
        iconTime.style.paddingBottom = `2px`;
        time.appendChild(iconTime);

        // spanTime
        const spanTime = document.createElement("span");
        spanTime.appendChild(document.createTextNode(`${info.time}`));
        spanTime.className = `text-secondary`;
        time.appendChild(spanTime);

        // // content
        const content = document.createElement("p");
        content.appendChild(document.createTextNode(info.smallcontent));
        content.className = `text-secondary`;
        desc.appendChild(content);
      });
    });
}

fetchOnUpComing();
// End Fetch On Up Coming
function fetchOnDataOne() {
  const row = document.getElementById("row");
  fetch(
    "https://us-central1-happinessorganization-62858.cloudfunctions.net/expressApi"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((info) => {
        // Col
        const col = document.createElement("div");
        col.className = `col-lg-4 col-md-6 mb-3`;
        row.appendChild(col);

        // Box
        const box = document.createElement("div");
        box.className = `box`;
        col.appendChild(box);

        // photo
        const photo = document.createElement("div");
        photo.className = `photo`;
        box.appendChild(photo);

        // img
        const img = document.createElement("img");
        img.className = `mw-100`;
        img.src = `${info.box_img}`;
        photo.appendChild(img);

        // Desc
        const desc = document.createElement("div");
        desc.className = `description py-4 px-3 d-flex flex-column gap-3`;
        box.appendChild(desc);

        // Calender
        const calender = document.createElement("div");
        calender.className = `calender-loc d-flex align-items-center gap-2`;
        desc.appendChild(calender);

        // Icon
        const icon = document.createElement("i");
        icon.className = `fa-solid fa-calendar-days`;
        icon.style.color = `var(--third-color)`;
        icon.style.paddingRight = `2px`;
        icon.style.paddingBottom = `3px`;
        calender.appendChild(icon);

        const spanDate = document.createElement("div");
        spanDate.appendChild(document.createTextNode(info.date));
        spanDate.className = `text-secondary`;
        calender.appendChild(spanDate);

        // // head
        const head = document.createElement("h3");
        head.appendChild(document.createTextNode(info.title));
        desc.appendChild(head);

        // // time
        const time = document.createElement("div");
        time.className = `time-loc d-flex align-items-center gap-2`;
        desc.appendChild(time);

        // // icon time
        const iconTime = document.createElement("i");
        iconTime.className = `fa-regular fa-clock`;
        iconTime.style.color = `var(--third-color)`;
        iconTime.style.paddingRight = `2px`;
        iconTime.style.paddingBottom = `2px`;
        time.appendChild(iconTime);

        // spanTime
        const spanTime = document.createElement("span");
        spanTime.appendChild(document.createTextNode(`${info.time}`));
        spanTime.className = `text-secondary`;
        time.appendChild(spanTime);

        // // content
        const content = document.createElement("p");
        content.appendChild(document.createTextNode(info.small_content));
        content.className = `text-secondary`;
        desc.appendChild(content);

        // // link
        const link = document.createElement("a");
        link.href = `./event-details.html?all_content_1=${info.all_content_1}&all_content_2=${info.all_content_2}&all_content_3=${info.all_content_3}&all_content_4=${info.all_content_4}&head=${info.title}&image1=${info.img1}&image2=${info.img2}&image3=${info.img3}&image4=${info.img4}&image5=${info.img5}&image6=${info.img6}&image7=${info.img7}&image8=${info.img8}&image9=${info.img9}&image10=${info.img10}`;
        console.log(info.images);
        link.className = `btn d-flex gap-2 align-items-center p-0`;
        link.style.color = `var(--third-color)`;
        link.appendChild(document.createTextNode("Join Event"));
        desc.appendChild(link);

        // // Icon Link
        const linkIcon = document.createElement("i");
        linkIcon.className = `fa-solid fa-chevron-right`;
        linkIcon.style.paddingBottom = `2px`;
        link.appendChild(linkIcon);
      });
    });
}

fetchOnDataOne();
// End Fetch On Data One

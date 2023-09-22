// เลื่อน Section 1 ไป 2 
const scrollButton = document.getElementById('scroll-button');
      const nextSection = document.getElementById('next-section');

      scrollButton.addEventListener('click', () => {
          nextSection.scrollIntoView({ behavior: 'smooth' });
      });


      const exploreButton = document.getElementById('exploreButton');

exploreButton.addEventListener('mouseenter', () => {
  exploreButton.style.backgroundColor = 'transparent';
  exploreButton.style.color = 'red';
  exploreButton.style.boxShadow = '0 0 0 4px red';
});

exploreButton.addEventListener('mouseleave', () => {
  exploreButton.style.backgroundColor = 'red';
  exploreButton.style.color = 'white';
  exploreButton.style.boxShadow = 'none';
});


// Card HAADTHIP TODAY.
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);




// เลือกทุกหัวข้อ
const headings = document.querySelectorAll('h2');
// เลือกตัวแสดง ID
const displayId = document.getElementById('displayId');
// วนลูปผ่านทุกหัวข้อ
headings.forEach((heading, index) => {
  // เพิ่มอีเวนต์คลิก
  heading.addEventListener('click', () => {
    // เปลี่ยนสีของทุกหัวข้อกลับไปเป็นเดิม
    headings.forEach((h) => {
      h.classList.remove('active');
    });

    // เพิ่มคลาส "active" ให้กับหัวข้อที่ถูกคลิก
    heading.classList.add('active');

    // แสดง ID ของหัวข้อที่ถูกคลิก
    displayId.textContent = `ID: ${index + 1}`;
  });
});

// รับอ้างอิงถึงองค์ประกอบของ Environment
const environmentHeading = document.getElementById("Environment");
const environmentParagraph = document.getElementById("Environment_p");
const environmentImage = document.getElementById("EnvironmentPic");

// รับอ้างอิงถึงองค์ประกอบของ Social
const socialHeading = document.getElementById("Social");
const socialParagraph = document.getElementById("Social_p");
const socialImage = document.getElementById("SocialPic");

// รับอ้างอิงถึงองค์ประกอบของ Economic
const economicHeading = document.getElementById("Economic");
const economicParagraph = document.getElementById("Economic_p");
const economicImage = document.getElementById("EconomicPic");

// รับอ้างอิงถึงองค์ประกอบของ Community Support
const communityHeading = document.getElementById("Community");
const communityParagraph = document.getElementById("Community_p");
const communityImage = document.getElementById("CommunityPic");

// เพิ่มอีเวนต์คลิกสำหรับ Environment
environmentHeading.addEventListener("click", () => {
  // แสดง Environment_p
  environmentParagraph.style.display = "block";
  // แสดง EnvironmentPic
  environmentImage.style.display = "block";

  // ซ่อน Social_p, Economic_p และ Community_p
  socialParagraph.style.display = "none";
  socialImage.style.display = "none";
  economicParagraph.style.display = "none";
  economicImage.style.display = "none";

  // ซ่อน SocialPic, EconomicPic และ CommunityPic
  communityParagraph.style.display = "none";
  communityImage.style.display = "none";
});

// ทำเช่นเดียวกับ Social, Economic, และ Community Support
socialHeading.addEventListener("click", () => {
  socialParagraph.style.display = "block";
  socialImage.style.display = "block";

  environmentParagraph.style.display = "none";
  economicParagraph.style.display = "none";
  communityParagraph.style.display = "none";

  environmentImage.style.display = "none";
  economicImage.style.display = "none";
  communityImage.style.display = "none";
});

economicHeading.addEventListener("click", () => {
  economicParagraph.style.display = "block";
  economicImage.style.display = "block";

  environmentParagraph.style.display = "none";
  socialParagraph.style.display = "none";
  communityParagraph.style.display = "none";

  environmentImage.style.display = "none";
  socialImage.style.display = "none";
  communityImage.style.display = "none";
});

communityHeading.addEventListener("click", () => {
  communityParagraph.style.display = "block";
  communityImage.style.display = "block";

  environmentParagraph.style.display = "none";
  socialParagraph.style.display = "none";
  economicParagraph.style.display = "none";

  environmentImage.style.display = "none";
  socialImage.style.display = "none";
  economicImage.style.display = "none";
});


// const hamburger = document.querySelector(".hamburger");
// const nav = document.querySelector("nav ul");

// hamburger.addEventListener("click", () => {
//     nav.classList.toggle("show");
// });




const section = document.getElementById("next-section");
const line1 = section.querySelector(".line1");
const line2 = section.querySelector(".line2");

// สร้างฟังก์ชันสำหรับตรวจสอบเมื่อ scroll ถึงตำแหน่งที่ต้องการ
function handleScroll() {
  const scrollPosition = window.scrollY;
  const sectionPosition = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const windowHeight = window.innerHeight;

  // คำนวณระยะห่างระหว่าง scroll position และ section position
  const distance = scrollPosition - sectionPosition;

  // คำนวณการเคลื่อนที่ของข้อความ
  const translation = (distance - windowHeight / 2 + sectionHeight / 2) / windowHeight * 50;

  // ใช้ CSS transform เพื่อเลื่อนข้อความ
  line1.style.transform = `translateX(${translation}%)`;
  line2.style.transform = `translateX(${-translation}%)`; // เลื่อน line2 ไปทางซ้าย
}

// เพิ่ม event listener สำหรับ scroll
window.addEventListener("scroll", handleScroll);


// หาปุ่มและเมนูโดยใช้ ID (Humber)
const button = document.getElementById("humber");
const navMenu = document.getElementById("navMenu");

// เมื่อคลิกที่ปุ่ม
button.addEventListener("click", () => {
  // ตรวจสอบสถานะการแสดงเมนู
  if (navMenu.style.display === "block") {
    // ถ้าแสดงอยู่ ให้ซ่อนเมนู
    navMenu.style.display = "none";
  } else {
    // ถ้าไม่แสดง ให้แสดงเมนู
    navMenu.style.display = "block";
  }
});
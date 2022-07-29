const progressEl = document.querySelector(".progress");
const testimonial = document.querySelector(".testimonial");
const containerEl = document.querySelector(".container");

let widthValue = 0;
let index = 0;

const testimonialsDetails = [
  {
    text: "As always avengers didn't disappoint even with a few loops or inconsistencies. Hope marvel does more movies about some characters from avengers.",
    name: "Jofra Archer",
    image: "images/movie-1.jpg",
  },
  {
    text: "Detective Batman at its peak! Great storyline. Just as dark a universe as we've come to expect from DC. The gloomy, gritty, dark tone of this film is exactly what I wanted. When you think the movie is over, there's more. Beautiful cinematography. Great score.",
    name: "Axar Patel",
    image: "images/movie-2.jpg",
  },
  {
    text: "As soon as this live action version of Aladdin was first announced, it seems certain people were against it. While I too have fond memories of seeing the original animated version at the theatre, I was at least willing to give this one a chance. I'm glad I did.",
    name: "Roger Federer",
    image: "images/movie-3.jpg",
  },
  {
    text: "This deliberate effort to make this movie in this manner clearly has a point. It is a constant barrage, one long cinematic sentence that must be swallowed whole. It forces the viewer to take it all in in one piece, giving, perhaps, a hint of the overwhelming sensory overload of this struggle to get through.",
    name: "Mithali Raj",
    image: "images/movie-4.jpg",
  },
  {
    text: `I watched this In two sittings and was glad of the break. The three ages of the main protagonist all play their part excellently, and each in their own way shows a sadness and sense of being trapped with a secret that is unacceptable to the people around them, as a child, teenager and adult. `,
    name: "Sachin Tendulkar",
    image: "images/movie-5.jpg",
  },
];

function updateTestimonial() {
  const { text, name, image } = testimonialsDetails[index];
  console.log(testimonialsDetails[index]);

  testimonial.querySelector(".text").innerHTML = `${text}`;
  testimonial.querySelector(".name").innerHTML = `${name}`;
  //   testimonial.querySelector(".image img").src = `${image}`;
  //   testimonial.style.backgroundImage = `url("${image}")`;
  containerEl.style.backgroundImage = `url("${image}")`;

  console.log(testimonial.style);

  index++;

  if (index > testimonialsDetails.length - 1) {
    index = 0;
  }
}

updateTestimonial();

setInterval(updateTestimonial, 10000);

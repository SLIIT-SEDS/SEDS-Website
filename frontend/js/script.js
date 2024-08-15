document.getElementById("toggle-button").addEventListener("click", function() {
    var paragraph = document.getElementById("paragraph");
    var button = document.getElementById("toggle-button");
    
    if (button.textContent === "Read More") {
        paragraph.textContent = "At SEDS, we are committed to fostering a community of students passionate about space exploration and development. Our mission is to support the university in all its space science-oriented endeavors, providing valuable resources and expertise to advance research and innovation. We aim to cultivate the next generation of space leaders by offering hands-on experience, leadership opportunities, and the development of essential soft skills such as teamwork, communication, and problem-solving.";
        button.textContent = "Show Less";
    } else {
        paragraph.textContent = "TO BE OF SERVICE TO OUR UNIVERSITY IN ALL ITS SPACE SCIENCE-ORIENTED NEEDS AND TRAIN OUR MEMBERS TO DEVELOP THE NECESSARY SOFT SKILLS IN ASTRONOMY";
        button.textContent = "Read More";
    }
});

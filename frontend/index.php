<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEDS | SLIIT</title>

    <!-- tab icon -->
    <link rel="icon" type="image/png" href="../resources/images/header/web_icon.png">

    <!-- link css -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/style.css">

    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@100..900&display=swap" rel="stylesheet">

    <!-- FontAwesome -->
    <script src="https://kit.fontawesome.com/79961d807c.js" crossorigin="anonymous"></script>


    <!-- Bootstrap JavaScript -->
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
    <?php include '../frontend/pages/header.php'; ?>

    <!-- section 1(seds-home-s1) -->
    <section class="seds-home-s1">
        <div class="container d-flex justify-content-center h-100">
            <div class="seds-home-s1-bg d-flex">
                <div class="seds-home-s1-ball"></div>
                <div class="seds-home-s1-astronet"></div>
            </div>
            <div class="seds-home-s1-header-box text-light">
                <div class="seds-home-s1-header alg-text-h1 passion-one-black">
                    <div class="seds-home-s1-header-p1">WELCOME <span class="seds-home-s1-header-p2">TO</span> SEDS SLIIT</div>
                    <div class="seds-home-s1-header-p2"></div>
                    <div class="seds-home-s1-header-p3"></div>
                </div>
                <div class="seds-home-s1-para1 passion-one-bold alg-text-h2">Students for the Exploration and Development of Space</div>
                <div class="seds-home-s1-para2 passion-one-regular">Sri Lanka Institute of Information Technology</div>
            </div>
        </div>
    </section>
    <!-- home page section 2 -->
    <section class="seds-home-s2">
        <div class="container seds-home-s2-container ">
            <div class="seds-home-s2-right">
                <div class="seds-home-s2-right-rocket"></div>
                <div class="seds-home-s2-right-clouds">
                    <div class="home-cloud1"></div>
                    <div class="home-cloud2"></div>
                    <div class="home-cloud3"></div>
                </div>
                <div class="seds-home-s2-ball-image"></div>
                <div class="seds-home-s2-ball-image2"></div>
            </div>
            <div class="seds-home-s2-left alg-text-light passion-one-black">
                <div class="seds-home-s2-left-h1 alg-text-h1 alg-text-main-gradient-verti">DISCOVERING</div>
                <div class="seds-home-s2-left-h2 alg-text-h1 alg-text-main-gradient-verti pb-3">OUR MISSION</div>
                <div id="paragraph" class="seds-home-s2-left-para alg-text-h3 pb-4">
                    TO BE OF SERVICE TO OUR UNIVERSITY IN ALL ITS SPACE SCIENCE-ORIENTED NEEDS AND TRAIN OUR MEMBERS TO DEVELOP THE NECESSARY SOFT SKILLS IN ASTRONOMY
                </div>
                <div class="seds-home-s2-left-button-box">
                    <button id="toggle-button" class="seds-home-s2-left-button alg-bolder alg-rounded-small border-0 alg-secondary-gradient-hori" type="button">Read More</button>
                </div>
            </div>
        </div>
    </section>
    <!-- section 3 -->
    <section class="seds-home-s3">
        <div class="container d-flex flex-column justify-center align-items-center pb-4">
            <div id="dIndex-container" class=" seds-home-s3-container"></div>
            <a href="pages/divisions.php">
                <div class="seds-home-s3-image-container alg-secondary-gradient-hori d-flex align-items-center justify-content-center alg-rounded-small">
                    <div class="seds-home-s3-image"></div>
                </div>
            </a>
            <div class="seds-home-s3-heading alg-text-light">DIVISIONS</div>
        </div>
    </section>

    <!-- home page section 5 -->
    <section class="seds-home-s5" id="join-section">
        <div class="container d-flex flex-column align-items-center gap-5 pt-4">
            <div class="passion-one-black d-flex flex-column align-items-center">
                <div class="alg-text-h1 alg-text-light ">GET IN <span class="alg-text-gradient">TOUCH</span> </div>
                <div class="alg-text-h2 alg-text-light text-center">Reach out, and let's create a universe of possibilities together!</div>
            </div>
            <div class="seds-home-s5-box2 d-flex justify-content-around align-items-center alg-shadow border-0 alg-rounded-mid">
                <form class="seds-home-s5-box2-s1 d-flex flex-column gap-2">
                    <div class="seds-home-s5-form-heading alg-text-light alg-bolder alg-text-h2 pb-2">Let’s connect constellations</div>
                    <div class="d-flex gap-3">
                        <div> <input class="seds-home-s5-inputs alg-rounded-small alg-text-light bg-transparent p-2" type="text" placeholder="Last Name"></div>
                        <div><input class="seds-home-s5-inputs alg-rounded-small alg-text-light bg-transparent p-2" type="text" placeholder="First Name"></div>
                    </div>
                    <div><input class=" seds-home-s5-inputs1 alg-rounded-small alg-text-light bg-transparent p-2" type="text" placeholder="Email"></div>
                    <div><input class=" seds-home-s5-inputs1 alg-rounded-small alg-text-light bg-transparent p-2" type="text" placeholder="Phone Number"></div>
                    <div><textarea name="" class="seds-home-s5-inputs1 alg-text-light bg-transparent p-2" rows="5" id="" placeholder="Message"></textarea></div>
                    <div><button type="submit" class="seds-home-s5-btn alg-bold alg-rounded-small alg-text-light alg-text-h3 alg-secondary-gradient-hori">Send it in to the moon</button></div>
                </form>
                <div class="seds-home-s5-image "></div>
            </div>
        </div>
    </section>
    <?php include '../frontend/pages/footer.php'; ?>
    <script>
        document.getElementById("toggle-button").addEventListener("click", function() {
            var paragraph = document.getElementById("paragraph");
            var button = document.getElementById("toggle-button");

            if (button.textContent === "Read More") {
                paragraph.textContent = "AT SEDS, WE ARE COMMITTED TO FOSTERING A COMMUNITY OF STUDENTS PASSIONATE ABOUT SPACE EXPLORATION AND DEVELOPMENT. OUR MISSION IS TO SUPPORT THE UNIVERSITY IN ALL ITS SPACE SCIENCE-ORIENTED ENDEAVORS, PROVIDING VALUABLE RESOURCES AND EXPERTISE TO ADVANCE RESEARCH AND INNOVATION. WE AIM TO CULTIVATE THE NEXT GENERATION OF SPACE LEADERS BY OFFERING HANDS-ON EXPERIENCE, LEADERSHIP OPPORTUNITIES, AND THE DEVELOPMENT OF ESSENTIAL SOFT SKILLS SUCH AS TEAMWORK, COMMUNICATION, AND PROBLEM-SOLVING.";
                button.textContent = "Show Less";
            } else {
                paragraph.textContent = "TO BE OF SERVICE TO OUR UNIVERSITY IN ALL ITS SPACE SCIENCE-ORIENTED NEEDS AND TRAIN OUR MEMBERS TO DEVELOP THE NECESSARY SOFT SKILLS IN ASTRONOMY";
                button.textContent = "Read More";
            }
        });
    </script>

    <script src="js/script.js"></script>
</body>

</html>
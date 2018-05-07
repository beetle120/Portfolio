$(document).ready(function () {
    const experienceText = {
        //Swinburne Tafe text
        tafe: `<div>
        <img src="images/Swinburne-logo_large.jpg">          
        </div>
        <h3>Diploma of Software Development – <br />Swinburne Tafe</h3>
        <ul>
            <li>Web programming</li>
            <li>Visual Basic, Java</li>
            <li>Backend programming (.NET)</li>
            <li>Database (SQL)</li>
        </ul>`,

        //Swinburne Uni text
        uni: `<div>
        <img src="images/Swinburne-logo_large.jpg">
        </div>
        <h3>Bachelor of Multimedia<br />(Software Development) – <br />Swinburne University</h3>
        <ul>
            <li>Web programming</li>
            <li>Java</li>
            <li>Design (Photoshop, Illustrator, Flash)</li>
            <li>Video (film and editing)</li>
            <li>Game design</li>
        </ul>`,

        //SumTotal text
        sumtotal: `<div>
        <img src="images/SumTotal-logo_large.png">
        </div> 
        <h3>Character Animator</h3>
        <p>4-week contract building animated characters in ActionScript.</p>`,

        //C-Learning text
        clearning: `<div>
        <img src="images/C-Learning-logo.png">
        </div>
        <h3>Digital Designer</h3>
       
        <p>Learning Seat is Australia’s leading producer of online compliance training. My role as a Digital Designer was to work with the Instructional Designers to design and produce custom courses that clients both love and remember.</p>
        <p>My roll included most of the above and:</p>
        <ul>
            <li>Extensive jQuery programming</li>
            <li>Automating repetitive tasks with macros</li>
            <li>Developing new standards documentation</li>
            <li>Coming up with ways to be more productive with limited resources.</li>
        </ul>`,

        //Learning Seat text
        learningSeat: `<div>
        <img src="images/LearningSeat-logo_large.png">
        </div>
       <h3>Multimedia Developer</h3>
        
        <p>C-Learning was a small business of less than 20 people that was making a big impact in the e learning world. With clients on the likes of Ford, Honda, and Defence Department C Learning was punching above its weight and winning. The company was acquired by Learning Seat in 2015.</p>
        <p>My roll included most of the above and:</p>
        <ul>
            <li>Using CSS and SASS to create e-learning modules based off designs that where created in Illustrator and Photoshop</li>
            <li>Creating JavaScript widgets</li>
            <li>Building complex responsive webpages</li>
            <li>Keeping up to date with the latest web technologies</li>
            <li>Been able to grab a designer’s mock-up and run with it</li>
            <li>Understand and apply W3C accessibility guidelines</li>
            <li>Understanding of browser compatibility issues and how to work around them</li>
            <li>Extensive testing - so I know what typically breaks on websites and how to fix it</li>
            <li>Collaborated with designers, developers and instructional designers to create the best possible outcomes</li>
            <li>Understanding of browser compatibility issues and how to work around them</li>
            <li>Understanding user ability levels and how to get the best experience for all users</li>
            <li>Creating clean, precise multi-browser compatible code</li>
            <li>Worked extensively with Photoshop and Illustrator to create designs and graphical elements and working with designers to export assets from a design to use on a website</li>
            <li>Managing and prioritising multiple projects with pressing deadlines</li>
            <li>Know website optimisation techniques including video and image compression and basics of the AMP project.</li></ul>
        </ul>`,

        //Personal Projects text
        personal: `<h3>Personal Projects</h3>
        <ul>
            <li>Validation of user input data and an understanding of SQL injection</li>
            <li>Understanding of functions and arrow notation and how to use them effectively to minimise code duplication</li>
        </ul>`
    };

    $(".expClick").hover(function () {

        // Setting all values
        const halfPopupBox = $("#popupBox").width() / 2;
        const popupMargin = 20;
        let myClasses = this.classList;
        let popupPosition = $(`.${myClasses[0]}`).position();
        let arrowPosition = $(`.${myClasses[0]}`).position();
        let arrowColor = $(`.${myClasses[0]}:hover`).css("background-color");
        let arrowWidth = 20;
        let halfPopupItemWidth = $(`.${myClasses[0]}`).width() / 2;
        let popupHeight = 0;

        //remove the instuction text
        $(".timeline .instuctionsBox .instuctions p").hide();

        //inset the text

        $("#popupBox > #content").fadeOut(
            200,
            () => {
                $("#popupBox > #content").html(experienceText[myClasses[0]]).promise().done(() => {
                    $("#popupBox > #content").fadeIn(200);

                    // adding a scroll bar if the bottom of the popup goes below the bottom of the screen
                    if (($(window).height() + $(window).scrollTop()) < ($("#popupBox > #content").offset().top + $("#popupBox > #content").height())) {
                        console.log(`Above: ${$(window).height()} + ${$(window).scrollTop()} > ${$("#popupBox > #content").offset().top} + ${$("#popupBox > #content").height()}`)
                        popupHeight = $(window).height() - $("#popupBox > #content").offset().top - 20;
                        $("#popupBox").css("overflow-y", "scroll");
                    } else {
                        console.log(`Below: ${$(window).height()} + ${$(window).scrollTop()} > ${$("#popupBox > #content").offset().top} + ${$("#popupBox > #content").height()}`)
                        popupHeight = $("#popupBox > #content").height() + 40;
                        $("#popupBox").css("overflow-y", "hidden");
                        
                    }
                    console.log(popupHeight);
                    $("#popupBox").animate({ height: `${popupHeight}px` }, { duration: 200, easing: "swing" });
                });          
            }
        );
        
        

        // Postioning the popup
        popupPosition.top += 40;
        popupPosition.left = (popupPosition.left + halfPopupItemWidth) - halfPopupBox;
        if (popupPosition.left < popupMargin) {
            popupPosition.left = popupMargin;
        }
        else if (($(window).width() - popupMargin) < (popupPosition.left + (halfPopupBox * 2))) {
            popupPosition.left = $(window).width() - popupMargin - (halfPopupBox * 2);
        }

        // Postioning the arrow
        if (halfPopupItemWidth > popupMargin) {
            arrowWidth = popupMargin;
        } else {
            arrowWidth = halfPopupItemWidth;
        }

        arrowPosition.top += $(`.${myClasses[0]}`).height();
        arrowPosition.left = (arrowPosition.left + halfPopupItemWidth) - arrowWidth;

        //applying all the values
        $(".downArrow").css({ top: `${arrowPosition.top}px`, left: `${arrowPosition.left}px`, "border-left-width": `${arrowWidth}px`, "border-right-width": `${arrowWidth}px`, "border-top-color": arrowColor });
        $(".downArrow").show();
        $("#popupBox").clearQueue();
        $("#popupBox").stop();
        if ($("#popupBox").is(":visible")) {
            $("#popupBox").animate({ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }, { duration: 300, easing: "easeInOutQuad" });
        } else {
            $("#popupBox").css({ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` });
            $("#popupBox").fadeIn(300);
        }

    }, function () {
        // changing the arrow colour
        let myClasses = this.classList;
        let arrowColor = $(`.${myClasses[0]}`).css("background-color");
        $(".downArrow").css({ "border-top-color": arrowColor });
    }
    );
});
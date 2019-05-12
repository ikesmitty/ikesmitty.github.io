$(document).ready(function () {
    $("#ExperienceLink").click(function () {
        $("#Home").hide();
        $("#Resume").hide();
        $("#Experience").show();
    });

    $("#HomeLink").click(function () {
        $("#Experience").hide();
        $("#Resume").hide();
        $("#Home").show();
    });

    $("#ResumeLink").click(function () {
        $("#Experience").hide();
        $("#Home").hide();
        $("#Resume").show();
    });
});


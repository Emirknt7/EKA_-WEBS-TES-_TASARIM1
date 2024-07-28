document.getElementById("girişbtn").addEventListener("click", function() {
    var hiddenDiv = document.getElementById("giriş");
    if (giriş.style.display === "none") {
        giriş.style.display = "flex";
        anasayfa.style.filter = "blur(5px)"
        coding.style.filter = "blur(5px)"
        hakkımızda.style.filter = "blur(5px)"
        iletişim.style.filter = "blur(5px)"
    } else  {
        giriş.style.display = "none";
        anasayfa.style.filter = "none";
        coding.style.filter = "none";
        hakkımızda.style.filter = "none";
        iletişim.style.filter = "none";

    }
});
document.getElementById('gönderbtn').addEventListener('click', function() {
    giriş.style.display = "none";
    anasayfa.style.filter = "none";
    coding.style.filter = "none";
    hakkımızda.style.filter = "none";
    iletişim.style.filter = "none";
});

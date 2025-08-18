// Basic form submission handling
const form = document.getElementById("regForm");
if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        document.getElementById("formMessage").innerText = "Registration Successful! ✅";
        form.reset();
    });
}

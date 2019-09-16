window.onload = function(){
    formValidation();
    
}
function formValidation(){
    document.querySelector("#butt").addEventListener("click" , function(){
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#mail").value;
        let message = document.querySelector("#message").value;
        var regExMail = /^[a-z0-9-_\.]+[@][a-z0-9-_\.]+\.[a-z]+$/;
        let regExName = /[A-Z]{1}[a-z]{3,15}(\s[A-Z]{1}[a-z]{20})*/;
        let n = message.trim().length;
        regExMail.test(mail.value);
        let errors = [];
        if(!regExMail.test(email)){
            errors.push("Bad e-mail address!");
        }
        if(!regExName.test(name)){
            errors.push("Bad name format!");
        }
        if(n < 20){
            errors.push("Message must be at least 20 characters long!");
        }
        if(errors.length == 0){
            $.ajax({
                url : "mail.php",
                method : "POST",
                dataType : "json",
                data : {
                    name : name,
                    message : message,
                    email : email
                },
                success : function(data){
                    
                    document.querySelector("#hide").innerHTML = `<div class="alert alert-success" role="alert">
                    Message sent successful!
                  </div>`;
                        
                    
                },
                error : function(data){
                    console.log(data);
                }

            });
        }else{
            let str = "";
            errors.forEach(e => {
                str += e;
                str += "\n";
                
            });
            alert(str);
        }        
    });
}
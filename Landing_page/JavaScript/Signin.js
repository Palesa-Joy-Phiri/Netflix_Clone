const app = Vue.createApp ({
    data() {
        return {
            sign: "Sign In",
            input: {
                doc: "",
                password: "",
            }
        }
    }

},

methods: form {
    register: function () {

        var numbers = /[0-9]/g;
        var upperCase = /[A-Z]/g;
        var lowerCase = /[a-z]/g;

        if (this.input.password.length > 8) {
            alert("Maximum of 8");

        } else if(this.input.doc == 0){
            alert(" Please fill in a valid email or phone number");

        } else if(this.input.password == 0){
            alert(" Please create a password");  
              
        } else if(this.input.doc == 0 && this.input.password ==0){
            alert(" Please fill in a valid email or phone number and create a new password.");
            
        } else if (!this.input.password.match(numbers)) {
            alert("One number needed for valid password");

        } else if (!this.input.password.match(upperCase)) {
            alert("Please add one capital letter");

        }  else if (!this.input.password.match(lowerCase)) {
                alert("Please add one lower case letter");
        
        } else{
            localStorage.setItem("UserName",this.input.doc);
            localStorage.setItem("password",this.input.password);
            alert("Welcome to your new accout!!!");
            location.href = " " ;
        }
    }
})
function showMessage(){
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
   
    document.getElementById('result').innerHTML = `
    Hello: ${fullname} <br>
    Your email: ${email} <br>
    Your phone: ${phone} <br>

    `;
}
function formValidate(){
    var regExp = /^(0[0-9][0-9]{8})$/;
    var phone = document.getElementById("phone").value;
    if (regExp.test(phone)) 
        alert('SĐT hợp lệ!'); 
      else 
          alert('SĐT không hợp lệ!');
  }

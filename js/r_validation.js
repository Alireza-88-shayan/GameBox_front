let my_form = document.getElementById("r_form")
let username = document.getElementById("r_username")
let email = document.getElementById("r_email")
let password = document.getElementById("r_password")
let c_password = document.getElementById("r_confirm_password")
let error_box = document.getElementById("r_error_box")
let error_text = document.getElementById("r_error_message")
let finish_box = document.getElementById("r_finish_box")
let finish_message = document.getElementById("r_finish_message")

my_form.addEventListener("submit", function name(e) {
    e.preventDefault()

    let username_value = username.value
    let email_value = email.value
    let password_value = password.value
    let c_password_value = c_password.value

    let username_regex = /^[a-zA-Z0-9_]{8,16}$/
    let email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
    
    if (!username_regex.test(username_value)){
        finish_box.style.display = 'none'
        error_text.textContent = 'نام کاربری باید به انگلیسی باشد و بین ۸ تا ۱۶ کاراکتر باشد. همچنین می‌تواند شامل اعداد و آندر لاین (_) باشد'
        error_box.style.display = 'flex'
    }

    else if (!email_regex.test(email_value)){
        finish_box.style.display = 'none'
        error_text.textContent = 'ایمیل نامعتبر است'
        error_box.style.display = 'flex'
    }

    else if (!password_regex.test(password_value)){
        finish_box.style.display = 'none'
        error_text.textContent = 'رمز عبور باید حداقل یک حرف بزرگ، یک حرف کوچک، یک رقم، یک کاراکتر ویژه و طول ۸ تا ۱۶ کاراکتر لازم است'
        error_box.style.display = 'flex'
    }

    else if (password_value !== c_password_value){
        finish_box.style.display = 'none'
        error_text.textContent = 'رمز عبور با تأیید رمز عبور مطابقت ندارد'
        error_box.style.display = 'flex'
    }

    else{
        error_box.style.display = 'none'
        finish_message.textContent = 'ثبت نام با موفقیت انجام شد'
        finish_box.style.display = 'flex'
    }
})
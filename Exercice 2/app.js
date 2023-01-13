// get form by ID
const formContact = document.getElementById('formContact')

//Remove original action of field which is to refresh page 
formContact.addEventListener('submit', (event) => {
    event.preventDefault();


    // Get all fields by ID one by one
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const sizeSelect = document.getElementById("size-select")
    const ingredientSelect = document.getElementById("ingredient-select")

    // Create list of values keys to get text fields
    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        sizeSelect: sizeSelect.value,
        ingredientSelect: ingredientSelect.value

    }
    // create list of errors with default value (False)
    const errors = {
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        message: false,
        sizeSelect: false,
        ingredientSelect: false
    }

    // Get all errors messages in HTML by ID
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const sizeSelectError = document.getElementById('select-size-error')
    const ingredientSelectError = document.getElementById('select-ingredient-error')


    // Unshow label
    firstNameError.style.display = 'none';
    lastNameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    sizeSelectError.style.display = 'none';
    ingredientSelectError.style.display = 'none';

    // check if the fields are filled
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message || !formData.sizeSelect || !formData.ingredientSelect) {
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const nameRegex = /^[a-zA-Z ]+$/
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/



        // We check each field one after another
        if (!formData.firstName || !nameRegex.test(formData.firstName)) {
            // if field are not filled errors = True
            errors.firstName = true;
            firstNameError.style.display = 'block';
        }
        if (!formData.lastName || !nameRegex.test(formData.lastName)) {
            errors.lastName = true;
            lastNameError.style.display = 'block';
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = true;
            emailError.style.display = 'block';
        }
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            errors.phone = true;
            phoneError.style.display = 'block';
        }
        if (!formData.sizeSelect || formData.sizeSelect == "") {
            errors.sizeSelect = true;
            sizeSelectError.style.display = 'block';
        }
        if (!formData.ingredientSelect || formData.ingredientSelect == "") {
            errors.ingredientSelect = true;
            ingredientSelectError.style.display = 'block';
        }
    }
    if (Object.values(errors).includes(true)) {
        // forEach errors list to print corresponding errors messages
        Object.entries(errors).forEach(function (error) {
            const key = error[0];
            const value = error[1];

            if (value) {
                if (key === 'firstName') {
                    firstNameError.style.display = 'block';
                } else if (key === 'lastName') {
                    lastNameError.style.display = 'block';
                } else if (key === 'email') {
                    emailError.style.display = 'block';
                } else if (key === 'phone') {
                    phoneError.style.display = 'block';
                }
            }
        })
    } else {
        // if not error console.log data form
        formContact.reset()

    }
    if (!Object.values(errors).includes(true)) {
    // search first element in formData with [i]
    // search second element in formData with [j] 
    // if two elements match execute alert
    for (let i in formData) {
        for (let j in formData) {
            if (formData[i] === "small" && formData[j] === "cheese") {
                alert("order validated, your pizza costs 10€.")
            }
            if (formData[i] === "small" && formData[j] === "chicken") {
                alert("order validated, your pizza costs 15€.")
            }
            if (formData[i] === "small" && formData[j] === "chorizo") {
                alert("order validated, your pizza costs 20€.")
            }
            if (formData[i] === "medium" && formData[j] === "cheese") {
                alert("order validated, your pizza costs 25€.")
            }
            if (formData[i] === "medium" && formData[j] === "chicken") {
                alert("order validated, your pizza costs 30€")
            }
            if (formData[i] === "medium" && formData[j] === "chorizo") {
                alert("order validated, your pizza costs 35€")
            }
            if (formData[i] === "large" && formData[j] === "cheese") {
                alert("order validated, your pizza costs 40€")
            }
            if (formData[i] === "large" && formData[j] === "chicken") {
                alert("order validated, your pizza costs 45€")
            }
            if (formData[i] === "large" && formData[j] === "chorizo") {
                alert("order validated, your pizza costs 50€")
            }
        }
    }
    }
    
})

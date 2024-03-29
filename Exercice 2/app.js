// get form by ID
const formContact = document.getElementById('formContact')


//Remove original action of field which is to refresh page 
formContact.addEventListener('submit', (event) => {
    event.preventDefault();
    // Get all fields by ID one by one
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const addressInput = document.getElementById("address");
    const postalCodeSelect = document.getElementById("postalCode")
    const citySelect = document.getElementById("city")
    const phoneInput = document.getElementById("phone");
    const messageSelect = document.getElementById("message");
    const sizeSelect = document.getElementById("size-select")
    const ingredientSelect = document.getElementById("ingredient-select")

    // Create list of values keys to get text fields
    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        address: addressInput.value,
        phone: phoneInput.value,
        message: messageSelect.value,
        postalCode: postalCodeSelect.value,
        city: citySelect.value,
        sizeSelect: sizeSelect.value,
        ingredientSelect: ingredientSelect.value,

    }
    // create list of errors with default value (False)
    const errors = {
        firstName: false,
        lastName: false,
        address: false,
        phone: false,
        message: false,
        postalCode: false,
        city: false,
        sizeSelect: false,
        ingredientSelect: false
    }

    // Get all errors messages in HTML by ID
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const addressError = document.getElementById('addressError');
    const postalCodeError = document.getElementById('postalCodeError')
    const cityError = document.getElementById('cityError')
    const phoneError = document.getElementById('phoneError');
    const sizeSelectError = document.getElementById('select-size-error')
    const ingredientSelectError = document.getElementById('select-ingredient-error')
    const messageError = document.getElementById('messageError')

    // Unshow label
    firstNameError.style.display = 'none';
    lastNameError.style.display = 'none';
    addressError.style.display = 'none';
    postalCodeError.style.display = 'none';
    phoneError.style.display = 'none';
    sizeSelectError.style.display = 'none';
    ingredientSelectError.style.display = 'none';
    messageError.style.display = 'none';
    cityError.style.display = 'none';


    const nameRegex = /^[A-zÀ-ÿ]+$/
    const postalCodeRegex = /^[0-9]{5}$/
    const cityRegex = /^[A-zÀ-ÿ]+$/
    const addressRegex = /^[a-zA-Z0-9\s,'-]*$/
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
    if (!formData.postalCode || !postalCodeRegex.test(formData.postalCode)) {
        errors.postalCode = true;
        postalCodeError.style.display = 'block';
    }
    if (!formData.address || !addressRegex.test(formData.address) ) {
        errors.address = true;
        addressError.style.display = 'block';
    }
    if (!formData.city || !cityRegex.test(formData.city)) {
        errors.city = true;
        cityError.style.display = 'block';
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
                } else if (key === 'phone') {
                    phoneError.style.display = 'block';
                } else if (key === 'city') {
                    cityError.style.display = 'block';
                } else if (key === 'postalcode') {
                    postalCodeError.style.display = 'block';
                } else if (key === 'address') {
                    addressError.style.display = 'block';
                }
            }
        })
    } else {
        // if not error console.log data form
        formContact.reset()
    }

    if (!Object.values(errors).includes(true)) {
        // if all fields are filled...
        console.log(formData)
        alert("Commande validée")
        

        
    }})
    const form = document.getElementById('formContact');

        let sizeSelectValid = false;
        let recipeSelectValid = false;
        
        
        // option value html
        let pizzaPrice = {
            small: 10,
            medium: 15,
            large: 20
        }
        let ingredientPrice = {
            cheese: 1,
            chicken: 2,
            chorizo: 3
        }
        
        const sizeSelect = document.getElementById('size-select');
        const recipeSelect = document.getElementById('ingredient-select');
        
        const totalLabel = document.getElementById('totalLabel');
        
        let totalPrice = 0;
        
        let sizePrice = 0;
        let recipePrice = 0;
        // add Event for know what option is selected and get value
        sizeSelect.addEventListener('change', () => {
            const sizeValue = sizeSelect.value;
            console.log(sizeValue)
            if (sizeValue && sizeValue.length > 0) {
                sizePrice = pizzaPrice[sizeValue];
                sizeSelectValid = true;
                console.log(sizeValue)
            } else {
                sizePrice = 0;
                sizeSelectValid = false;
                console.log(sizeValue)
            }
            totalLabel.textContent = `Total = ${sizePrice + recipePrice} €`;
        });
        
        recipeSelect.addEventListener('change', () => {
            const recipeValue = recipeSelect.value;
            
            if (recipeValue && recipeValue.length > 0) {
                recipePrice = ingredientPrice[recipeValue];
                recipeSelectValid = true;
                console.log(recipeValue)
            } else {
                recipePrice = 0;
                recipeSelectValid = false;
                console.log(recipeValue)
            }
            totalLabel.textContent = `Total = ${sizePrice + recipePrice} €`;
        
        });
        
                

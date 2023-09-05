const validate = (form) => {
    let errors = {}
    if(!form.name){
        errors.name = 'You must enter a name'
    }
  
    if(form.name && !/^[a-zA-Z]*$/.test(form.name)){
        errors.name = 'The name can not contain numbers or special caracters'
    }
  if(form.name.length < 3 || form.name.length > 20){
        errors.name = 'The name must be between 2 and 20 characters'
    } 

    if(!form.height_min || form.height_min <= 0){
        errors.height_min = 'The min height must be bigger'
    }
    if(!form.height_max || form.height_max <= 0){
        errors.height_max = 'The max height must be bigger'
    }
  
    if(Number(form.height_min) >= Number(form.height_max)){
        errors.especial1 = 'The height min can not be bigger or equal than the max height'
    }
  
    if(Number(form.weight_min) >= Number(form.weight_max)){
        errors.especial2 = 'The weight min can not be bigger or equal than the max weight'
    }
  
    if(!/^[0-9]*$/.test(form.height_min)){
        errors.weight_max = 'It must be only numbers. Example: 15'
}
    if(!/^[0-9]*$/.test(form.height_max)){
        errors.weight_max = 'It must be only numbers. Example: 25'
    }

    if (!form.weight_min || form.weight_min <= 0){
        errors.weight_min = 'The min weight must be bigger'
    }
    if(!/^[0-9]*$/.test(form.weight_min)){
        errors.weight_max = 'It must be only numbers. Example: 15'
}
   
    
    if (!form.weight_max || form.weight_max <= 0){
        errors.weight_max = 'The max weight must be bigger'
    }
    if(!/^[0-9]*$/.test(form.weight_max)){
            errors.weight_max = 'It must be only numbers. Example: 25'
    }
  
    if (!form.life_span || form.life_span <= 0){
        errors.life_span = 'The life span must be grather. Example: 10 - 15 years'
    }
   
    return errors
  
  }
  
  export default validate;
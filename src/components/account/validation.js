function Validation(value) {
  let error = {}
  if(!value.fullname){
    error.fullname='Name is required'
  }
  if(!value.email){
    error.email="Email is required"
  }else if(!/\S+@\S+\.\S+/.test(value.email)){
    error.email="Email is required"
  }
  if(!value.password){
    error.password="Password is required"
  }else if(value.password.length < 5){
    error.password="Password must be than five characters";
  }
  return error;
}

export default Validation
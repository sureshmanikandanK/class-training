import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 
  if(!sessionStorage.getItem("user")){
    window.alert("User is not logim")
    return true;
  }
  else{
    return false;
  }
};

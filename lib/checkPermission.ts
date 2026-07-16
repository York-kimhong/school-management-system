import { permissions } from "./permissions";



export function hasPermission(

role:string,

module:string

){



const userPermissions =

permissions[

role as keyof typeof permissions

];




if(!userPermissions){

return false;

}



return userPermissions.includes(module);



}
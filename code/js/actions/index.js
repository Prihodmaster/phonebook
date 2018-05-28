export const select = (phone) => {
    console.log(phone.firstName);
    return{
        type: "PHONE_SELECTED",
        payload: phone
    }
}

export const setUser=user=>({
    type:'SET_USER',
    payload:user,
})
export const clearUser=()=>({
   type:'CLEAR_USER', 
})
export const setId=id=>({
    type:'SET_ID',
    payload:id,
})
export const setSearch=search=>({
    type:'SET_SEARCH',
    payload:search,
})
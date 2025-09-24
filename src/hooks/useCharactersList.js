export default function useCharactersList(modal){

    const openModalHandler = (character)=>{
        modal.current.value=character
        modal.current.open()
    }
    const closeBtnClickHandler =()=>{
        modal.current.close()
    }

    return{openModalHandler,closeBtnClickHandler}
}
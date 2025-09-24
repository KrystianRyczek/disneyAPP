import { useImperativeHandle, useState } from 'react';

export default function useCustomModal(ref, dialog){
    const [character, setCharacter] = useState(null)

    useImperativeHandle(ref, () => {
        return {
        open() {
            dialog.current.showModal();
            setCharacter(ref.current.value)
        },
        close() {
            dialog.current.close();
        },
        };
    });

    return {character}
}
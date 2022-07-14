import { useState, useEffect } from 'react';

export default function useAction (actionIn) {

    const [action, setAction] = useState(null)

    useEffect(() => {setAction(actionIn)}, [actionIn])

    return(action)

}
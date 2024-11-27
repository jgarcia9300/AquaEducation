import { useMemo } from "react"

export default function useMovements(){
    const MOVEMENTS = {
        forward: "forward",
        backward: "backward",
        leftward: "leftward",
        rightward: "rightward",
    }

    const map = useMemo(()=>{
        return [
            {name: MOVEMENTS.forward, keys: ["KeyW", "ArrowUp"]},
            {name: MOVEMENTS.backward, keys: ["KeyS", "ArrowDown"]},
            {name: MOVEMENTS.leftward, keys: ["KeyA", "ArrowLeft"]},
            {name: MOVEMENTS.rightward, keys: ["KeyD", "ArrowRight"]},
        ]
    }, [])

    return map;
}
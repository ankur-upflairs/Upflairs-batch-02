import { memo } from "react"

function Random({count}) {
    let random=Math.random()*100
    return <>
    <div>{count}</div>
    <div>{random}</div>
    </>
}


export default memo(Random)
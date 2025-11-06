
// Այս հուկի նպատակը ref-ի օգնությամ ցույց տալ նոր էջերը,

import { useCallback, useRef } from "react"

// եթե այն ref-ը որին միացրելենք Reactelement-ը հայտնվի Բռաուզերի ի մեջ
const useInterSection = (onInterSect : () => void) => {
    const unsubscribe = useRef(() => {})

    return useCallback((el : HTMLElement | null) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((intersection) => {
                if(intersection.isIntersecting){
                    onInterSect()
                }
            })
        })

        if(el){
            observer.observe(el)
            unsubscribe.current = () => observer.disconnect()
        }else {
            unsubscribe.current
        }
    }, [])
}

export {useInterSection}




// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
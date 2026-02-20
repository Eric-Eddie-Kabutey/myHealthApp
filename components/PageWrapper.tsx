import React, { ReactNode } from 'react'

function PageWrapper({content, className}:{content:ReactNode, className?:string}) {
    return <div className={`main-content w-full h-fit flex flex-col gap-5 p-5 md:text-[15px] text-sm ${className}`}>
        {content}
    </div>
}

export default PageWrapper
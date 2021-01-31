import React from 'react'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import Meta from 'src/components/Meta'

export type Props = {
    children: React.ReactNode
    type: 'home' | 'post' | 'archive' | 'about'
}

export default function Layout({ children, type }: Props) {
    return (
        <div className="max-w-xl mx-auto px-4 pt-8 pb-16 text-gray-900">
            <Meta type={type} />
            <Header type={type} />
            {children}
            <Footer type={type} />
        </div>
    )
}

import React from 'react'
import Link from 'src/components/Link'
import cn from 'classnames'

export function P(props: JSX.IntrinsicElements['p']) {
    return <p className="my-3 leading-tight text-sm" {...props} />
}

export function Ul(props: JSX.IntrinsicElements['ul']) {
    return <ul className="my-6 ml-5 list-disc" {...props} />
}

export function Ol(props: JSX.IntrinsicElements['ol']) {
    return <ol className="my-6 ml-5 list-decimal" {...props} />
}

export function Li(props: JSX.IntrinsicElements['li']) {
    return <li className="my-2" {...props} />
}

export function A(props: JSX.IntrinsicElements['a']) {
    return <Link className="underline hv:hover:bg-green-300" {...props}></Link>
}

export function H4(props: JSX.IntrinsicElements['h4']) {
    return <h4 className="text-lg font-bold font-sans my-6" {...props}></h4>
}

export function H3({
    noTopMargin,
    smallBottomMargin,
    ...props
}: {
    noTopMargin?: boolean
    smallBottomMargin?: boolean
} & JSX.IntrinsicElements['h3']) {
    return (
        <h3
            className={cn(
                'text-xl font-sans leading-snug tracking-tight',
                {
                    'mt-4': !noTopMargin,
                    'mb-6': !smallBottomMargin,
                    'mb-2': smallBottomMargin,
                }
            )}
            {...props}
        ></h3>
    )
}

export function H2(props: JSX.IntrinsicElements['h2']) {
    return (
        <h2
            className="text-2xl font-bold font-sans leading-relaxed mt-16 mb-6 tracking-tight"
            {...props}
        ></h2>
    )
}

export function Hr(props: JSX.IntrinsicElements['div']) {
    return (
        <div
            className="my-16 flex justify-center text-2xl"
            {...props}
            role="separator"
        >
        </div>
    )
}

export function Blockquote(props: JSX.IntrinsicElements['blockquote']) {
    return (
        <blockquote className="my-6 pl-4 border-l-2 border-gray-900" {...props} />
    )
}

export function Figure(props: JSX.IntrinsicElements['figure']) {
    return <figure className="my-6" {...props} />
}

export function Img({
    width,
    shadowHover,
    caption,
    coverImage,
    ...props
}: {
    width?: 'sm' | 'md'
    caption?: React.ReactNode
    coverImage?: boolean
    shadowHover?: boolean
} & JSX.IntrinsicElements['img']) {
    const imgTag = (
        <img
            className={cn('my-6 block mx-auto shadow-soft', {
                'max-w-sm': width === 'sm',
                'max-w-md': width === 'md',
                'max-w-full': width !== 'sm' && width !== 'md',
                'w-full': width === 'sm' || width === 'md',
                'w-auto': width !== 'sm' && width !== 'md',
                'hv:hover:shadow-large': shadowHover,
                'my-6': !caption && !coverImage,
                'mb-6': caption && !coverImage,
                'mt-6 mb-16': coverImage,
            })}
            {...props}
        />
    )

    return caption ? (
        <figure className="my-6">
            {imgTag}
            <figcaption className="text-sm text-center">{caption}</figcaption>
        </figure>
    ) : (
        <P>{imgTag}</P>
    )
}

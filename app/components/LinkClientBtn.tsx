
import Link from 'next/link'
import React from 'react'

const LinkClientBtn = ({href, content, className}) => {
  return (
    <Link href={href} className={className}>
        <button>
            {content}
        </button>
    </Link>
  )
}

export default LinkClientBtn
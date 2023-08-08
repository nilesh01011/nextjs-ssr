import Head from 'next/head'
import React from 'react'

function CommonHeadTag({ title }) {
    return (
        <Head>
            <title>{title}</title>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta charset="UTF-8" />
            <meta name="description" content="dummy api call" />
            <meta name="author" content="Nilesh_Rathod" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
    )
}

export default CommonHeadTag
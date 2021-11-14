import * as React from 'react'
import Nav from './nav'

const cover = (coverImg, coverHeader) => {
    let coverOut;
    if (coverImg !== undefined || coverHeader !== undefined) {
       coverOut = <div class="w-full bg-cover bg-center" style={{height: '32rem', backgroundImage: 'url('+coverImg+')',}}>
            <div class={"flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50"}>
                <div class="text-center">
                    <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">{coverHeader}</h1>
                </div>
            </div>
        </div>;
    }
    return(
        coverOut
    )
}

const Layout = ({ pageTitle, coverImg, coverHeader, children }) => {
    const coverTmp = cover(coverImg, coverHeader)
  return (
    <div>
      <title>{pageTitle}</title>
      <Nav />
      <main>
        {coverTmp}
        <div className="max-w-7xl mx-auto px-8">
            {children}
        </div>
      </main>
    </div>
  )
}
export default Layout
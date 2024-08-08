import React from 'react'

const Dropdown = () => {
  return (
    <div>
        <nav className='bg-[#141414] text-white' >
            <div className="wrapper">
                <ul className="nav-links inline-flex">
                    <li> <a href="#">SUGAR PLAY</a> </li>
                    <li className='lips' > <a href="#">LIPS</a>
                    <div className="mega-box">
                      <div className="content gap-[10px] bg-white inline-flex">
                        <div className="row">
                          <header className='text-black font-bold' >LIPSTICKS</header>
                          <ul className="mega-links">
                            {/* <li> <a href="#">TRANSFER PROOF LIPSTICKS</a> </li> */}
                            <li> <a href="#">MATTE LIPSTICKS</a> </li>
                            <li> <a href="#">LIQUID LIPSTICKS</a> </li>
                            <li> <a href="#">CRAYON LIPSTICKS</a> </li>
                            <li> <a href="#">POWEDER LIPSTICKS</a> </li>
                            <li> <a href="#">STAIN LIPSTICKS</a> </li>
                            <li> <a href="#">BULLET LIPSTICKS</a> </li>
                            <li> <a href="#">LIP GLOSS & LINERS</a> </li>
                          </ul>
                        </div>
                        <div className="row">
                          <header className='text-black font-bold' >LIP CARE</header>
                          <ul className="mega-links">
                            <li> <a href="#">TRANSFER PROOF LIPSTICKS</a> </li>
                            <li> <a href="#">MATTE LIPSTICKS</a> </li>
                            <li> <a href="#">LIQUID LIPSTICKS</a> </li>
                          </ul>
                        </div>
                        <div className="row">
                          <header className='text-black font-bold' >LIPSTICK SETS & COMBO</header>
                          <ul className="mega-links">
                            <li> <a href="#">TRANSFER PROOF LIPSTICKS</a> </li>
                            <li> <a href="#">MATTE LIPSTICKS</a> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    </li>
                    <li className='lips'> <a href="#">EYES</a> 
                    <div className="mega-box">
                      <div className="content gap-[10px] bg-white inline-flex">
                        <div className="row">
                          <header className='text-black font-bold' >LIPSTICKS</header>
                          <ul className="mega-links">
                            {/* <li> <a href="#">TRANSFER PROOF LIPSTICKS</a> </li> */}
                            <li> <a href="#">MATTE LIPSTICKS</a> </li>
                            <li> <a href="#">LIQUID LIPSTICKS</a> </li>
                            <li> <a href="#">CRAYON LIPSTICKS</a> </li>
                            <li> <a href="#">POWEDER LIPSTICKS</a> </li>
                            <li> <a href="#">STAIN LIPSTICKS</a> </li>
                            <li> <a href="#">BULLET LIPSTICKS</a> </li>
                            <li> <a href="#">LIP GLOSS & LINERS</a> </li>
                          </ul>
                        </div>
                        <div className="row">
                          <header className='text-black font-bold' >LIP CARE</header>
                          <ul className="mega-links">
                            <li> <a href="#">TRANSFER PROOF LIPSTICKS</a> </li>
                            <li> <a href="#">MATTE LIPSTICKS</a> </li>
                            <li> <a href="#">LIQUID LIPSTICKS</a> </li>
                          </ul>
                        </div>
                        <div className="row">
                          <header className='text-black font-bold' >LIPSTICK SETS & COMBO</header>
                          <ul className="mega-links">
                            <li> <a href="#">TRANSFER PROOF LIPSTICKS</a> </li>
                            <li> <a href="#">MATTE LIPSTICKS</a> </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                     </li>
                    <li> <a href="#">FACE</a> </li>
                    <li> <a href="#">NAILS</a> </li>
                    <li> <a href="#">SKINCARE</a> </li>
                    <li> <a href="#">ACCESSORIES</a> </li>
                    <li> <a href="#">GIFTING</a> </li>
                    <li> <a href="#">BESTSELLERS</a> </li>
                    <li> <a href="#">NEW LAUNCHES</a> </li>
                    <li> <a href="#">OFFER</a> </li>
                    <li> <a href="#">BLOG</a> </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Dropdown
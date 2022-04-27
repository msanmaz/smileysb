import Link from 'next/link'

function Footer() {
  return (
    <footer>
      <div className="mx-auto px-4 sm:px-6 mt-10">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 animate fill-current text-black" version="1.2" viewBox="0 0 375 375">
                            <defs />
                            <defs>
                                <symbol id="a" overflow="visible">
                                    <path d="M6.188.313A5.979 5.979 0 013.405-.36a3.578 3.578 0 01-.984-.688c-.2.324-.445.61-.735.86-.261.18-.402.273-.421.296H.734v-4h.844c.207.688.5 1.309.875 1.86C3.305-.812 4.414-.203 5.781-.203c.79 0 1.426-.238 1.907-.719.476-.476.718-1.113.718-1.906 0-.469-.14-.883-.422-1.25a4.162 4.162 0 00-1.015-.953 30.287 30.287 0 00-1.703-1.063c-.918-.508-1.668-.972-2.25-1.39a5.925 5.925 0 01-1.47-1.594c-.405-.633-.609-1.39-.609-2.266 0-.687.192-1.304.579-1.86.382-.55.96-.987 1.734-1.312.77-.332 1.719-.5 2.844-.5.812 0 1.625.23 2.437.688.301.18.61.402.922.672.238-.364.485-.649.735-.86l.421-.296h.516v4h-.828a6.285 6.285 0 00-.828-1.829 4.46 4.46 0 00-1.25-1.312 2.898 2.898 0 00-1.703-.531c-.555 0-1.028.218-1.422.656-.387.43-.578.976-.578 1.64 0 .524.148.993.453 1.407.3.418.672.781 1.11 1.094.437.304 1.034.667 1.796 1.093.883.512 1.598.965 2.14 1.36.551.386 1.016.87 1.391 1.453.375.586.563 1.25.563 2a3.54 3.54 0 01-.656 2.078c-.43.617-1.079 1.105-1.954 1.469-.867.363-1.921.546-3.171.546zm0 0" />
                                </symbol>
                                <symbol id="b" overflow="visible">
                                    <path d="M2.938-12.078v11.14l1.687.625V0h-4v-.313l1.688-.625v-13.124l-1.266-.329v-.312h2.625c.726 0 1.305.152 1.734.453.426.305.797.746 1.11 1.328l4.578 8.766 3.5-8.766c.238-.613.562-1.062.969-1.344.406-.289 1.03-.437 1.874-.437h2.204v.312l-1.266.329V-.626l1.266.313V0h-5.985v-.313l1.25-.312v-11.453L9.97.203h-.625zm0 0" />
                                </symbol>
                                <symbol id="c" overflow="visible">
                                    <path d="M1.047 0v-.313l1.266-.312v-13.438l-1.266-.328v-.312H7.03v.312l-1.25.329V-.626l1.25.313V0zm0 0" />
                                </symbol>
                                <symbol id="d" overflow="visible">
                                    <path d="M1.047-.313l1.266-.312v-13.438l-1.266-.328v-.312H7.03v.312l-1.25.329v13.53h4.516c0-.874.223-1.69.672-2.452a2.73 2.73 0 01.687-.797h.625V0H1.047zm0 0" />
                                </symbol>
                                <symbol id="e" overflow="visible">
                                    <path d="M1.047-.313l1.266-.312v-13.438l-1.266-.328v-.312H12.28v3.781h-.625a2.632 2.632 0 01-.687-.797 4.732 4.732 0 01-.672-2.453H5.78v6.61h2.407a4.81 4.81 0 01.546-1.485c.114-.207.25-.41.407-.61h.625v4.72H9.14a4.033 4.033 0 01-.407-.61 4.774 4.774 0 01-.546-1.484H5.78v6.5h4.922c0-.875.223-1.692.672-2.453.195-.32.43-.586.703-.797h.625V0H1.047zm0 0" />
                                </symbol>
                                <symbol id="f" overflow="visible">
                                    <path d="M4.094-.313l1.265-.312v-4.828l-4.312-8.61L0-14.39v-.312h2.625c.727 0 1.313.156 1.75.469.445.304.805.742 1.078 1.312l3.11 6.203 3.203-7.031-1.579-.64v-.313h3.985v.312l-1.672.641-3.688 8.078v5.047l1.266.313V0H4.094zm0 0" />
                                </symbol>
                                <symbol id="h" overflow="visible">
                                    <path d="M7.906-7.25c0-.79-.375-1.379-1.125-1.766-.492-.238-1.078-.359-1.765-.359H.625v.406h1.25v8.563H.625V0h4.438C6.405 0 7.39-.426 8.015-1.281A2.47 2.47 0 008.5-2.75c0-.832-.371-1.477-1.11-1.938a3.883 3.883 0 00-1.187-.421c.75-.282 1.266-.754 1.547-1.422.102-.25.156-.489.156-.719zM4.641-8.969c1.07 0 1.68.477 1.828 1.422.02.137.031.277.031.422 0 .68-.266 1.188-.797 1.531-.312.2-.68.297-1.094.297H3.22v-3.672zm.265 4.094c.946 0 1.582.402 1.907 1.203.125.293.187.61.187.953 0 .805-.262 1.43-.781 1.875a1.843 1.843 0 01-1.235.438H3.22v-4.469zm0 0" />
                                </symbol>
                                <symbol id="i" overflow="visible">
                                    <path d="M9.578 0c0-.227-.086-.36-.25-.39-.055-.008-.105-.016-.156-.016H8.64L5.062-9.375h-.578L.984-.406H0V0h2.781c0-.227-.086-.36-.25-.39-.054-.008-.105-.016-.156-.016h-.766l1.172-3.031h3.266l1.172 3.03H6.203V0zM5.875-3.89H2.953l1.453-3.782zm0 0" />
                                </symbol>
                                <symbol id="j" overflow="visible">
                                    <path d="M4.453 0v-.406H3.22v-3.89h1.484L7.203 0h2.36c0-.227-.063-.36-.188-.39a1.296 1.296 0 00-.188-.016h-.593L6.078-4.438c.988-.238 1.664-.753 2.031-1.546.133-.313.204-.63.204-.954 0-.78-.34-1.406-1.016-1.875-.555-.374-1.234-.562-2.047-.562H.625v.406h1.25v8.563H.625V0zm.328-8.969c.895 0 1.516.367 1.86 1.094.132.305.203.621.203.953 0 .75-.262 1.336-.782 1.75a1.93 1.93 0 01-1.234.422h-1.61v-4.219zm0 0" />
                                </symbol>
                                <symbol id="k" overflow="visible">
                                    <path d="M7.906-6.563l-.078-2.812H.625v.406h1.25v8.563H.625V0h7.203l.078-2.813h-.312l-.219.735c-.262.887-.648 1.418-1.156 1.594a1.507 1.507 0 01-.5.078h-2.5V-4.61h3.219v-.454h-3.22v-3.906h2.5c.75 0 1.286.508 1.61 1.516.02.062.035.117.047.156l.219.734zm0 0" />
                                </symbol>
                                <symbol id="l" overflow="visible">
                                    <path d="M7.594-2.453c0-.926-.5-1.672-1.5-2.235-.2-.101-.809-.378-1.828-.828-.93-.394-1.512-.8-1.75-1.218a1.5 1.5 0 01-.188-.735c0-.695.336-1.18 1.016-1.453a2.64 2.64 0 01.969-.172c.875 0 1.539.297 2 .89.3.407.445.903.437 1.485h.469v-2.734c-.25 0-.399.078-.438.234a1.028 1.028 0 00-.031.297c-.742-.406-1.574-.61-2.5-.61-1.125 0-2 .313-2.625.938-.418.438-.625.95-.625 1.531 0 .875.488 1.59 1.469 2.141.176.094.77.36 1.781.797.938.418 1.531.84 1.781 1.266.133.242.203.5.203.78 0 .731-.355 1.259-1.062 1.579a2.704 2.704 0 01-1.11.219c-1.593-.02-2.48-.992-2.656-2.922H.938V.03c.25 0 .394-.07.437-.218.02-.083.031-.235.031-.454.801.532 1.711.797 2.735.797 1.195 0 2.125-.32 2.78-.969a2.272 2.272 0 00.673-1.64zm0 0" />
                                </symbol>
                                <symbol id="m" overflow="visible">
                                    <path d="M.156-8.969h1.25v5.453c.02 2.438 1.235 3.66 3.64 3.672 1.833 0 2.942-.75 3.329-2.25.113-.457.172-.976.172-1.562V-8.97h1.25v-.406H6.75v.406H8v5.406c0 2.024-.75 3.11-2.25 3.266-.125.012-.25.016-.375.016-1.273 0-2.074-.535-2.406-1.61-.149-.468-.219-1.039-.219-1.718v-5.36h1.234v-.406H.156zm0 0" />
                                </symbol>
                                <symbol id="n" overflow="visible">
                                    <path d="M4.922-8.969c.926 0 1.523.418 1.797 1.25.082.274.125.563.125.875 0 1.356-.606 2.102-1.813 2.235-.125.011-.25.015-.375.015H3.22v-4.375zM4.782 0c0-.227-.087-.36-.25-.39-.055-.008-.106-.016-.157-.016H3.219v-3.735h1.375c1.707 0 2.836-.484 3.39-1.453.22-.363.329-.785.329-1.265 0-1.032-.45-1.754-1.344-2.172-.48-.227-1.055-.344-1.719-.344H.625v.406h1.25v8.563H.625V0zm0 0" />
                                </symbol>
                                <symbol id="o" overflow="visible">
                                    <path d="M7.469 0l.078-3.125h-.313L6.97-2.078c-.25.96-.668 1.508-1.25 1.64a1.945 1.945 0 01-.36.032H3.22V-8.97H4.53v-.406H.625v.406h1.25v8.563H.625V0zm0 0" />
                                </symbol>
                                <symbol id="p" overflow="visible">
                                    <path d="M4.453 0c0-.227-.086-.36-.25-.39-.055-.008-.105-.016-.156-.016h-.828V-8.97h1.234v-.406H.625v.406h1.25v8.563H.625V0zm0 0" />
                                </symbol>
                                <clipPath id="g">
                                    <path d="M113 122.332h149v37.5H113zm0 0" />
                                </clipPath>
                            </defs>
                            <path fill="#fff" d="M84.379 100.438v174.468H291.19V100.437zm200.223 167.886H90.828V106.883h193.774zm0 0" />
                            <use x="132.95" y="196.001" fill="#fff" href="#a" />
                            <use x="150.947" y="196.001" fill="#fff" href="#b" />
                            <use x="177.134" y="196.001" fill="#fff" href="#c" />
                            <use x="190.721" y="196.001" fill="#fff" href="#d" />
                            <use x="209.033" y="196.001" fill="#fff" href="#e" />
                            <use x="228.08" y="196.001" fill="#fff" href="#f" />
                            <g clipPath="url(#g)">
                                <path fill="#fff" d="M257.563 137.559c-3.29 14.601-26.11 8.765-32.434 3.492-9.14-7.64-7.324-16.535-21.54-18.5-8.515-1.184-13.741 3.308-16.089 9.047-2.348-5.707-7.605-10.2-16.09-9.047-14.215 1.965-12.367 10.86-21.539 18.5-6.324 5.304-29.176 11.11-32.434-3.492-1.124-5.024-5.007-3.621-4.066-.875 7.887 23.46 42.293 24.367 54.125 22.59 8.953-1.376 16.844-7.583 20.004-14.258 3.16 6.644 11.05 12.882 20.004 14.257 11.863 1.809 46.238.903 54.125-22.59.91-2.745-2.942-4.148-4.067.876zm0 0" />
                            </g>
                            <use x="142.844" y="227.364" fill="#fff" href="#h" />
                            <use x="158.749" y="227.364" fill="#fff" href="#i" />
                            <use x="175.029" y="227.364" fill="#fff" href="#j" />
                            <use x="191.293" y="227.364" fill="#fff" href="#h" />
                            <use x="207.198" y="227.364" fill="#fff" href="#k" />
                            <use x="222.587" y="227.364" fill="#fff" href="#j" />
                            <use x="130.621" y="246.864" fill="#fff" href="#l" />
                            <use x="145.698" y="246.864" fill="#fff" href="#m" />
                            <use x="162.275" y="246.864" fill="#fff" href="#n" />
                            <use x="177.758" y="246.864" fill="#fff" href="#n" />
                            <use x="193.241" y="246.864" fill="#fff" href="#o" />
                            <use x="207.646" y="246.864" fill="#fff" href="#p" />
                            <use x="219.427" y="246.864" fill="#fff" href="#k" />
                            <use x="234.817" y="246.864" fill="#fff" href="#j" />
                        </svg>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <a href="mailto:admin@smileysbarbersupplies.ie" className="text-gray-600 dark:text-white hover:text-gray-900 hover:underline transition duration-150 ease-in-out">admin@smileysbarbersupplies.ie</a> 
            </div>
          </div>



          {/* 3rd block */}
          <div className="sm:col-span-6  md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2 dark:text-white">Products:</h6>
            <ul className="text-sm">

              <li className="mb-2">
                <Link href="/brands/Arko"><p className="cursor-pointer text-gray-600 dark:text-white hover:text-gray-900 transition duration-150 ease-in-out">Arko</p></Link>
              </li>
              <li className="mb-2">
                <Link href="/brands/Barbicide"><p className="cursor-pointer text-gray-600 dark:text-white hover:text-gray-900 transition duration-150 ease-in-out">Barbicide</p></Link>
              </li>
              <li className="mb-2">
                <Link href="/brands/Bandido"><p className="cursor-pointer text-gray-600 dark:text-white hover:text-gray-900 transition duration-150 ease-in-out">Bandido</p></Link>
              </li>


            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2 dark:text-white">Menu</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/" ><p className="cursor-pointer text-gray-600 dark:text-white hover:text-gray-900 transition duration-150 ease-in-out">Home Page</p></Link>
              </li>
              <li className="mb-2">
                <Link href="/products" ><p className="cursor-pointer text-gray-600 dark:text-white hover:text-gray-900 transition duration-150 ease-in-out">Products</p></Link>
              </li>

              <li className="mb-2">
                <Link href="/contact"><p className="cursor-pointer text-gray-600 dark:text-white hover:text-gray-900 transition duration-150 ease-in-out">Contact Us</p></Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2 dark:text-white">Subscribe to our Newsletter</h6>
            <p className="text-sm text-gray-600 mb-4 dark:text-white">For Following our latest products and discounts!</p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className="form-input w-full border rounded-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>          

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="cursor-pointer">
              <Link href="/" className="flex  justify-center items-center text-gray-600 dark:text-white hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current dark:text-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4 cursor-pointer">
              <Link href="/" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-8 h-8 fill-current dark:text-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4 cursor-pointer">
              <Link href="/" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current dark:text-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4 dark:text-white">&copy; 2020 Osanmaz Bütün Hakları Saklıdır.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
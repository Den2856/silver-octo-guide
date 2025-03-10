import React from 'react'
import {
  RxDiscordLogo,
  RxGithubLogo,
} from "react-icons/rx";

import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start z-50'>
                    <div className='font-bold text-[16px]'>Community</div>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <FaTelegram />
                        <a href="https://t.me//De2854"><span className='text-[15px] ml-[6px]'>Telegram</span></a>
                    </p>

                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxGithubLogo />
                        <a href='https://github.com/Den2856'><span className='text-[15px] ml-[6px]'>GitHub</span></a>
                    </p>

                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxDiscordLogo />
                        <a href="#"><span className='text-[15px] ml-[6px]'>Discord</span></a>
                    </p>

                </div>
            </div>

            <div className='mb-[20px] text-[15px] text-center'>
                &copy; Web Dev 2025 Inc. All rights reserved
            </div>

        </div>
      
    </div>
  )
}

export default Footer

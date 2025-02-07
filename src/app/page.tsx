"use client"

import React from 'react';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useRef, useState, RefObject } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import editAnimation from '@/app/Assets/edit.json';
import folderAnimation from '@/app/Assets/folder.json';
import settingsAnimation from '@/app/Assets/settings.json';
import linkAnimation from '@/app/Assets/link.json';

const ExtensionIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="path-1-inside-1_2224_5077" fill="white">
      <path d="M8.85686 4.28571C8.85686 3.67951 9.09768 3.09812 9.52633 2.66947C9.95499 2.24082 10.5364 2 11.1426 2C11.7488 2 12.3302 2.24082 12.7588 2.66947C13.1875 3.09812 13.4283 3.67951 13.4283 4.28571H15.1426C15.5972 4.28571 16.0333 4.46633 16.3548 4.78782C16.6763 5.10931 16.8569 5.54534 16.8569 6V8.85714H15.714C15.4109 8.85714 15.1202 8.97755 14.9059 9.19188C14.6916 9.40621 14.5712 9.6969 14.5712 10C14.5712 10.3031 14.6916 10.5938 14.9059 10.8081C15.1202 11.0224 15.4109 11.1429 15.714 11.1429H16.8569V14C16.8569 14.4547 16.6763 14.8907 16.3548 15.2122C16.0333 15.5337 15.5972 15.7143 15.1426 15.7143H13.4283C13.4283 16.3205 13.1875 16.9019 12.7588 17.3305C12.3302 17.7592 11.7488 18 11.1426 18C10.5364 18 9.95499 17.7592 9.52633 17.3305C9.09768 16.9019 8.85686 16.3205 8.85686 15.7143H7.14258C6.68792 15.7143 6.25189 15.5337 5.93039 15.2122C5.6089 14.8907 5.42829 14.4547 5.42829 14V12.2857C4.82208 12.2857 4.2407 12.0449 3.81205 11.6162C3.38339 11.1876 3.14258 10.6062 3.14258 10C3.14258 9.39379 3.38339 8.81241 3.81205 8.38376C4.2407 7.9551 4.82208 7.71429 5.42829 7.71429V6C5.42829 5.54534 5.6089 5.10931 5.93039 4.78782C6.25189 4.46633 6.68792 4.28571 7.14258 4.28571H8.85686Z"/>
    </mask>
    <path d="M8.85686 4.28571C8.85686 3.67951 9.09768 3.09812 9.52633 2.66947C9.95499 2.24082 10.5364 2 11.1426 2C11.7488 2 12.3302 2.24082 12.7588 2.66947C13.1875 3.09812 13.4283 3.67951 13.4283 4.28571H15.1426C15.5972 4.28571 16.0333 4.46633 16.3548 4.78782C16.6763 5.10931 16.8569 5.54534 16.8569 6V8.85714H15.714C15.4109 8.85714 15.1202 8.97755 14.9059 9.19188C14.6916 9.40621 14.5712 9.6969 14.5712 10C14.5712 10.3031 14.6916 10.5938 14.9059 10.8081C15.1202 11.0224 15.4109 11.1429 15.714 11.1429H16.8569V14C16.8569 14.4547 16.6763 14.8907 16.3548 15.2122C16.0333 15.5337 15.5972 15.7143 15.1426 15.7143H13.4283C13.4283 16.3205 13.1875 16.9019 12.7588 17.3305C12.3302 17.7592 11.7488 18 11.1426 18C10.5364 18 9.95499 17.7592 9.52633 17.3305C9.09768 16.9019 8.85686 16.3205 8.85686 15.7143H7.14258C6.68792 15.7143 6.25189 15.5337 5.93039 15.2122C5.6089 14.8907 5.42829 14.4547 5.42829 14V12.2857C4.82208 12.2857 4.2407 12.0449 3.81205 11.6162C3.38339 11.1876 3.14258 10.6062 3.14258 10C3.14258 9.39379 3.38339 8.81241 3.81205 8.38376C4.2407 7.9551 4.82208 7.71429 5.42829 7.71429V6C5.42829 5.54534 5.6089 5.10931 5.93039 4.78782C6.25189 4.46633 6.68792 4.28571 7.14258 4.28571H8.85686Z" fill="#333333"/>
    <path d="M8.85686 4.28571V5.53571H10.1069V4.28571H8.85686ZM11.1426 2L11.1426 0.75L11.1426 2ZM13.4283 4.28571L12.1783 4.28571L12.1783 5.53571H13.4283V4.28571ZM16.8569 8.85714V10.1071H18.1069V8.85714H16.8569ZM16.8569 11.1429H18.1069V9.89286H16.8569V11.1429ZM16.8569 14H18.1069H16.8569ZM15.1426 15.7143L15.1426 16.9643L15.1426 15.7143ZM13.4283 15.7143V14.4643H12.1783V15.7143H13.4283ZM8.85686 15.7143L10.1069 15.7143L10.1069 14.4643H8.85686V15.7143ZM7.14258 15.7143V16.9643V15.7143ZM5.42829 12.2857H6.67829V11.0357H5.42829V12.2857ZM3.14258 10L1.89258 10L3.14258 10ZM5.42829 7.71429L5.42829 8.96429L6.67829 8.96429V7.71429H5.42829ZM7.14258 4.28571L7.14258 3.03571L7.14258 4.28571Z" fill="white" mask="url(#path-1-inside-1_2224_5077)"/>
  </svg>
);

export function EditIcon({ lottieRef }: { lottieRef: RefObject<LottieRefCurrentProps> }) {
  return (
    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full">
      <div className="scale-[0.8]"> 
        <Lottie 
          lottieRef={lottieRef}
          animationData={editAnimation}
          autoplay={false}
          loop={false}
        />
      </div>
    </div>
  );
}

function FolderIcon({ lottieRef }: { lottieRef: RefObject<LottieRefCurrentProps> }) {
  return (
    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full">
      <div className="scale-[0.7]">
        <Lottie 
          lottieRef={lottieRef}
          animationData={folderAnimation}
          autoplay={false}
          loop={false}
        />
      </div>
    </div>
  );
}

export function SettingsIcon({ lottieRef }: { lottieRef: RefObject<LottieRefCurrentProps> }) {
  return (
    <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center">
      <div className="-ml-0.6 scale-[0.7]">
        <Lottie 
          lottieRef={lottieRef}
          animationData={settingsAnimation}
          autoplay={false}
          loop={false}
        />
      </div>
    </div>
  );
}

function LinkIcon({ lottieRef }: { lottieRef: RefObject<LottieRefCurrentProps> }) {
  return (
    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-full">
      <div className="scale-[0.6]">
        <Lottie 
          lottieRef={lottieRef}
          animationData={linkAnimation}
          autoplay={false}
          loop={false}
        />
      </div>
    </div>
  );
}

export default function UploadSource() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [message, setMessage] = useState('');
  const editRef = useRef<LottieRefCurrentProps>(null);
  const folderRef = useRef<LottieRefCurrentProps>(null);
  const settingsRef = useRef<LottieRefCurrentProps>(null);
  const linkRef = useRef<LottieRefCurrentProps>(null);

  interface Card {
    icon: React.ElementType | ((props: { lottieRef: RefObject<LottieRefCurrentProps> }) => JSX.Element);
    label: string;
    ref?: RefObject<LottieRefCurrentProps>;
  }

  const cards: Card[] = [
    { 
      icon: (props: { lottieRef: RefObject<LottieRefCurrentProps> }) => <LinkIcon lottieRef={linkRef} />,
      label: "Drop Link",
      ref: linkRef
    },
    { 
      icon: (props: { lottieRef: RefObject<LottieRefCurrentProps> }) => <EditIcon lottieRef={editRef} />, 
      label: "Write Text",
      ref: editRef 
    },
    { 
      icon: (props: { lottieRef: RefObject<LottieRefCurrentProps> }) => <FolderIcon lottieRef={folderRef} />, 
      label: "Browse File",
      ref: folderRef
    },
    { 
      icon: (props: { lottieRef: RefObject<LottieRefCurrentProps> }) => <SettingsIcon lottieRef={settingsRef} />,
      label: "Use Extension",
      ref: settingsRef 
    }
  ];

  const handleCardClick = (label: string) => {
    setMessage(`Clicked: ${label}`);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative
      [background-image:linear-gradient(to_bottom_left,#2D2D2D_0%,#000000_60%),linear-gradient(to_bottom,#0D0D0D,#121212)]
      [background-origin:border-box]
      [background-clip:padding-box,border-box]">
      <div className="text-center w-[316px]">  {/* 150px * 2 + 16px gap */}
        <h1 className="text-[32px] font-extralight mb-2 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFFCC] bg-clip-text text-transparent">
          Upload Source
        </h1>
        <p className="text-sm mb-6 bg-gradient-to-b from-[#ABABAB] to-[#ABABAB99] bg-clip-text text-transparent">
          Share files of your choice to start a conversation
        </p>

        <div className="grid grid-cols-2 gap-4 justify-items-center w-full">
          {cards.map((item, index) => (
            <div 
              key={index}
              onClick={() => handleCardClick(item.label)}
              onMouseEnter={() => {
                if (item.ref) {
                  item.ref.current?.setDirection(1);
                  item.ref.current?.play();
                }
              }}
              onMouseLeave={() => {
                if (item.ref) {
                  item.ref.current?.setDirection(-1);
                  item.ref.current?.setSpeed(1.5);
                  item.ref.current?.play();
                }
              }}
              className={cn(
                "w-[150px] h-[105px] relative rounded-xl p-5",
                "flex flex-col items-center justify-center cursor-pointer overflow-hidden",
                "bg-gradient-to-tr from-[#292929] from-0% to-[#101010] to-100%",
                "border border-transparent",
                "[background-image:linear-gradient(to_top_right,#292929,#101010),linear-gradient(to_top_right,#202020,#404040)]",
                "[background-origin:border-box]",
                "[background-clip:padding-box,border-box]",
                "transition-all duration-300",
                "hover:[background-image:linear-gradient(to_top_right,#333232,#101010),linear-gradient(to_top_right,#202020,#404040)]",
                "hover:shadow-[inset_3px_-12px_30px_-15px_rgba(176,176,176,0.4)]",
                "group"
              )}
            >
              <div 
                className="w-[40px] aspect-square rounded-full grid place-items-center mb-2
                transition-all duration-300
                bg-[#262626]
                border border-transparent
                group-hover:[background-image:radial-gradient(circle_at_center,rgba(38,38,38,0.4)_0%,rgba(88,88,88,0.3)_100%)]
                group-hover:border-[#3D3D3D]"
              >
                {typeof item.icon === 'function' 
                  ? (item.icon as (props: { lottieRef: RefObject<LottieRefCurrentProps> }) => JSX.Element)({ lottieRef: item.ref! }) 
                  : React.createElement(item.icon, { size: 20, className: "text-white" })
                }
              </div>
              <span className="text-white text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showSnackbar && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, x: 20 }}
            className="fixed bottom-4 right-4 flex items-center gap-x-2 
              rounded-lg bg-gray-900 px-4 py-3 shadow-lg
              border border-gray-800"
          >
            <div className="text-sm font-medium text-gray-200">
              {message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Background() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <svg 
        className="w-full h-full"
        viewBox="0 0 1483 530" 
        fill="none" 
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_966_9076)" filter="url(#filter0_f_966_9076)">
          <rect width="1483" height="526" fill="url(#paint0_linear_966_9076)"/>
          <g opacity="0.2" filter="url(#filter1_f_966_9076)">
            <path d="M1484.54 -6.16317C1495.46 18.6 1402.87 115.841 1250.5 183C1098.13 250.159 943.678 261.806 932.763 237.043C921.848 212.28 1036.52 137.762 1188.89 70.6021C1341.26 3.4426 1473.63 -30.9264 1484.54 -6.16317Z" fill="url(#paint1_linear_966_9076)"/>
          </g>
          <g opacity="0.2" filter="url(#filter2_f_966_9076)">
            <path d="M1367 -13C1377.91 11.7632 1142.87 144.883 990.5 212.043C838.13 279.202 549.678 347.849 538.763 323.086C527.848 298.323 642.52 223.805 794.889 156.645C947.259 89.4856 1356.09 -37.7632 1367 -13Z" fill="url(#paint2_linear_966_9076)"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_966_9076" x="-4" y="-4" width="1491" height="534" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_966_9076"/>
          </filter>
          <filter id="filter1_f_966_9076" x="928.045" y="-18.2012" width="561.367" height="271.21" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_966_9076"/>
          </filter>
          <filter id="filter2_f_966_9076" x="526.045" y="-28.1514" width="853.322" height="368.408" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_966_9076"/>
          </filter>
          <linearGradient id="paint0_linear_966_9076" x1="1483" y1="0" x2="1234.47" y2="684.614" gradientUnits="userSpaceOnUse">
            <stop stopColor="#585858"/>
            <stop offset="0.924915" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint1_linear_966_9076" x1="1202" y1="199.5" x2="1477.53" y2="-22.0809" gradientUnits="userSpaceOnUse">
            <stop stopOpacity="0"/>
            <stop offset="1" stopColor="white" stopOpacity="0.1"/>
          </linearGradient>
          <linearGradient id="paint2_linear_966_9076" x1="1040" y1="174.5" x2="1315.53" y2="-47.0806" gradientUnits="userSpaceOnUse">
            <stop stopOpacity="0"/>
            <stop offset="1" stopColor="white" stopOpacity="0.2"/>
          </linearGradient>
          <clipPath id="clip0_966_9076">
            <rect width="1483" height="526" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}


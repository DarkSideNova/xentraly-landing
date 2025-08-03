import React, { useState } from "react";
import { IEcosystemCard } from "../../list"

type cardPropsType = {
    card: IEcosystemCard;
}

const Card: React.FC<cardPropsType> = ({ card }) => {

    const [hoverOnCard, setHoverOnCard] = useState(false);

    const Icon = () => {

        if (React.isValidElement(card.icon)) {
            return <div>{card.icon}</div>;
        }

        if (typeof card.icon === "function") {
            const MarkComponent = card.icon;
            return <MarkComponent />;
        }

        return null;
    };

    return (
        <div
            onMouseLeave={() => {
                setHoverOnCard(false)
            }}
            onMouseEnter={() => {
                setHoverOnCard(true)
            }}
            className="h-fit relative group"
        >
            {hoverOnCard ?
                <div className="w-[350px] h-[225px] absolute flex flex-col justify-start items-center left-0 top-0 p-8 gap-5 z-10">
                    <p className="text-[16px] font-normal text-[#242424]">{card.backDescription}</p>
                </div>
            :
                <div className="w-[350px] h-[225px] absolute flex flex-col justify-start items-center left-0 top-0 p-8 gap-5 z-10">
                    <div className="w-full flex justify-start items-center gap-3">
                        <span className="text-[#E88843] text-[25px]">
                            <Icon />
                        </span>
                        <p className="text-[18px] font-bold text-[#E1E1E1]">{card.title}</p>
                    </div>
                    <p className="text-[16px] font-normal text-[#E1E1E1]">{card.description}</p>
                </div>
            }
            <svg
                className="card-svg transition-transform duration-500 ease-in-out group-hover:-scale-x-100"
                xmlns="http://www.w3.org/2000/svg"
                width="350"
                height="225"
                viewBox="0 0 350 225"
                fill="none"
            >
                <path
                    d="M350 108.515C350 112.003 347.74 114.967 344.613 116.051C343.094 116.576 342.027 117.913 342.027 119.522V213.415C342.027 215.403 340.4 217.029 338.412 217.029H267.978C266.369 217.029 265.031 218.114 264.507 219.614C263.422 222.741 260.457 225 256.968 225C253.479 225 250.514 222.741 249.429 219.614C248.905 218.096 247.567 217.029 245.958 217.029H96.0692C94.4602 217.029 93.1224 218.114 92.5981 219.614C91.5134 222.741 88.5486 225 85.0594 225C81.5702 225 78.6054 222.741 77.5207 219.614C76.9964 218.096 75.6586 217.029 74.0496 217.029H3.6157C1.62707 217.029 0 215.403 0 213.415V121.401C0 119.757 1.13895 118.365 2.71178 117.913C6.77944 116.738 9.78047 112.961 9.78047 108.515C9.78047 104.069 6.79752 100.291 2.71178 99.1164C1.12087 98.6646 0 97.2729 0 95.6282V3.61475C0 1.62664 1.62707 0 3.6157 0H72.1694C73.8146 0 75.2066 1.13865 75.6586 2.71106C76.8337 6.77765 80.6121 9.75982 85.0594 9.75982C89.5067 9.75982 93.267 6.77765 94.4602 2.71106C94.9122 1.12057 96.3042 0 97.9494 0H244.078C245.723 0 247.115 1.13865 247.567 2.71106C248.742 6.77765 252.521 9.75982 256.968 9.75982C261.415 9.75982 265.176 6.77765 266.369 2.71106C266.821 1.12057 268.213 0 269.858 0H338.412C340.4 0 342.027 1.62664 342.027 3.61475V97.5078C342.027 99.1164 343.112 100.454 344.631 100.978C347.758 102.062 350 105.027 350 108.515Z"
                    fill={hoverOnCard ? "url(#paint1_linear_382_454)" : "url(#paint0_linear_382_454)"} />
                <defs>
                    <linearGradient id="paint0_linear_382_454" x1="149.107" y1="299.013" x2="155.657" y2="4.6087" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0B0F19" />
                        <stop offset="1" stopColor="#151C2F" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_382_454" x1="149.107" y1="299.013" x2="155.657" y2="4.6087" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFFFFF" />
                        <stop offset="1" stopColor="#E1E1E1" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}
export default Card
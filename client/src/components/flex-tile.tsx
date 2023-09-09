import * as React from "react";

interface FlexTileProps {
  children: React.ReactNode;
  color?: string;
  textColor?: string;
  height?: number;
  className?: any;
}

const FlexTile: React.FC<FlexTileProps> = ({
  children,
  color = "bg-blue-950",
  textColor = "text-white",
  height = 75,
  className,
}) => {
  return (
    <div
      className={`w-full ${textColor} flex flex-col ${color} md:flex-row h-auto min-h-[${height}vh] p-10 justify-start items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default FlexTile;

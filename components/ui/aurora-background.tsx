"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";

export interface AuroraBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Digunakan untuk membuat efek gradien yang mengikuti mouse
  const motionTemplate = useMotionTemplate`
    radial-gradient(
      200px circle at ${mouseX}px ${mouseY}px,
      hsl(var(--primary) / 0.1) 0%,
      transparent 80%
    ),
    radial-gradient(
      200px circle at ${mouseX}px ${mouseY}px,
      hsl(var(--accent) / 0.1) 0%,
      transparent 80%
    )
  `;

  // Digunakan untuk membuat efek "blur" aurora yang bergerak di background
  const animatedMotionTemplate = useMotionTemplate`
    radial-gradient(
      circle at 50% 50%,
      transparent 20%,
      hsl(var(--primary) / 0.1) 30%,
      hsl(var(--accent) / 0.1) 40%,
      hsl(var(--primary) / 0.1) 50%,
      transparent 70%
    )
  `;

  React.useEffect(() => {
    // Animasi untuk "blur" aurora di background
    animate(
      mouseX, // Anda bisa ganti ini ke nilai statis jika tidak ingin animasi
      [0, 1000, 0],
      {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
      }
    );
    animate(
      mouseY, // Anda bisa ganti ini ke nilai statis jika tidak ingin animasi
      [0, 800, 0],
      {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
      }
    );
  }, [mouseX, mouseY]);

  return (
    <div
      className={cn(
        "relative flex flex-col h-screen items-center justify-center bg-background text-foreground transition-bg",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className={cn(
            "absolute inset-0 z-0",
            "opacity-30", // Opacity untuk aurora blur
            "[mask-image:radial-gradient(100%_100%_at_50%_50%,white,transparent)]"
          )}
          style={{
            backgroundImage: animatedMotionTemplate,
          }}
        />
        {showRadialGradient && (
          <motion.div
            className={cn(
              "absolute inset-0 z-0",
              "opacity-100", // Opacity untuk gradien mouse
              "[mask-image:radial-gradient(100%_100%_at_50%_50%,white,transparent)]"
            )}
            style={{
              backgroundImage: motionTemplate,
            }}
          />
        )}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
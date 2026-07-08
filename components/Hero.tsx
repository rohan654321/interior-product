"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
    return (
        <section className="relative h-screen overflow-hidden">
            <HeroBackground />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35 z-10" />

            <HeroContent />

            <ScrollIndicator />
        </section>
    );
}
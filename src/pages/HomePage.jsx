// Path: src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import WalletSystem from '../components/WalletSystem';

/**
 * HomePage - Main Landing Page
 * Integrates all components except LegalSection which is now on a separate page.
 */
export default function HomePage() {
    return (
        <>
            <Hero />
            <Features />
            <HowItWorks />
            <WalletSystem />
        </>
    );
}
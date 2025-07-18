import React from 'react';
import { ExternalLink } from 'react-external-link'
import { FaTwitterSquare, FaGithubSquare, FaLinkedin, FaInstagram } from 'react-icons/fa'
import './Footer-Menu.css'

export default function FooterMenu() {
    return (
        <div className="footer animate-fade-in-up">
            <div className="icons">
                <div className="animate-scale-in animate-delay-1">
                    <ExternalLink href="https://github.com/Nerdyxils/" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare className="icon" />
                    </ExternalLink>
                </div>
                <div className="animate-scale-in animate-delay-2">
                    <ExternalLink href="https://www.linkedin.com/in/abiodun-silas-timi/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" />
                    </ExternalLink>
                </div>
                <div className="animate-scale-in animate-delay-3">
                    <ExternalLink href="https://x.com/Ayomide_muyi" target="_blank" rel="noopener noreferrer">
                        <FaTwitterSquare className="icon" />
                    </ExternalLink>
                </div>
                <div className="animate-scale-in animate-delay-4">
                    <ExternalLink href="https://www.instagram.com/xilssilas/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" />
                    </ExternalLink>
                </div>
            </div>
        </div>
    )
}
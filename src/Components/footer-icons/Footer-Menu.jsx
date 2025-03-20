import React from 'react';
import { ExternalLink } from 'react-external-link'
import { FaTwitterSquare, FaGithubSquare, FaLinkedin, FaPhoneSquare, FaSkype } from 'react-icons/fa'
import './Footer-Menu.css'

export default function FooterMenu() {
    return (
        <div className="footer">
            <div className="icons">
                <ExternalLink href="https://github.com/Nerdyxils/">
                    <FaGithubSquare className="icon" />
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/abiodun-silas-timi/">
                    <FaLinkedin className="icon" />
                </ExternalLink>
                <ExternalLink href="tel:+16479377031">
                    <FaPhoneSquare className="icon" />
                </ExternalLink>
            </div>
        </div>
    )
}
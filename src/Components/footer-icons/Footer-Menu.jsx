import React from 'react';
import { ExternalLink } from 'react-external-link'
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import './Footer-Menu.css'

export default function FooterMenu() {
    return (
        <div className="footer">
            <div className="icons">
                <ExternalLink href="https://github.com/Nerdyxils/">
                    <FaGithubSquare className="icon" />
                </ExternalLink>
                <ExternalLink href="https://twitter.com/Ayomide_muyi">
                    <FaTwitterSquare className="icon" />
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/abiodun-silas-timi/">
                    <FaLinkedin className="icon" />
                </ExternalLink>
            </div>
        </div>
    )
}
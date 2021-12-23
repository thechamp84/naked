import { Container, Divider, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import aseelBlueLogo from 'Assets/aseel-blue.png';
import { useTranslation } from 'react-i18next';
import { footerSections } from './Constants/FooterSections';

const useStyle = makeStyles((theme) => ({
    footerFirstSection: {
        backgroundColor: theme.palette.background.paper,
        padding: `${theme.spacing(12)} ${theme.spacing(3)}`,
    },
    footerSecondSection: {
        backgroundColor: theme.palette.primary.main,
        padding: `${theme.spacing(6)} ${theme.spacing(3)}`,
        color: theme.palette.primary.contrastText,
    },
}));

export default function Footer() {
    const classes = useStyle();
    const { t } = useTranslation();

    return (
        <div>
            <Divider />
            <div className={classes.footerFirstSection}>
                <Container maxWidth="xl">
                    <div className="gap-4 md:grid md:grid-cols-5">
                        <div className="self-center">
                            <img src={aseelBlueLogo} className="w-auto h-20 mb-4" alt="Aseel Logo" />
                            <p className="text-gray-800">Invest in real estate in the world's best cities.</p>
                        </div>

                        {footerSections().map((section, index) => (
                            <div key={index}>
                                <Typography variant="h6" component="h1" className="mb-4">
                                    {t('footer.forInvestors')}
                                </Typography>
                                <ul>
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link href={link.href} variant="body1" underline="none">
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            <div className={classes.footerSecondSection}>
                <Container maxWidth="xl">
                    <div className="flex justify-between">
                        <div className="text-gray-300">{t('footer.madeInKsa')}</div>

                        <div className=""></div>

                        <div></div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

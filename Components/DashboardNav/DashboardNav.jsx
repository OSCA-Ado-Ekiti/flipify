import React from 'react';
import Link from 'next/link';
import DashLink from './DashLink';
import styles from './dashNav.module.css';
import {
    PanelIco,
    DeployLogsIco,
    CreateProjectIco,
    DocsIco,
    LogoutIco,
} from '../SVG/Svgs';

function DashboardNav() {
    return (
        <div className={styles.dashboardParent}>
            <div className={styles.dashParent__Inner}>
                <img src="/logo.png" alt="logo" />
                <div className={styles.navLinks__Parent}>
                    <DashLink Svg={<PanelIco />} Name={'Panel'} to="/panel" />
                    <DashLink
                        Svg={<CreateProjectIco />}
                        Name={'Create Project'}
                        to="/createAProject"
                    />
                    <DashLink
                        Svg={<DeployLogsIco />}
                        Name={'Deploy Logs'}
                        to="/"
                    />
                    <DashLink Svg={<DocsIco />} Name={'Documentation'} to="/" />
                    <div className={styles.logoutBtn}>
                        <LogoutIco /> <p>Log out</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardNav;

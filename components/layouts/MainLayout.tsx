'use client';

import styles from "./layouts.module.scss";
import * as React from 'react';

interface LayoutProps {
    children: React.ReactNode
}

export default function MainLayout( {children} : LayoutProps) {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}
